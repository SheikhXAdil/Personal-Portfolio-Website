import React from 'react'
import { experience } from '../../../utils/types'

type ExperienceItemProps = {
    experience: experience
    isLast: boolean
}

export default function ExperienceItem({
    experience,
    isLast,
}: ExperienceItemProps) {
    return (
        <article className="relative grid grid-cols-[28px_1fr] lg:grid-cols-[40px_1fr] gap-6 lg:gap-10">
            {/* Timeline */}
            <div className="relative flex justify-center">
                <div
                    className="
                        relative
                        z-10
                        mt-2
                        h-3
                        w-3
                        rounded-full
                        border-2
                        border-accentPrimary
                        bg-bgPrimary
                    "
                />

                {!isLast && (
                    <div
                        className="
                            absolute
                            top-5
                            bottom-0
                            w-px
                            bg-borderPrimary
                        "
                    />
                )}
            </div>

            {/* Content */}
            <div
                className={`
                    ${isLast ? 'pb-0' : 'pb-14 lg:pb-16'}
                `}
            >
                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                        gap-5
                    "
                >
                    <div>
                        <h3
                            className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                                tracking-tight
                                text-fontPrimary
                            "
                        >
                            {experience.title}
                        </h3>

                        <div
                            className="
                                mt-2
                                flex
                                flex-wrap
                                items-center
                                gap-x-3
                                gap-y-1
                                text-base
                                sm:text-lg
                            "
                        >
                            <span
                                className="
                                    font-semibold
                                    text-accentPrimary
                                "
                            >
                                {experience.organization}
                            </span>

                            <span className="text-fontSecondary">
                                ·
                            </span>

                            <span className="text-fontSecondary">
                                {experience.type}
                            </span>
                        </div>
                    </div>

                    <div
                        className="
                            shrink-0
                            lg:text-right
                        "
                    >
                        <p
                            className="
                                text-sm
                                font-semibold
                                text-fontPrimary
                            "
                        >
                            {experience.startDate}
                            {' — '}
                            {experience.endDate ?? 'Present'}
                        </p>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-fontSecondary
                            "
                        >
                            {experience.duration}
                        </p>
                    </div>
                </div>

                {/* Location / work mode */}
                <div
                    className="
                        mt-4
                        flex
                        flex-wrap
                        gap-x-4
                        gap-y-1
                        text-sm
                        text-fontSecondary
                    "
                >
                    <span>
                        {experience.location}
                    </span>

                    <span className="hidden sm:inline">
                        ·
                    </span>

                    <span>
                        {experience.workMode}
                    </span>
                </div>

                {/* Description */}
                <p
                    className="
                        mt-5
                        max-w-4xl
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-fontSecondary
                    "
                >
                    {experience.description}
                </p>
            </div>
        </article>
    )
}