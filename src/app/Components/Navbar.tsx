"use client"

import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Navbar() {
    const [hidden, setHidden] = useState(true)
    const [active, setActive] = useState(true)
    const [moreOpen, setMoreOpen] = useState(false)

    function handleNavbar() {
        setHidden(!hidden)
        setActive(!active)
        setMoreOpen(false)
    }

    function closeMobileMenu() {
        setHidden(true)
        setActive(true)
        setMoreOpen(false)
    }

    function scrollToSection(
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) {
        e.preventDefault()

        const id = href.replace("#", "")
        const element = document.getElementById(id)

        if (!element) return

        const navbarHeight = 72
        const extraSpacing = 16

        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: elementPosition - navbarHeight - extraSpacing,
            behavior: "smooth",
        })

        window.history.pushState(null, "", href)

        closeMobileMenu()
    }

    const mainNavs = [
        { name: "Home", href: "#Home" },
        { name: "About", href: "#About" },
        { name: "Experience", href: "#Experience" },
        { name: "Projects", href: "#Projects" },
    ]

    const moreNavs = [
        { name: "Interests", href: "#Interests" },
        { name: "Education", href: "#Education" },
        { name: "Skills", href: "#Skills" },
        { name: "Certifications & Achievements", href: "#Certifications" },
    ]

    const contactNav = {
        name: "Contact",
        href: "#Contact",
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-bgPrimary z-20">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 lg:px-8">

                {/* Name */}
                <Link
                    href="/"
                    className="text-lg lg:text-2xl font-bold focus:outline-none whitespace-nowrap"
                >
                    Muhammad Adil Nadeem
                </Link>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden px-2 focus:outline-none"
                    onClick={handleNavbar}
                    aria-label={
                        active
                            ? "Open navigation menu"
                            : "Close navigation menu"
                    }
                >
                    {active ? (
                        <Image
                            src="/menu.svg"
                            alt="menu"
                            width={32}
                            height={32}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="w-7 h-7 text-fontPrimary"
                        />
                    )}
                </button>

                {/* Desktop navigation */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-2">

                        {/* Main navigation */}
                        {mainNavs.map((nav) => (
                            <li
                                key={nav.name}
                                className="p-3 text-lg rounded-2xl font-medium hover:bg-bgTertiary hover:text-fontSecondary cursor-pointer"
                            >
                                <a
                                    href={nav.href}
                                    onClick={(e) =>
                                        scrollToSection(e, nav.href)
                                    }
                                    className="focus:outline-none"
                                >
                                    {nav.name}
                                </a>
                            </li>
                        ))}

                        {/* More */}
                        <li className="relative p-3 text-lg rounded-2xl font-medium hover:bg-bgTertiary hover:text-fontSecondary cursor-pointer">
                            <button
                                onClick={() => setMoreOpen(!moreOpen)}
                                className="flex items-center gap-2 focus:outline-none"
                            >
                                More

                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`w-3 h-3 transition-transform ${
                                        moreOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {moreOpen && (
                                <ul className="absolute right-0 top-full mt-2 w-64 bg-bgSecondary rounded-xl shadow-lg overflow-hidden border border-borderPrimary">
                                    {moreNavs.map((nav) => (
                                        <li
                                            key={nav.name}
                                            className="py-3 px-4 text-base font-medium hover:bg-bgTertiary hover:text-fontSecondary"
                                        >
                                            <a
                                                href={nav.href}
                                                className="block focus:outline-none"
                                                onClick={(e) =>
                                                    scrollToSection(
                                                        e,
                                                        nav.href
                                                    )
                                                }
                                            >
                                                {nav.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Contact */}
                        <li className="p-3 text-lg rounded-2xl font-medium hover:bg-bgTertiary hover:text-fontSecondary cursor-pointer">
                            <a
                                href={contactNav.href}
                                onClick={(e) =>
                                    scrollToSection(
                                        e,
                                        contactNav.href
                                    )
                                }
                                className="focus:outline-none"
                            >
                                {contactNav.name}
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            {/* Mobile navigation */}
            <div
                className={`
                    ${hidden ? "hidden" : "block"}
                    lg:hidden
                    bg-bgTertiary
                    max-h-[calc(100dvh-72px)]
                    overflow-y-auto
                    overscroll-contain
                `}
            >
                <ul className="flex flex-col text-center">

                    {/* Main navigation */}
                    {mainNavs.map((nav) => (
                        <li
                            key={nav.name}
                            className="py-4 px-3 text-lg font-medium hover:bg-bgPrimary hover:text-fontSecondary"
                        >
                            <a
                                href={nav.href}
                                className="block focus:outline-none"
                                onClick={(e) =>
                                    scrollToSection(e, nav.href)
                                }
                            >
                                {nav.name}
                            </a>
                        </li>
                    ))}

                    {/* More */}
                    <li className="py-4 px-3 text-lg font-medium">
                        <button
                            onClick={() => setMoreOpen(!moreOpen)}
                            className="flex items-center justify-center gap-2 w-full focus:outline-none"
                        >
                            More

                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`w-3 h-3 transition-transform ${
                                    moreOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {moreOpen && (
                            <ul className="mt-2 max-h-[45vh] overflow-y-auto overscroll-contain bg-bgPrimary">
                                {moreNavs.map((nav) => (
                                    <li
                                        key={nav.name}
                                        className="py-3 px-4 text-base hover:bg-bgTertiary hover:text-fontSecondary"
                                    >
                                        <a
                                            href={nav.href}
                                            className="block focus:outline-none"
                                            onClick={(e) =>
                                                scrollToSection(
                                                    e,
                                                    nav.href
                                                )
                                            }
                                        >
                                            {nav.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* Contact */}
                    <li className="py-4 px-3 text-lg font-medium hover:bg-bgPrimary hover:text-fontSecondary">
                        <a
                            href={contactNav.href}
                            className="block focus:outline-none"
                            onClick={(e) =>
                                scrollToSection(
                                    e,
                                    contactNav.href
                                )
                            }
                        >
                            {contactNav.name}
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}