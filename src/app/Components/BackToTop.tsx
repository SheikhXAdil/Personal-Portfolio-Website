'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function BackToTop() {
    return (
        <a
            href="#Home"
            className="
                flex
                items-center
                justify-center
                md:w-14
                md:h-14
                w-10
                h-10
                rounded-full
                border-2
                border-borderPrimary
                bg-accentPrimary
                text-fontAccent
                cursor-pointer
                transition-all
                duration-200
                hover:border-accentSecondary
                hover:bg-accentSecondary
            "
        >
            <FontAwesomeIcon
                icon={faArrowUp}
                className="w-4 h-4 md:w-5 md:h-5"
            />
        </a>
    )
}