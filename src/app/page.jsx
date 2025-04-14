import Image from 'next/image';

import {ContactSection} from '@/components/ContactSection';
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

function Clients() {
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        We’ve worked with hundreds of amazing people
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

function CaseStudies({caseStudies}) {
    return (
        <>
            <SectionIntro
                title="Innovative Technology That Translates into Real Cost Savings"
                className="mt-6 sm:mt-6 lg:mt-6"
            >
                <p className="text-2xl text-neutral-600">
                    At SuperStack Development Studio, we deliver fast, scalable, and cost-effective solutions using the
                    greatest web and mobile frameworks like Next.js and React Native for applications of all kinds. By
                    prioritising DevEx (developer experience) and technical efficiency, we help businesses launch
                    faster, reduce
                    risks, and stay on budget.
                </p>
                <br/>
                <p className="text-2xl text-neutral-600">
                    We harness AI-driven automation — integrating generative AI, advanced cloud services, and
                    productivity tools to
                    slash work hours, boost accuracy, and eliminate delays. Saving our clients money. As an agile studio
                    focused on efficiency
                    and seamless product launches, we prioritise productive hours and minimal waste. While still
                    guaranteeing
                    delivery of best-in-class, modern, scalable, maintainable full stack web applications.
                </p>
                <br/>
            </SectionIntro>
            {/*<Container className="mt-16">*/}
            {/*    <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">*/}
            {/*        {caseStudies.map((caseStudy) => (*/}
            {/*            <FadeIn key={caseStudy.href} className="flex">*/}
            {/*                <article*/}
            {/*                    className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">*/}
            {/*                    <h3>*/}
            {/*                        <Link href={caseStudy.href}>*/}
            {/*                            <span className="absolute inset-0 rounded-3xl"/>*/}
            {/*                            <Image*/}
            {/*                                src={caseStudy.logo}*/}
            {/*                                alt={caseStudy.client}*/}
            {/*                                className="h-16 w-16"*/}
            {/*                                unoptimized*/}
            {/*                            />*/}
            {/*                        </Link>*/}
            {/*                    </h3>*/}
            {/*                    <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">*/}
            {/*                        <time*/}
            {/*                            dateTime={caseStudy.date.split('-')[0]}*/}
            {/*                            className="font-semibold"*/}
            {/*                        >*/}
            {/*                            {caseStudy.date.split('-')[0]}*/}
            {/*                        </time>*/}
            {/*                        <span className="text-neutral-300" aria-hidden="true">*/}
            {/*        /*/}
            {/*      </span>*/}
            {/*                        <span>Case study</span>*/}
            {/*                    </p>*/}
            {/*                    <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">*/}
            {/*                        {caseStudy.title}*/}
            {/*                    </p>*/}
            {/*                    <p className="mt-4 text-base text-neutral-600">*/}
            {/*                        {caseStudy.description}*/}
            {/*                    </p>*/}
            {/*                </article>*/}
            {/*            </FadeIn>*/}
            {/*        ))}*/}
            {/*    </FadeInStagger>*/}
            {/*</Container>*/}
        </>
    );
}

function Services() {
    return (
        <div className="mt-32">
            <SectionIntro
                eyebrow="Services"
                className="flex"
            >
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
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
                        <ListItem title="Full Stack Web Development (Next.js & TypeScript)">
                            We build modern, high-performance web applications using Next.js
                            for server-side rendering, TypeScript for reliability, and Tailwind CSS
                            for scalable UI design. Our expertise ensures fast, SEO-optimized, and scalable
                            applications tailored to your business goals.
                        </ListItem>
                        <ListItem title="Mobile App Development (React Native & Expo)">
                            We develop cross-platform mobile applications using React Native & Expo,
                            delivering native-like performance on iOS and Android. From AI-powered apps
                            to real-time communication tools, we ensure seamless functionality, scalability,
                            and user engagement.
                        </ListItem>
                        <ListItem title="Managed Services (Cloud, DevOps, Support)">
                            We provide comprehensive cloud infrastructure management, DevOps, ongoing project
                            maintenance, and technical support to keep your applications running efficiently.
                            Our team handles system optimization, security, and scalability, allowing you to
                            focus on innovation while we take care of operational complexities.
                        </ListItem>
                    </List>
                </div>
            </Container>
        </div>
    );
}

export const metadata = {
    description:
        'We are a development studio working at the intersection of design and technology.',
};

export default async function Home() {
    let caseStudies = (await loadCaseStudies()).slice(0, 3);

    return (
        <>
            <Container className="mt-64">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                        Modern software, <br/> for less.
                    </h1>
                    <p className="mt-6 text-2xl text-neutral-600">
                        Get the best for less. By building with Next.js, we cut dev hours without cutting
                        corners—delivering high-performance, scalable solutions in record time. That means lower costs,
                        faster launches, and zero compromise on quality. </p>
                </FadeIn>
            </Container>

            <CaseStudies caseStudies={caseStudies}/>

            {/*<MeetTheTeam/>*/}

            <Services/>

            <h1 className="font-display mt-32 text-4xl flex justify-center font-medium tracking-tight text-neutral-950 [text-wrap:balance]">
                Innovation should be shared
            </h1>

            <Testimonial
                className="mt-32 mb-32"
                client={{name: '', logo: ''}}
            >
                {`“Next.js has redefined how modern applications are built. With its hybrid static & server rendering, 
  developers can build faster, deploy seamlessly, and scale effortlessly. It’s not just a framework—it’s the future of web development.” - Guillermo Rauch, CEO of Vercel`}

                <br/><br/>

                {`“Vercel makes the entire development-to-deployment pipeline effortless, enabling teams to ship products 
  at speeds never seen before. It’s the best-in-class platform for modern web applications.” – Kent C. Dodds`}

                <br/><br/>

                {`“With Vercel and Next.js, performance is no longer an afterthought—it’s built-in. From the developer experience to global edge deployments, 
  everything just works.” – Lee Robinson, VP of Developer Experience at Vercel`}

                <br/><br/>

                {`“Tailwind CSS is like a design system for your code. It lets you build beautiful, responsive UIs without ever leaving your HTML. 
  It completely changed the way I write CSS.” – Adam Wathan, Creator of Tailwind CSS`}

                <br/><br/>

                {`“MongoDB enables developers to build applications faster, with flexibility and scalability at the core. 
  Its document model is a game-changer for modern applications.” – Eliot Horowitz, Co-Founder of MongoDB`}

                <br/><br/>

                {`“AWS gives builders the most powerful and scalable cloud infrastructure in the world. 
  From startups to enterprises, AWS is the foundation of modern software.” – Werner Vogels, CTO of Amazon`}
            </Testimonial>
        </>
    );
}
