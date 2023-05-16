import { TitleText } from './CustomTexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip, faGlobe } from '@fortawesome/free-solid-svg-icons'




export default function About() {
    return (
        <section id='About' className="mt-24 mb-60 xs:mb-32 sm:mb-24 px-8">
            <TitleText title='About Me' textStyle='text-center' />
            <div className='w-full h-[30vh] md:h-[50vh] mt-4 lg:mt-10 flex flex-col md:flex-row justify-between items-start gap-6'>
                <p className='text-[#fffbf0] w-full lg:w-2/3 font-semibold mt-2 md:mt-0 self-start'>
                    <span><FontAwesomeIcon icon={faGlobe} className='w-4 h-4 group-hover:text-[#292750] text-[#EC994B] inline mb-1 mr-1' /></span> As a proficient Next.js developer, I also have knowledge of React, SQL, TypeScript, API development, and contemporary CSS frameworks like Tailwind and Chakra UI. I'm not only a skilled engineer, but also a vital team member, with outstanding communication and team management skills. My dedication and attention to detail in project management are matched by my love for developing dynamic, responsive web apps. I can smoothly combine technical expertise and creative vision to produce high-quality web development projects because I have a great eye for design and a dedication to teamwork.
                </p>
                <p className='text-[#fffbf0] w-full lg:w-2/3 font-semibold mt-8 md:mt-0 self-end'>
                    <span><FontAwesomeIcon icon={faMicrochip} className='w-4 h-4 group-hover:text-[#292750] text-[#EC994B] inline mb-1 mr-1' /></span> I am an anime enthusiast, an avid badminton player, and a tech enthusiast with a keen interest in computers and programming. I love solving puzzles and conducting logical research. I&apos;m enrolled in a course on Web 3.0 and the Metaverse to get ready for the next generation of the internet, when decentralised technology and virtual worlds will have a stronger influence on how we communicate, work, and live online.
                </p>
            </div>
        </section>
    )
}
