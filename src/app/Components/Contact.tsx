'use client'
import React from 'react'
import { TitleText } from './CustomTexts'
import { useState } from 'react'



export default function Contact() {
    const [activeGradient, setActiveGradient] = useState("skill-gradient");

    function handleSubmit() {
        alert("Thank You for submitting the form")
    }

    function mouseEnter() {
        console.log('mouse enter')
        setActiveGradient('')
    }

    function mouseLeave() {
        console.log('mouse leave')
        setActiveGradient("skill-gradient")
    }


    return (
        <section id='Contact' className='mt-24 lg:mt-0 px-8'>
            <TitleText title='Contact Me' textStyle='text-center' />
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row w-2/3 mx-auto justify-around my-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className=' text-xl'>Enter your name:</label>
                        <input type="text" className='w-full h-10 bg-[#181730] border-2 border-[#EC994B] focus:border-3 focus:outline-none p-2 font-light rounded-lg focus:text-base] text-lg text-[#fdfaed]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className=' text-xl'>Enter your email:</label>
                        <input type="email" className='w-full h-10 bg-[#181730] border-2 border-[#EC994B] focus:border-3 focus:outline-none p-2 font-light rounded-lg focus:text-base] text-lg text-[#fdfaed]' />
                    </div>
                </div>
                <div className='flex flex-col mt-8 gap-4'>
                    <label htmlFor="message" className='w-2/3 mx-auto text-xl'>Enter your message:</label>
                    <textarea className='w-2/3 mx-auto h-40 bg-[#181730] border-2 border-[#EC994B] focus:border-3 focus:outline-none p-2 font-light rounded-lg text-lg text-[#fdfaed]' />
                </div>
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${activeGradient} flex items-center justify-center w-1/2 md:w-1/4 lg:w-2/12 my-8 mx-auto border-2 rounded-2xl border-[#555297] p-3 text-[#fdfaed] hover:border-[#EC994B] cursor-pointer`}>
                    <input type='submit' value={"Submit"} className={`rounded-2xl text-center font-semibold text-lg cursor-pointer`} />
                </div>
            </form>
        </section>
    )
}
