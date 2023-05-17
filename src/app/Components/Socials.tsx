import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Socials() {
    const socials = [
        {
            icon: faGithub,
            link: "https://github.com/SheikhXAdil"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/adil-nadeem-8b7061253"
        },
        {
            icon: faTwitter,
            link: "https://twitter.com/SheikhXAdil"
        },
        {
            icon: faEnvelope,
            link: "mailto:adilnadeemedu@gmail.com"
        },
        {
            icon: faWhatsapp,
            link: "https://api.whatsapp.com/send?phone=923215526659"
        },
    ]

    return (
        <ul className='flex flex-col gap-2'>
            {socials.map((social, index) => {
                return (
                    <Link key={index} target="_blank" href={social.link}>
                        <li className='my-2 w-8 md:w-12 h-8 md:h-12 border-2 group border-[#EC994B] hover:bg-[#EC994B]  cursor-pointer rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={social.icon} className='w-4 md:w-9h-10 h-4 md:h-11 group-hover:text-[#292750] text-[#EC994B] hover:bg-[#EC994B]' />
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}
