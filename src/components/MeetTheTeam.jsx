import Image from 'next/image'
import Link from 'next/link'
import meImage from '/src/images/ds.jpg'
import donImage from '/src/images/don.png'

// Optional: import another image for Donald if you have one, e.g.:
// import donaldImage from '/src/images/donald.jpg'

export function MeetTheTeam() {
    // Centralize the repeating button classes
    const neumorphicButton = `
    inline-block
    rounded-full
    bg-neutral-100
    px-4
    py-2
    text-sm
    font-semibold
    text-neutral-600
    shadow-[8px_8px_16px_#b8b8b8,_-8px_-8px_16px_#ffffff]
    transition
    hover:shadow-[8px_8px_16px_#afafaf,_-8px_-8px_16px_#ffffff]
    hover:text-neutral-900
  `

    // Define all your team members here
    const teamMembers = [
        {
            name: 'David Sampson',
            role: 'Senior Developer & Problem Solver',
            image: meImage, // or any other image import
            links: [
                { label: 'Website', href: 'https://www.davidsampson.tech/' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/dsampsondev' },
                { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01cbe753e4aabd2627' },
            ],
        },
        {
            name: 'Monwabisi Ndlovu',
            role: 'Junior Developer & Problem Solver',
            image: donImage,
            links: [
                { label: 'Website', href: 'https://monwabisi16.netlify.app/' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/monwabisi-ndlovu-3270a020b' },
            ],
        },
    ]

    return (
        <section className="my-32 flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-neutral-950">
                Meet the Team
            </h2>

            <div className="mt-8 grid gap-10 sm:grid-cols-2">
                {teamMembers.map(({ name, role, image, links }) => (
                    <div key={name} className="flex flex-col items-center">
                        <div className="relative h-32 w-32">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-neutral-950">
                            {name}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600">{role}</p>

                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            {links.map(({ label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    className={neumorphicButton}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
