import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discovery" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every successful project begins with a deep understanding of your{' '}
          <strong className="font-semibold text-neutral-950">business goals</strong> and
          technical requirements. We work closely with your team to uncover the core challenges
          and opportunities that will drive the solution design.
        </p>
        <p>
          Our discovery process includes stakeholder interviews, technical assessments, and 
          user research to ensure we build exactly what you need. We analyze your existing 
          systems, identify integration requirements, and map out{' '}
          <strong className="font-semibold text-neutral-950">user journeys</strong> to 
          create a comprehensive understanding of the project scope.
        </p>
        <p>
          The result is a detailed{' '}
          <strong className="font-semibold text-neutral-950">project roadmap</strong> with 
          clear deliverables, timelines, and success metrics that align with your business objectives.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Technical assessment</TagListItem>
        <TagListItem>User research</TagListItem>
        <TagListItem>Requirements analysis</TagListItem>
        <TagListItem>Architecture planning</TagListItem>
        <TagListItem>Project roadmap</TagListItem>
      </TagList>
    </Section>
  )
}

function Design() {
  return (
    <Section title="Design & Planning" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With a clear understanding of your requirements, we design a solution that balances{' '}
          <strong className="font-semibold text-neutral-950">user experience</strong> with
          technical excellence. Our design process focuses on creating intuitive interfaces
          and robust system architectures.
        </p>
        <p>
          We create detailed wireframes, user interface designs, and technical specifications
          that serve as the blueprint for development. Our iterative design process includes
          regular feedback sessions to ensure the solution meets your expectations before
          development begins.
        </p>
        <p>
          This phase culminates in a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">technical specification</strong> and
          design system that guides the entire development process.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>User interface design</TagListItem>
        <TagListItem>System architecture</TagListItem>
        <TagListItem>Database design</TagListItem>
        <TagListItem>API specifications</TagListItem>
        <TagListItem>Security planning</TagListItem>
        <TagListItem>Performance optimization</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Development" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our development process follows agile methodologies with regular sprints and
          continuous integration. We build solutions using{' '}
          <strong className="font-semibold text-neutral-950">modern technologies</strong> and
          best practices to ensure scalability, maintainability, and performance.
        </p>
        <p>
          Throughout development, we maintain transparent communication with regular demos
          and progress updates. Our code undergoes rigorous testing and review processes
          to ensure quality and reliability. We implement{' '}
          <strong className="font-semibold text-neutral-950">automated testing</strong> and
          continuous deployment pipelines for efficient delivery.
        </p>
        <p>
          Each feature is thoroughly tested and documented before deployment, ensuring a
          smooth transition to production with minimal disruption to your operations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Agile development</TagListItem>
        <TagListItem>Code review process</TagListItem>
        <TagListItem>Automated testing</TagListItem>
        <TagListItem>Regular demos</TagListItem>
        <TagListItem>Documentation</TagListItem>
        <TagListItem>Security auditing</TagListItem>
      </TagList>
    </Section>
  )
}

function Deploy() {
  return (
    <Section title="Launch & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We handle the complete deployment process, ensuring your solution goes live
          smoothly with minimal downtime. Our deployment includes{' '}
          <strong className="font-semibold text-neutral-950">infrastructure setup</strong>,
          data migration, and comprehensive testing in the production environment.
        </p>
        <p>
          Post-launch, we provide ongoing support and monitoring to ensure optimal
          performance. We offer training for your team and comprehensive documentation
          to help you get the most out of your new solution.
        </p>
        <p>
          Our{' '}
          <strong className="font-semibold text-neutral-950">maintenance and support</strong> services
          ensure your solution continues to perform excellently as your business grows and evolves.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Production deployment</TagListItem>
        <TagListItem>Performance monitoring</TagListItem>
        <TagListItem>User training</TagListItem>
        <TagListItem>Documentation</TagListItem>
        <TagListItem>Ongoing support</TagListItem>
        <TagListItem>Feature enhancements</TagListItem>
      </TagList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Delivering excellence through proven processes"
      >
        <p>
          Our structured approach ensures consistent, high-quality results while maintaining
          flexibility to adapt to your unique requirements and business goals.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Transparency">
            We believe in open communication throughout the project lifecycle. You'll always
            know what we're working on, what challenges we're facing, and how we're solving them.
          </GridListItem>
          <GridListItem title="Quality">
            Every line of code is written with maintainability and scalability in mind. We follow
            industry best practices and conduct thorough testing to ensure reliable solutions.
          </GridListItem>
          <GridListItem title="Collaboration">
            Your success is our success. We work as an extension of your team, incorporating
            your feedback and expertise throughout the development process.
          </GridListItem>
          <GridListItem title="Innovation">
            We stay current with the latest technologies and methodologies to deliver
            cutting-edge solutions that give you a competitive advantage.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'Our proven development process ensures we deliver exceptional results on time and within budget.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We follow a proven, collaborative approach that ensures successful project delivery
          while maintaining the flexibility to adapt to your unique requirements.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Design />
        <Build />
        <Deploy />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
