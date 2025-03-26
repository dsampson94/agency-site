import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({ children, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto">
            <blockquote className="relative font-display text-2xl tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}


// import Image from 'next/image';
// import clsx from 'clsx';
//
// import { Container } from '@/components/Container';
// import { FadeIn } from '@/components/FadeIn';
// import { GridPattern } from '@/components/GridPattern';
//
// // Tech Logos (Import these or replace with the correct paths)
// import nextjsLogo from '@/public/superstack/nextjs.svg';
// import vercelLogo from '@/public/superstack/vercel.svg';
// import tailwindLogo from '@/public/superstack/tailwind.svg';
// import mongodbLogo from '@/public/superstack/mongodb.svg';
// import awsLogo from '@/public/superstack/aws.svg';
//
// // Mapping tech names to superstack
// const techLogos = {
//   'Next.js': nextjsLogo,
//   'Vercel': vercelLogo,
//   'Tailwind CSS': tailwindLogo,
//   'MongoDB': mongodbLogo,
//   'AWS': awsLogo,
// };
//
// export function Testimonial({ children, client, tech, className }) {
//   return (
//       <div
//           className={clsx(
//               'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
//               className,
//           )}
//       >
//         <GridPattern
//             className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
//             yOffset={-256}
//         />
//         <Container>
//           <FadeIn>
//             <figure className="mx-auto max-w-4xl flex items-start gap-6">
//               {/* Left-aligned Tech Logo */}
//               {tech && (
//                   <div className="flex-shrink-0 w-12 h-12">
//                     <Image src={techLogos[tech]} alt={tech} width={48} height={48} />
//                   </div>
//               )}
//
//               {/* Testimonial Quote */}
//               <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
//                 <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
//                   {children}
//                 </p>
//               </blockquote>
//             </figure>
//             <figcaption className="mt-10 text-lg font-semibold text-neutral-700">
//               {client.name}
//             </figcaption>
//           </FadeIn>
//         </Container>
//       </div>
//   );
// }
