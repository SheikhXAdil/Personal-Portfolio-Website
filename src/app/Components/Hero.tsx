import React from 'react'
import Image from 'next/image'
import { TypingText } from './CustomTexts'
import HeroButtons from './HeroButtons'


export default function Hero() {
    const buttons = [
        {
            text: "Hire Me",
            link: "#Contact"
        },
        {
            text: "Download CV",
            link: "#Contact"
        }
    ]

    return (
        <section id='Home' className='mt-12 lg:mt-20 flex flex-col lg:flex-row justify-evenly lg:justify-between'>
            <div className='md:basis-2/3 my-auto'>
                <div className='pl-8 py-8'>
                    <p className='text-md lg:text-xl font-semibold'>Hi It&apos;s me</p>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl mt-2 font-bold'>Muhammad Adil Nadeem</h1>
                </div>
                <div className='px-8'>

                    <h2 className='text-lg md:text-3xl font-bold'>And I&apos;m a <TypingText title='Full Stack NextJs Developer' textStyle='text-[#EC994B]' /></h2>
                    <p className='w-full md:w-3/4 mt-4 text-sm md:text-base'>My goal is to create beautiful and functional websites that exceed your expectations. With a deep understanding of the latest technologies and trends, I can help you achieve your goals and stand out from the competition. Let&apos;s collaborate on your next project - contact me today to get started.</p>

                    <ul className='flex flex-wrap w-full mx-auto my-4 gap-4'>
                        {buttons.map((button, index) => {
                            return (
                                <li key={index} ><a href={button.link}><HeroButtons value={button.text} key={index} styles='cursor-pointer' /></a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='lg:pl-0 mt-8 mx-auto basis-1/3'>
                <div className=' bg-[#292750] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden mt-8 shadow-[#ec994b] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(236,153,75,0.15)] '>
                    <Image src={"/profile-bg.png"} alt='profile picture' width={500} height={500} />
                </div>
            </div>
        </section>
    )
}
