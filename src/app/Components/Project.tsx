import React from 'react'
import Image from 'next/image'
import { project } from '../constants'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Project({ project }: { project: project }) {
    return (
        <div className='w-full lg:w-2/5 pb-4 border-2 border-[#555297] bg-[#181730]'>
            <div className='flex flex-col'>
                <div className='w-100 h-56 relative'>
                    <Image src={project.img} alt={project.title} fill className='object-fit' />
                </div>
                <div className='mt-6 w-4/5 mx-auto'>
                    <h4 className='text-2xl font-semibold mb-2 text-[#fffbf0]'>{project.title}</h4>
                    <p className='text-[#fffbf0] text-lg'>{project.desc}</p>
                    <div className='flex flex-col mt-8'>
                        <Link href={project.siteLink} className='text-[#EC994B] text-lg cursor-pointer hover:text-[#a39ef0]'>{project.siteText} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-3 w-3 inline' /></Link>
                        <Link href={project.gitRepoLink} className='text-[#EC994B] text-lg cursor-pointer hover:text-[#a39ef0]'>{project.gitRepoText} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-3 w-3 inline' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
