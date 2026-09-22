"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TypingText } from "./CustomTexts"
import HeroButtons from "./HeroButtons"
import ResumeViewer from "./ResumeViewer"

export default function Hero() {
    const [resumeOpen, setResumeOpen] = useState(false)

    return (
        <>
            <section
                id="Home"
                className="min-h-[calc(100vh-72px)] flex items-center"
            >
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Profile Image */}
                        <div className="order-1 lg:order-2 w-full lg:w-2/5 flex justify-center">
                            <div
                                className="
                                    relative
                                    w-[190px]
                                    h-[190px]
                                    sm:w-[230px]
                                    sm:h-[230px]
                                    md:w-[280px]
                                    md:h-[280px]
                                    lg:w-[340px]
                                    lg:h-[340px]
                                    rounded-full
                                    overflow-hidden
                                    border-4
                                    border-accentPrimary/20
                                    bg-accentPrimary/10
                                    shadow-lg
                                "
                            >
                                <Image
                                    src="/profile-bg.png"
                                    alt="Muhammad Adil Nadeem"
                                    fill
                                    priority
                                    className="object-cover object-center scale-110"
                                />
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="order-2 lg:order-1 w-full lg:w-3/5">

                            {/* Eyebrow */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="h-px w-8 bg-accentPrimary" />

                                <span
                                    className="
                                        text-xs
                                        sm:text-sm
                                        font-semibold
                                        tracking-[0.18em]
                                        text-accentPrimary
                                    "
                                >
                                    BACKEND • ARCHITECTURE • INTELLIGENCE
                                </span>
                            </div>

                            {/* Name */}
                            <h1
                                className="
                                    text-3xl
                                    sm:text-4xl
                                    md:text-5xl
                                    lg:text-6xl
                                    font-bold
                                    leading-[1.05]
                                    tracking-tight
                                    text-fontPrimary
                                "
                            >
                                Muhammad Adil Nadeem
                            </h1>

                            {/* Role */}
                            <div
                                className="
                                    mt-6
                                    text-lg
                                    sm:text-xl
                                    md:text-2xl
                                    font-semibold
                                "
                            >
                                <TypingText
                                    title="Backend Engineer"
                                    textStyle="text-accentPrimary"
                                />
                            </div>

                            {/* Description */}
                            <p
                                className="
                                    mt-5
                                    max-w-2xl
                                    text-sm
                                    sm:text-base
                                    md:text-lg
                                    leading-relaxed
                                    text-fontSecondary
                                "
                            >
                                Backend-Focused Software Engineer experienced
                                in building reliable, scalable backend systems
                                and REST APIs using Node.js, Python, and modern
                                database technologies.
                            </p>

                            {/* CTA */}
                            <div
                                className="
                                    mt-7
                                    flex
                                    flex-col
                                    sm:flex-row
                                    gap-3
                                    sm:gap-4
                                "
                            >
                                <Link href="#Contact">
                                    <HeroButtons
                                        value="Let's Collaborate"
                                        styles="
                                            cursor-pointer
                                            w-full
                                            sm:w-auto
                                        "
                                    />
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setResumeOpen(true)}
                                    className="w-full sm:w-auto"
                                >
                                    <HeroButtons
                                        value="View Resume"
                                        styles="
                                            cursor-pointer
                                            w-full
                                            sm:w-auto
                                        "
                                    />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Viewer */}
            <ResumeViewer
                isOpen={resumeOpen}
                onClose={() => setResumeOpen(false)}
            />
        </>
    )
}