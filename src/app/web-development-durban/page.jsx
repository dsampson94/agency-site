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
  title: 'Web Development Durban | Custom Software Solutions KZN',
  description: 'Leading web development company in Durban, KwaZulu-Natal. Custom software, e-commerce, and digital solutions for KZN businesses. Expert developers serving Durban and surrounding areas.',
  keywords: 'web development Durban, software development KZN, Durban web design, custom software Durban, e-commerce development KwaZulu-Natal, Durban technology solutions',
  openGraph: {
    title: 'Web Development Durban | Custom Software Solutions KZN',
    description: 'Leading web development company in Durban, KwaZulu-Natal. Custom software, e-commerce, and digital solutions for KZN businesses.',
    url: 'https://www.superstack.co.za/web-development-durban',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Durban | Custom Software Solutions KZN',
    description: 'Leading web development company in Durban, KwaZulu-Natal. Custom software, e-commerce, and digital solutions for KZN businesses.',
  },
  alternates: {
    canonical: 'https://www.superstack.co.za/web-development-durban',
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
    <Section title="Understanding Durban Business Needs" image={{ src: imageLaptop }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Durban's vibrant economy spans from the bustling port operations to thriving tourism, 
          manufacturing, and emerging tech sectors. We understand the unique challenges facing 
          KwaZulu-Natal businesses in today's digital landscape.
        </p>
        <p>
          Our local expertise helps Durban companies leverage technology to compete globally 
          while staying rooted in their communities. From e-commerce for local retailers to 
          enterprise solutions for manufacturing companies.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Industries We Serve in KZN
      </h3>
      <List className="mt-4">
        <ListItem>Port and logistics companies</ListItem>
        <ListItem>Tourism and hospitality businesses</ListItem>
        <ListItem>Manufacturing and automotive</ListItem>
        <ListItem>Agriculture and sugar industry</ListItem>
        <ListItem>Financial services and fintech</ListItem>
        <ListItem>Healthcare and medical practices</ListItem>
      </List>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Custom Development for Durban" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every Durban business has unique requirements. Whether you're a Umhlanga-based 
          startup or an established Pinetown manufacturer, we build solutions that fit 
          your specific needs and growth ambitions.
        </p>
        <p>
          Our development process is designed to keep your project on track and 
          deliver real value to your KZN operations. We specialize in helping businesses across 
          the greater Durban area transform their digital presence.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Durban Development Capabilities
      </h3>
      <GridList className="mt-4">
        <GridListItem>Port logistics systems designed for operational efficiency</GridListItem>
        <GridListItem>Tourism booking platforms designed for KZN operators</GridListItem>
        <GridListItem>Manufacturing ERP system streamlining operations</GridListItem>
        <GridListItem>Healthcare portal connecting patients across Durban</GridListItem>
      </GridList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Long-term Partnership" image={{ src: imageLaptop }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Technology is an ongoing journey, not a destination. That's why Durban businesses 
          choose us as their long-term technology partner. We provide ongoing support, 
          maintenance, and evolution of your digital solutions.
        </p>
        <p>
          From your initial launch to future expansions across KwaZulu-Natal and beyond, 
          we're here to ensure your technology grows with your business ambitions.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Why Durban Businesses Choose Us
      </h3>
      <List className="mt-8">
        <ListItem>
          <strong>Local Understanding:</strong> We know the Durban market, from the CBD to the outer suburbs
        </ListItem>
        <ListItem>
          <strong>Industry Expertise:</strong> Deep experience in KZN's key economic sectors
        </ListItem>
        <ListItem>
          <strong>Scalable Solutions:</strong> Technology that grows from Durban startups to provincial leaders
        </ListItem>
        <ListItem>
          <strong>Ongoing Support:</strong> Reliable maintenance and evolution of your systems
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro
        eyebrow="Our approach to Durban development"
        title="Building technology that works for KZN businesses"
      >
        <p>
          Durban's diverse economy requires technology solutions that are both innovative 
          and practical. We combine cutting-edge development with deep understanding of 
          local business needs.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Local Focus" invert>
            Understanding Durban's unique business environment, from port operations 
            to beachfront tourism, ensures solutions that actually work for KZN companies.
          </GridListItem>
          <GridListItem title="Scalable Growth" invert>
            Whether you're starting in Durban or expanding across KwaZulu-Natal, 
            our solutions scale with your ambitions and market reach.
          </GridListItem>
          <GridListItem title="Industry Expertise" invert>
            Deep knowledge of KZN's key sectors - logistics, tourism, manufacturing, 
            and agriculture - means solutions built for your specific challenges.
          </GridListItem>
          <GridListItem title="Partnership Approach" invert>
            We become your trusted technology partner, supporting your growth from 
            Durban startup to provincial and national success.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default function WebDevelopmentDurbanPage() {
  return (
    <>
      <PageIntro eyebrow="Web Development Durban" title="Your Technology Partner in KwaZulu-Natal">
        <p>
          Empowering Durban businesses with custom web development, software solutions, 
          and digital transformation. From the Golden Mile to Pinetown, we're your local 
          technology experts serving all of KwaZulu-Natal.
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
