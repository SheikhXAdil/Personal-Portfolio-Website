import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { TypingText } from './CustomTexts'


export default function Hero() {
    const socials = [faGithub, faLinkedin, faTwitter, faEnvelope]

    return (
        <section className='mt-4 lg:mt-10 flex flex-col lg:flex-row justify-evenly lg:justify-between'>
            <div className='basis-2/3 my-auto'>
                <div className='pl-8 py-8'>
                    <p className='text-md lg:text-xl font-semibold'>Hello It's me</p>
                    <h1 className='text-5xl lg:text-6xl mt-2 font-bold'>Muhammad Adil Nadeem</h1>
                </div>
                <div className='px-8'>

                    <h2 className='text-2xl md:text-3xl font-bold'>And I'm a <TypingText title='Full Stack NextJs Developer' textStyle='text-[#EC994B]' /></h2>
                    <p className='w-full md:w-3/4 mt-4'>My goal is to create beautiful and functional websites that exceed your expectations. With a deep understanding of the latest technologies and trends, I can help you achieve your goals and stand out from the competition. Let's collaborate on your next project - <a href="#Contact" className='text-[#EC994B]'>contact me</a> today to get started.</p>

                    <ul className='flex mt-4 gap-4'>
                        {socials.map((social) => {
                            return (
                                <li className='my-2 w-12 h-12 border-2 group border-[#EC994B] hover:bg-[#EC994B]  cursor-pointer rounded-full flex justify-center items-center'>
                                    <FontAwesomeIcon icon={social} className='w-6 h-6 group-hover:text-[#292750] text-[#EC994B] hover:bg-[#EC994B]' />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='lg:pl-0 mt-8 mx-auto basis-1/3'>
                <div className=' bg-[#292750] w-[300px] h-[300px] rounded-full overflow-hidden mt-8 shadow-[#ec994b] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(236,153,75,0.15)] '>
                    <Image src={"/profile-bg.png"} alt='profile picture' width={500} height={500} />
                </div>
            </div>
        </section>
    )
}
