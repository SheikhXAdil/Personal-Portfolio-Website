'use client'

import { useState } from 'react'

export default function HeroButtons({
    value,
    styles,
}: {
    value: string
    styles?: string
}) {
    const [activeGradient, setActiveGradient] = useState('skill-gradient')

    function mouseEnter() {
        setActiveGradient('')
    }

    function mouseLeave() {
        setActiveGradient('skill-gradient')
    }

    return (
        <div
            id={value}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={`
                ${activeGradient}
                group
                flex items-center justify-center
                w-full
                border-2
                rounded-2xl
                border-borderPrimary
                p-3
                text-fontAccent
                hover:border-borderSecondary
                focus:outline-none
                ${styles ?? ''}
            `}
        >
            <div
                className="
                    rounded-2xl
                    text-center
                    font-semibold
                    text-base
                    md:text-lg
                    text-fontAccent
                    group-hover:text-fontSecondary
                "
            >
                {value}
            </div>
        </div>
    )
}