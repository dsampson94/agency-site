import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'

import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'

export const metadata = {
  title: 'Software Development Pretoria | Enterprise Solutions Gauteng',
  description: 'Leading software development company in Pretoria, Gauteng. Enterprise software, custom applications, and government solutions. Expert developers serving Tshwane and surrounding areas.',
  keywords: 'software development Pretoria, web development Tshwane, Pretoria custom software, enterprise solutions Gauteng, government software Pretoria, Tshwane technology solutions',
  openGraph: {
    title: 'Software Development Pretoria | Enterprise Solutions Gauteng',
    description: 'Leading software development company in Pretoria, Gauteng. Enterprise software, custom applications, and government solutions.',
    url: 'https://www.superstack.co.za/software-development-pretoria',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Pretoria | Enterprise Solutions Gauteng',
    description: 'Leading software development company in Pretoria, Gauteng. Enterprise software, custom applications, and government solutions.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/software-development-pretoria',
  },
}

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
    <Section title="Understanding Pretoria's Enterprise Landscape" image={{ src: imageLaptop }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As South Africa's administrative capital, Pretoria hosts government departments, 
          major corporations, and leading educational institutions. This unique environment 
          demands enterprise-grade software solutions that meet strict compliance and 
          security requirements.
        </p>
        <p>
          Our team understands the complexities of government procurement processes, 
          enterprise compliance needs, and the high standards expected from Tshwane-based 
          organizations serving national interests.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Sectors We Serve in Tshwane
      </h3>
      <List className="mt-4">
        <ListItem>Government departments and agencies</ListItem>
        <ListItem>Universities and research institutions</ListItem>
        <ListItem>Corporate headquarters and enterprises</ListItem>
        <ListItem>Healthcare and medical centers</ListItem>
        <ListItem>Financial services and banking</ListItem>
        <ListItem>Mining and resources companies</ListItem>
      </List>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Enterprise-Grade Development" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Pretoria organizations require software that can handle scale, ensure security, 
          and meet regulatory compliance. Our enterprise development approach delivers 
          robust solutions that power critical operations across government and business.
        </p>
        <p>
          From Hatfield tech startups to Union Buildings government systems, we build 
          software that meets the highest standards of security, performance, and reliability 
          expected in South Africa's capital.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Pretoria Project Highlights
      </h3>
      <GridList className="mt-4">
        <GridListItem>Government portal serving 2M+ citizens</GridListItem>
        <GridListItem>University systems designed for large-scale student management</GridListItem>
        <GridListItem>Corporate ERP handling high-volume transactions</GridListItem>
        <GridListItem>Healthcare systems designed for multi-facility connectivity</GridListItem>
      </GridList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Compliance & Security First" image={{ src: imageLaptop }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Enterprise and government clients in Pretoria demand the highest levels of 
          security, compliance, and ongoing support. Our solutions are built with 
          POPIA compliance, government security standards, and enterprise-grade 
          monitoring from day one.
        </p>
        <p>
          We provide 24/7 support, regular security updates, and compliance monitoring 
          to ensure your systems continue meeting the strict requirements of Tshwane's 
          institutional environment.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Why Pretoria Enterprises Choose Us
      </h3>
      <List className="mt-8">
        <ListItem>
          <strong>Compliance Expertise:</strong> Deep understanding of government and enterprise requirements
        </ListItem>
        <ListItem>
          <strong>Security First:</strong> Enterprise-grade security and POPIA compliance built-in
        </ListItem>
        <ListItem>
          <strong>Scale & Performance:</strong> Systems designed to handle enterprise-level loads
        </ListItem>
        <ListItem>
          <strong>24/7 Support:</strong> Critical system support when your operations depend on it
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro
        eyebrow="Our approach to Pretoria development"
        title="Enterprise solutions for South Africa's capital"
      >
        <p>
          Pretoria's role as the administrative capital and corporate hub demands software 
          that meets the highest standards. We deliver enterprise solutions that power 
          critical operations across government and business.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Government Ready" invert>
            Understanding procurement processes, compliance requirements, and security 
            standards ensures solutions that meet government specifications.
          </GridListItem>
          <GridListItem title="Enterprise Scale" invert>
            Built for the scale and complexity of major corporations, universities, 
            and government departments operating from Tshwane.
          </GridListItem>
          <GridListItem title="Security Focus" invert>
            Enterprise-grade security, POPIA compliance, and audit trails built 
            into every solution from the ground up.
          </GridListItem>
          <GridListItem title="Critical Support" invert>
            24/7 support and monitoring for systems that power critical operations 
            across South Africa's administrative capital.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default function SoftwareDevelopmentPretoriaPage() {
  return (
    <>
      <PageIntro eyebrow="Software Development Pretoria" title="Enterprise Solutions for Tshwane">
        <p>
          Powering Pretoria's government, enterprise, and institutional operations with 
          secure, scalable software solutions. From Union Buildings to Hatfield, we're 
          your trusted technology partner in South Africa's capital.
        </p>
      </PageIntro>

      <Discover />
      <Build />
      <Deliver />
      <Values />

      <ContactSection />
    </>
  )
}
