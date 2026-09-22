import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { certification } from '../../../utils/data'

type CertificationProps = {
    certification: certification
    index: number
}

export default function Certification({
    certification,
    index,
}: CertificationProps) {
    return (
        <article
            className="
                group
                grid
                lg:grid-cols-[60px_1fr_auto]
                gap-5
                lg:gap-8
                items-center
                py-7
                lg:py-8
                border-b
                border-borderPrimary
            "
        >
            <span
                className="
                    text-xs
                    font-semibold
                    tracking-[0.18em]
                    text-fontSecondary
                    transition-colors
                    duration-200
                    group-hover:text-accentPrimary
                "
            >
                {String(index + 1).padStart(2, '0')}
            </span>

            <div className="min-w-0">
                <h3
                    className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-fontPrimary
                        transition-colors
                        duration-200
                        group-hover:text-accentPrimary
                    "
                >
                    {certification.title}
                </h3>

                <div
                    className="
                        mt-1
                        flex
                        flex-wrap
                        items-center
                        gap-x-3
                        gap-y-1
                        text-sm
                        text-fontSecondary
                    "
                >
                    {certification.issuer && (
                        <span>{certification.issuer}</span>
                    )}

                    {certification.date && (
                        <>
                            <span>•</span>
                            <span>{certification.date}</span>
                        </>
                    )}
                </div>

                {certification.link && (
                    <Link
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            mt-3
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-fontPrimary
                            transition-colors
                            duration-200
                            hover:text-accentPrimary
                        "
                    >
                        View certificate

                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="h-3 w-3"
                        />
                    </Link>
                )}
            </div>

            {certification.image && (
                <div
                    className="
                        relative
                        w-28
                        h-20
                        overflow-hidden
                        border
                        border-borderPrimary
                        bg-bgSecondary
                    "
                >
                    <Image
                        src={certification.image}
                        alt={certification.title}
                        fill
                        className="
                            object-cover
                            transition-transform
                            duration-300
                            group-hover:scale-105
                        "
                    />
                </div>
            )}
        </article>
    )
}