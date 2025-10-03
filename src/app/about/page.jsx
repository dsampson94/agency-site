import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Building technology that makes a difference"
        invert
      >
        <p>
          We believe in creating solutions that not only solve problems but also drive meaningful impact for our clients and their users.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation" invert>
            We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.
          </GridListItem>
          <GridListItem title="Quality" invert>
            Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail, ensuring robust, scalable, and maintainable solutions.
          </GridListItem>
          <GridListItem title="Partnership" invert>
            We work closely with our clients as trusted partners, understanding their business goals and challenges to deliver solutions that truly make a difference.
          </GridListItem>
          <GridListItem title="Excellence" invert>
            We&apos;re committed to delivering exceptional results on time and within budget, backed by our extensive experience across multiple industries and technologies.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Expertise() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Our Expertise
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <FadeIn>
          <article>
            <Border position="left" className="pl-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-neutral-950 mb-4">
                    AI & Machine Learning Development
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    We specialize in developing AI-powered solutions that automate complex processes and provide intelligent insights. From natural language processing to computer vision, we implement cutting-edge AI technologies that transform how businesses operate.
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Custom AI model development</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Open-source model implementation</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Real-time processing systems</li>
                  </ul>
                </div>
              </div>
            </Border>
          </article>
        </FadeIn>

        <FadeIn>
          <article>
            <Border position="left" className="pl-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-neutral-950 mb-4">
                    Enterprise Software Development
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    We build scalable enterprise solutions that handle complex business processes and serve thousands of users. Our expertise spans web applications, mobile platforms, and cloud infrastructure that grows with your business.
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Full-stack web applications</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Mobile app development</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Cloud architecture & deployment</li>
                  </ul>
                </div>
              </div>
            </Border>
          </article>
        </FadeIn>

        <FadeIn>
          <article>
            <Border position="left" className="pl-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-neutral-950 mb-4">
                    Digital Transformation
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    We help businesses modernize their technology stack and processes, whether it&apos;s migrating legacy systems to the cloud, implementing new digital workflows, or rescuing troubled projects with modern solutions.
                  </p>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Legacy system modernization</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Project rescue & recovery</li>
                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Technology strategy consulting</li>
                  </ul>
                </div>
              </div>
            </Border>
          </article>
        </FadeIn>
      </div>
    </Container>
  )
}

function Approach() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Our Approach
        </h2>
        <div className="mt-6 text-xl text-neutral-600">
          <p>
            We combine deep technical expertise with a collaborative approach that puts your business goals at the center of everything we do.
          </p>
        </div>
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <FadeIn>
          <div className="lg:pl-8">
            <h3 className="font-display text-base font-semibold text-neutral-950">
              Discovery & Strategy
            </h3>
            <div className="mt-6 text-base text-neutral-600">
              <p>
                We start every project by deeply understanding your business, your users, and your technical requirements. This foundation ensures we build solutions that truly address your needs.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="lg:pl-8">
            <h3 className="font-display text-base font-semibold text-neutral-950">
              Agile Development
            </h3>
            <div className="mt-6 text-base text-neutral-600">
              <p>
                Our iterative development process keeps you involved throughout the project, with regular demos and feedback cycles that ensure we&apos;re always building exactly what you need.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="lg:pl-8">
            <h3 className="font-display text-base font-semibold text-neutral-950">
              Quality Assurance
            </h3>
            <div className="mt-6 text-base text-neutral-600">
              <p>
                Every solution we deliver undergoes rigorous testing and code review. We build with scalability and maintainability in mind, ensuring your investment continues to deliver value.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="lg:pl-8">
            <h3 className="font-display text-base font-semibold text-neutral-950">
              Ongoing Support
            </h3>
            <div className="mt-6 text-base text-neutral-600">
              <p>
                Our relationship doesn&apos;t end at launch. We provide ongoing support, maintenance, and enhancement services to help your solution evolve with your business needs.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We are a specialized development team focused on AI solutions and enterprise software that drives real business results.',
}

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About us" title="Transforming businesses with cutting-edge technology">
        <p>
          We are a specialized development team focused on AI solutions and enterprise software that drives real business results.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Founded with a vision to bridge the gap between advanced technology and practical business solutions, we combine deep technical expertise with a genuine understanding of business challenges. Our team specializes in developing complex solutions for businesses across multiple sectors.
          </p>
          <p>
            What sets us apart is our ability to take cutting-edge technologies like AI and machine learning and implement them in ways designed to create immediate, measurable business value. We specialize in automating complex processes and building scalable platforms, focusing on solutions that truly make a difference.
          </p>
        </div>
      </PageIntro>
      
      <Container className="mt-16">
        <StatList>
          <StatListItem value="3+" label="Years focused experience" />
          <StatListItem value="Next.js" label="Primary framework" />
          <StatListItem value="React" label="Frontend specialty" />
          <StatListItem value="Python" label="Backend technology" />
        </StatList>
      </Container>

      <Values />
      <Expertise />
      <Approach />

      <ContactSection />
    </>
  )
}
