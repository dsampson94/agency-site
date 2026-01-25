'use client';

import { useState, useId, useCallback, type FormEvent, type ChangeEvent } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/Button';
import { isValidEmail, isValidPhone, sanitizeInput } from '@/lib/validation';
import { focusStyles, announce } from '@/lib/accessibility';

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string | undefined;
  hint?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ label, error, hint, id: providedId, ...props }: TextInputProps) {
  const generatedId = useId();
  const id = providedId || generatedId;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        placeholder=" "
        className={`
          peer block w-full border
          ${error ? 'border-red-500' : 'border-neutral-300'}
          bg-transparent px-6 pb-4 pt-12 text-base/6
          text-neutral-950 ring-4 ring-transparent
          transition focus:border-neutral-950
          focus:outline-none focus:ring-neutral-950/5
          group-first:rounded-t-2xl group-last:rounded-b-2xl
          ${focusStyles.visible}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        {...props}
      />
      <label
        htmlFor={id}
        className={`
          pointer-events-none absolute left-6 top-1/2 -mt-3
          origin-left text-base/6
          ${error ? 'text-red-500' : 'text-neutral-500'}
          transition-all duration-200
          peer-focus:-translate-y-4 peer-focus:scale-75
          peer-focus:font-semibold
          ${error ? 'peer-focus:text-red-500' : 'peer-focus:text-neutral-950'}
          peer-[:not(:placeholder-shown)]:-translate-y-4
          peer-[:not(:placeholder-shown)]:scale-75
          peer-[:not(:placeholder-shown)]:font-semibold
          ${error 
            ? 'peer-[:not(:placeholder-shown)]:text-red-500' 
            : 'peer-[:not(:placeholder-shown)]:text-neutral-950'
          }
        `}
      >
        {label}
        {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      {error && (
        <p id={errorId} className="absolute -bottom-5 left-6 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className="absolute -bottom-5 left-6 text-xs text-neutral-400">
          {hint}
        </p>
      )}
    </div>
  );
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  website: string;
  nickname: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  website: '',
  nickname: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const validateField = useCallback((name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        if (value.length > 100) return 'Name must be less than 100 characters';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!isValidEmail(value)) return 'Please enter a valid email address';
        return undefined;

      case 'phone':
        if (value.trim() && !isValidPhone(value)) {
          return 'Please enter a valid phone number';
        }
        return undefined;

      case 'company':
        if (value.length > 100) return 'Company name must be less than 100 characters';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > 2000) return 'Message must be less than 2000 characters';
        return undefined;

      default:
        return undefined;
    }
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(form) as Array<keyof FormData>).forEach((field) => {
      if (field === 'website' || field === 'nickname') return;
      
      const error = validateField(field, form[field]);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [form, validateField]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value, { maxLength: 2000, stripXSS: true });
    
    setForm((prev) => ({ ...prev, [name]: sanitizedValue }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => new Set(prev).add(name));
    
    const error = validateField(name as keyof FormData, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, [validateField]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    
    // Bot protection
    if (form.website.trim() !== '' || form.nickname.trim() !== '') {
      console.warn('Bot submission blocked ❌');
      setStatus({ type: 'error', message: 'Bot submission detected. Please try again.' });
      return;
    }

    // Validate form
    if (!validateForm()) {
      announce('Please fix the errors in the form', 'assertive');
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });
    announce('Sending your message...', 'polite');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Thanks! We\'ve received your message and will get back to you soon.' });
        setForm(initialFormData);
        setTouched(new Set());
        setErrors({});
        announce('Your message has been sent successfully!', 'assertive');
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
        announce('Failed to send message. Please try again.', 'assertive');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus({ type: 'error', message: 'An error occurred while submitting your form. Please try again.' });
      announce('An error occurred. Please try again.', 'assertive');
    }
  }, [form, validateForm]);

  const isSubmitting = status.type === 'loading';

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Enquiries
        </h2>

        {/* Honeypot fields */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
          <input
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.has('name') ? errors.name : undefined}
            required
            aria-required="true"
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.has('email') ? errors.email : undefined}
            required
            aria-required="true"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.has('company') ? errors.company : undefined}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.has('phone') ? errors.phone : undefined}
            hint="Optional - include country code for international"
          />
          <TextInput
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.has('message') ? errors.message : undefined}
            required
            aria-required="true"
          />
        </div>

        <Button 
          type="submit" 
          variant="primary"
          size="md"
          className="mt-10"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Let\'s work together'}
        </Button>

        {/* Status messages */}
        <div className="mt-4 min-h-[24px]" role="status" aria-live="polite">
          {status.type === 'success' && (
            <p className="text-emerald-600 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {status.message}
            </p>
          )}
          {status.type === 'error' && (
            <p className="text-red-600 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {status.message}
            </p>
          )}
        </div>
      </form>
    </FadeIn>
  );
}

export default ContactForm;
