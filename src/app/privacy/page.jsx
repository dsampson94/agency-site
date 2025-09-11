import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How SuperStack protects and handles your personal information.',
}

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        <p>
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="prose prose-neutral max-w-none prose-h2:text-neutral-900 prose-h3:text-neutral-800">
            <p className="text-xl text-neutral-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>
              When you contact us or use our services, we may collect personal information such as:
            </p>
            <ul>
              <li>Your name and email address</li>
              <li>Company information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Technical Information</h3>
            <p>
              We automatically collect certain technical information when you visit our website:
            </p>
            <ul>
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring websites</li>
              <li>Device and operating system information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our development services</li>
              <li>Communicate with you about projects and updates</li>
              <li>Send relevant information about our services</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul>
              <li>Secure data transmission using SSL encryption</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Secure data storage practices</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your information may be processed and stored in countries other than South Africa. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacy@superstack.co.za">privacy@superstack.co.za</a></li>
              <li>Website: <a href="https://www.superstack.co.za">www.superstack.co.za</a></li>
            </ul>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
