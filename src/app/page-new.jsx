import Image from 'next/image';

import {Container} from '@/components/Container';
import {FadeIn, FadeInStagger} from '@/components/FadeIn';
import {List, ListItem} from '@/components/List';
import {SectionIntro} from '@/components/SectionIntro';
import {StylizedImage} from '@/components/StylizedImage';
import {Testimonial} from '@/components/Testimonial';
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg';
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg';
import logoGreenLife from '@/images/clients/green-life/logo-light.svg';
import logoHomeWork from '@/images/clients/home-work/logo-light.svg';
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg';
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg';
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg';
import logoUnseal from '@/images/clients/unseal/logo-light.svg';
import imageLaptop from '@/images/laptop.jpg';
import {loadCaseStudies} from '@/lib/mdx';
import {MeetTheTeam} from '@/components/MeetTheTeam';
import TellTheTeam from "@/components/TellTheTeam";

const clients = [
    ['Phobia', logoPhobiaLight],
    ['Family Fund', logoFamilyFund],
    ['Unseal', logoUnseal],
    ['Mail Smirk', logoMailSmirk],
    ['Home Work', logoHomeWork],
    ['Green Life', logoGreenLife],
    ['Bright Path', logoBrightPath],
    ['North Adventures', logoNorthAdventures],
];

// Hero Badge Component
function HeroBadge() {
    return (
        <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 ring-1 ring-purple-200">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                AI-Powered Solutions
            </div>
        </FadeIn>
    );
}

// Hero CTA Buttons Component
function HeroCTAs() {
    return (
        <FadeIn className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
                📅 Book Free Consultation →
            </a>
            <a
                href="/work"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
                ▶ View Our Work
            </a>
        </FadeIn>
    );
}

// Trust Indicators Component
function TrustIndicators() {
    return (
        <FadeIn className="mt-12 flex flex-wrap items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Biweekly Subscription</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span>Dedicated AI Team</span>
            </div>
        </FadeIn>
    );
}

function Clients() {
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        We've worked with hundreds of amazing people
                    </h2>
                    <div className="h-px flex-auto bg-neutral-800"/>
                </FadeIn>
                <FadeInStagger faster>
                    <ul
                        role="list"
                        className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
                    >
                        {clients.map(([client, logo]) => (
                            <li key={client}>
                                <FadeIn>
                                    <Image src={logo} alt={client} unoptimized/>
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </FadeInStagger>
            </Container>
        </div>
    );
}

function ValueProposition() {
    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <Container>
                <div className="max-w-4xl">
                    <FadeIn>
                        <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                            Modern software, delivered right.
                        </h2>
                        <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
                            We build with Next.js because it's simply the best—delivering high-performance, scalable solutions 
                            that launch fast and scale beautifully. Expert development with a laid-back approach, because 
                            great software shouldn't be stressful to create.
                        </p>
                    </FadeIn>
                </div>
            </Container>
        </div>
    );
}

function CaseStudies({caseStudies}) {
    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <Container>
                <SectionIntro
                    title="Innovative Technology That Translates into Real Cost Savings"
                    className="max-w-4xl"
                >
                    <p className="text-xl text-neutral-600 leading-relaxed">
                        At SuperStack Development Studio, we deliver fast, scalable, and cost-effective solutions using the
                        greatest web and mobile frameworks like Next.js and React Native for applications of all kinds.
                    </p>
                    <br/>
                    <p className="text-xl text-neutral-600 leading-relaxed">
                        We harness AI-driven automation — integrating generative AI, advanced cloud services, and
                        productivity tools to slash work hours, boost accuracy, and eliminate delays. <span className="font-semibold text-purple-600">Saving our clients money.</span>
                    </p>
                </SectionIntro>
            </Container>
        </div>
    );
}

