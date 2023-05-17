"use client"
import Image from "next/image"


export default function Navbar() {

    function handleNavbar() {
        let x = document.getElementById("navbar");
        x?.classList.toggle("hidden")
    }
    const navs: string[] = ["Home", "About", "Skills", "Projects", "Contact"]

    return (
        <div className='fixed top-0 left-0 w-full mb-60 flex flex-col md:flex-row justify-between bg-[#15133c] z-20'>
            <div className="flex justify-between">
                <div className="mx-8 my-4">
                    <a href="/" className="text-xl md:text-2xl font-bold">Muhammad Adil Nadeem</a>
                </div>
                <button className="px-2 md:px-6 block md:hidden active:outline-none focus:outline-none" onClick={handleNavbar}>
                    <Image src={"/menu.svg"} alt="menu" width={32} height={32} />
                </button>
            </div>

            <div id="navbar" className="hidden md:m-6 bg-[#292750] md:bg-transparent md:my-0 md:block">
                <ul id="navbar" className='md:mx-0 list-none w-full md:w-auto text-center md:text-start flex flex-col md:flex-row md:justify-between md:gap-6'>
                    {navs.map((nav, index) => {
                        return (
                            <li key={index} className='py-4 md:my-0 p-3 text-lg md:rounded-2xl font-medium text-white hover:bg-[#15133c] hover:text-[#EC994B] cursor-pointer active:outline-none'>
                                <a href={`#${nav}`}>{nav}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
