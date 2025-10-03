import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using SuperStack development services.',
}

export default function Terms() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Service">
        <p>
          These terms govern your use of our website and development services. Please read them carefully.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="prose prose-neutral max-w-none prose-h2:text-neutral-900 prose-h3:text-neutral-800">
            <p className="text-xl text-neutral-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using SuperStack's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Description of Services</h2>
            <p>
              SuperStack provides web development, mobile app development, and AI agent development services including:
            </p>
            <ul>
              <li>Custom web application development</li>
              <li>Mobile application development</li>
              <li>AI agent and chatbot development</li>
              <li>Website design and development</li>
              <li>Technical consulting and support</li>
              <li>Project management and delivery</li>
            </ul>

            <h2>User Responsibilities</h2>
            <p>
              When using our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Communicate professionally and respectfully</li>
              <li>Fulfill all agreed obligations promptly</li>
            </ul>

            <h2>Project Terms</h2>
            
            <h3>Project Scope</h3>
            <p>
              All development projects will be governed by a separate project agreement that outlines specific deliverables and timelines.
            </p>

            <h3>Payment Terms</h3>
            <p>
              Unless otherwise agreed in writing:
            </p>
            <ul>
              <li>Payment schedules will be outlined in project agreements</li>
              <li>Invoices are due within 30 days of receipt</li>
              <li>Late payments may incur additional charges</li>
              <li>Refunds are subject to project-specific terms</li>
            </ul>

            <h3>Timeline and Delivery</h3>
            <p>
              Project timelines are estimates based on the agreed scope. Delays may occur due to:
            </p>
            <ul>
              <li>Changes in project requirements</li>
              <li>Delayed feedback or approvals</li>
              <li>Technical complexities</li>
              <li>Third-party dependencies</li>
            </ul>

            <h2>Intellectual Property</h2>
            
            <h3>Client Content</h3>
            <p>
              You retain ownership of all content, data, and materials you provide to us for use in your project.
            </p>

            <h3>Developed Work</h3>
            <p>
              Upon full payment, you will own the custom code and designs specifically created for your project, subject to any third-party licenses.
            </p>

            <h3>SuperStack IP</h3>
            <p>
              We retain ownership of our proprietary tools, methodologies, and any pre-existing intellectual property used in projects.
            </p>

            <h2>Warranties and Disclaimers</h2>
            <p>
              Our services are provided "as is" and "as available." While we strive for excellence:
            </p>
            <ul>
              <li>We cannot guarantee uninterrupted or error-free service</li>
              <li>We make no warranties regarding third-party integrations</li>
              <li>Performance may vary based on hosting and infrastructure</li>
              <li>We recommend regular backups and security measures</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, SuperStack's liability is limited to the amount paid for the specific service that gave rise to the claim. We are not liable for:
            </p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits or business opportunities</li>
              <li>Data loss or corruption</li>
              <li>Third-party actions or failures</li>
            </ul>

            <h2>Support and Maintenance</h2>
            <p>
              Post-launch support and maintenance services are available separately and governed by specific support agreements.
            </p>

            <h2>Confidentiality</h2>
            <p>
              We respect the confidentiality of your business information and will:
            </p>
            <ul>
              <li>Keep your project details confidential</li>
              <li>Not share your information with unauthorized parties</li>
              <li>Use appropriate security measures</li>
              <li>Sign additional NDAs when required</li>
            </ul>

            <h2>Termination</h2>
            <p>
              Either party may terminate services with appropriate notice as outlined in project agreements. Upon termination:
            </p>
            <ul>
              <li>Payment for completed work is due</li>
              <li>Work products will be delivered as agreed</li>
              <li>Confidentiality obligations continue</li>
              <li>Access to development resources may be revoked</li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of South Africa. Any disputes will be resolved through the courts of South Africa.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these terms or our services, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:legal@superstack.co.za">legal@superstack.co.za</a></li>
              <li>Website: <a href="https://www.superstack.co.za">www.superstack.co.za</a></li>
              <li>Phone: <a href="https://calendly.com/davesampson15/30min">Schedule a consultation</a></li>
            </ul>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
