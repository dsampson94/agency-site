'use client'
import { useState, useId } from 'react'
import {FadeIn} from './FadeIn';
import {Button} from './Button';

function TextInput({ label, ...props }) {
    const id = useId()
    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                id={id}
                placeholder=" "
                className="
          peer block w-full border border-neutral-300
          bg-transparent px-6 pb-4 pt-12 text-base/6
          text-neutral-950 ring-4 ring-transparent
          transition focus:border-neutral-950
          focus:outline-none focus:ring-neutral-950/5
          group-first:rounded-t-2xl group-last:rounded-b-2xl
        "
                {...props}
            />
            <label
                htmlFor={id}
                className="
          pointer-events-none absolute left-6 top-1/2 -mt-3
          origin-left text-base/6 text-neutral-500
          transition-all duration-200
          peer-focus:-translate-y-4 peer-focus:scale-75
          peer-focus:font-semibold peer-focus:text-neutral-950
          peer-[:not(:placeholder-shown)]:-translate-y-4
          peer-[:not(:placeholder-shown)]:scale-75
          peer-[:not(:placeholder-shown)]:font-semibold
          peer-[:not(:placeholder-shown)]:text-neutral-950
        "
            >
                {label}
            </label>
        </div>
    )
}

export function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        budget: '',
        website: '',
        nickname: '',
    })

    const [status, setStatus] = useState(null)

    function handleChange(e) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus(null)

        // 🛡️ Simple bot protection
        if (form.website.trim() !== '' || form.nickname.trim() !== '') {
            console.warn('Bot submission blocked ❌')
            return
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            data.success ? setStatus('success') : setStatus('error')
        } catch (err) {
            console.error('Submit error:', err)
            setStatus('error')
        }
    }

    return (
        <FadeIn>
            <form onSubmit={handleSubmit}>
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Enquiries
                </h2>

                {/* 🔒 Honeypot field (invisible to users) */}
                <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    autoComplete="off"
                    tabIndex={-1}
                />

                <input
                    type="text"
                    name="nickname"
                    value={form.nickname}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    autoComplete="off"
                    tabIndex={-1}
                />

                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Company"
                        name="company"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>

                <Button type="submit" className="mt-10">
                    Let&apos;s work together
                </Button>

                {status === 'success' && (
                    <p className="mt-4 text-green-600">
                        Thanks! We’ve received your message.
                    </p>
                )}
                {status === 'error' && (
                    <p className="mt-4 text-red-600">
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </FadeIn>
    )
}