function Services() {
    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <Container>
                <SectionIntro
                    eyebrow="Our Expertise"
                    title="Everything you need to scale your business"
                    className="max-w-4xl"
                >
                    <p className="text-xl text-neutral-600">
                        From AI-powered applications to full-stack development, we provide end-to-end solutions 
                        that drive real business results.
                    </p>
                </SectionIntro>
                
                <div className="mt-16 lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title="AI & Automation Solutions">
                            We build intelligent chatbots, workflow automation, and AI-powered applications 
                            that transform how your business operates. From customer service bots to complex 
                            data processing pipelines, we make AI work for you.
                        </ListItem>
                        <ListItem title="Full Stack Web Development">
                            Modern, high-performance web applications using Next.js, TypeScript, and Tailwind CSS.
                            Our expertise ensures fast, SEO-optimized, and scalable applications tailored to 
                            your business goals.
                        </ListItem>
                        <ListItem title="Mobile App Development">
                            Cross-platform mobile applications using React Native & Expo, delivering native-like 
                            performance on iOS and Android. From concept to app store, we handle it all.
                        </ListItem>
                        <ListItem title="Cloud & DevOps">
                            Comprehensive cloud infrastructure, DevOps, and ongoing support to keep your 
                            applications running efficiently. We handle the technical complexity so you 
                            can focus on growth.
                        </ListItem>
                    </List>
                </div>
            </Container>
        </div>
    );
}

// Call-to-Action Section
function CallToAction() {
    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <Container>
                <FadeIn className="text-center">
                    <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                        Ready to transform your business?
                    </h2>
                    <p className="mt-6 text-xl text-neutral-600 max-w-2xl mx-auto">
                        Share your vision with us. We'll help you turn your ideas into powerful, AI-driven solutions 
                        that drive real results.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            📅 Book Free Consultation
                        </a>
                        <a
                            href="https://cal.com/superstack/consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-8 py-4 font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            💬 Start a Conversation
                        </a>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}

export const metadata = {
    description:
        'SuperStack Development Studio - AI-powered solutions, web development, and automation that transforms your business. From idea to deployment in weeks, not months.',
};

export default async function Home() {
    let caseStudies = (await loadCaseStudies()).slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col justify-center">
                        <HeroBadge />
                        <FadeIn className="mt-6">
                            <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl lg:text-7xl">
                                Innovate <span className="text-purple-600">&</span> Automate
                                <br />
                                <span className="text-neutral-700">Your Business</span>
                            </h1>
                            <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
                                Transform your business with intelligent chatbots, AI automation, and custom software solutions. <span className="font-semibold text-purple-600">From idea to deployment in weeks, not months.</span>
                            </p>
                        </FadeIn>
                        <HeroCTAs />
                        <TrustIndicators />
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <TellTheTeam />
                    </div>
                </div>
            </Container>

            <ValueProposition />
            <CaseStudies caseStudies={caseStudies}/>
            <Services/>
            <MeetTheTeam/>
            <CallToAction />

            <Testimonial
                className="mt-24 sm:mt-32 mb-24 sm:mb-32"
                client={{name: 'Industry Leaders', logo: ''}}
            >
                <div className="text-center mb-8">
                    <h3 className="font-display text-xl font-medium text-neutral-950">
                        Trusted by industry leaders worldwide
                    </h3>
                </div>
                
                {`"Next.js has redefined how modern applications are built. With its hybrid static & server rendering, 
  developers can build faster, deploy seamlessly, and scale effortlessly." — Guillermo Rauch, CEO of Vercel`}

                <br/><br/>

                {`"Vercel makes the entire development-to-deployment pipeline effortless, enabling teams to ship products 
  at speeds never seen before." — Kent C. Dodds`}

                <br/><br/>

                {`"Tailwind CSS is like a design system for your code. It lets you build beautiful, responsive UIs without ever leaving your HTML." — Adam Wathan, Creator of Tailwind CSS`}
            </Testimonial>

            <Clients />
        </>
    );
}
