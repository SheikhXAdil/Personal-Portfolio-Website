
import { TitleText } from './CustomTexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip, faGlobe } from '@fortawesome/free-solid-svg-icons'




export default function About() {
    return (
        <section id='About' className="my-24 px-8">
            <TitleText title='About Me' textStyle='text-center' />
            <div className='w-full h-[30vh] xl:h-[25vh] mt-4 lg:mt-10 flex flex-col lg:flex-row justify-between gap-2 relative'>
                <p className='text-[#fffbf0] w-full lg:w-2/3 font-semibold mt-2 md:mt-0'>
                    <span><FontAwesomeIcon icon={faGlobe} className='w-4 h-4 group-hover:text-[#292750] text-[#EC994B] inline mb-1 mr-1' /></span> As a proficient Next.js developer with knowledge in React, SQL, TypeScript, API development and CSS frameworks like Tailwind and Chakra UI, I bring both technical expertise and excellent communication and team management skills to every project.
                </p>
                <p className='text-[#fffbf0] w-full lg:w-2/3 font-semibold mt-8 md:mt-0 xl:absolute xl:bottom-0 xl:right-4'>
                    <span><FontAwesomeIcon icon={faMicrochip} className='w-4 h-4 group-hover:text-[#292750] text-[#EC994B] inline mb-1 mr-1' /></span> I'm enrolled in a course on Web 3.0 and the Metaverse to get ready for the next generation of the internet, when decentralised technology and virtual worlds will have a stronger influence on how we communicate, work, and live online.
                </p>
            </div>
        </section>
    )
}
