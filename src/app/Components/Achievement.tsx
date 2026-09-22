import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { achievement } from '../../../utils/types'

type AchievementProps = {
    achievement: achievement
    index: number
}

export default function Achievement({
    achievement,
    index,
}: AchievementProps) {
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
                <div
                    className="
                        flex
                        flex-wrap
                        items-baseline
                        gap-x-4
                        gap-y-1
                    "
                >
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
                        {achievement.title}
                    </h3>

                    {achievement.date && (
                        <span
                            className="
                                text-sm
                                text-fontSecondary
                            "
                        >
                            {achievement.date}
                        </span>
                    )}
                </div>

                {achievement.description && (
                    <p
                        className="
                            mt-2
                            max-w-3xl
                            text-sm
                            sm:text-base
                            leading-relaxed
                            text-fontSecondary
                        "
                    >
                        {achievement.description}
                    </p>
                )}

                {achievement.link && (
                    <Link
                        href={achievement.link}
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
                        View details

                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="h-3 w-3"
                        />
                    </Link>
                )}
            </div>

            {achievement.image && (
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
                        src={achievement.image}
                        alt={achievement.title}
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