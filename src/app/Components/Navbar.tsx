"use client"

import Image from "next/image"


export default function Navbar() {

    function handleNavbar() {
        let x = document.getElementById("navbar");
        x?.classList.toggle("hidden")
    }
    const navs: string[] = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <nav className='sm:px-0 w-full flex flex-col md:flex-row justify-between bg-[#15133c] z-10'>
            <div className="flex justify-between">
                <div className="mx-8 my-4">
                    <h2 className="text-2xl font-bold">Muhammad Adil Nadeem</h2>
                </div>
                <button className="px-6 block md:hidden" onClick={handleNavbar}>
                    <Image src={"/menu.svg"} alt="menu" width={32} height={32} />
                </button>
            </div>

            <div id="navbar" className="hidden m-6 bg-[#292750] md:bg-transparent md:my-0 md:block">
                <ul id="navbar" className='md:mx-0 list-none w-full md:w-auto text-center md:text-start flex flex-col md:flex-row md:justify-between md:gap-6'>
                    {navs.map((nav, index) => {
                        return (
                            <li key={index} className=' py-4 md:my-0 p-3 text-lg rounded-2xl font-medium text-white hover:bg-[#15133c] hover:text-[#EC994B] cursor-pointer'>
                                <a href={`#${nav}`}>{nav}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
