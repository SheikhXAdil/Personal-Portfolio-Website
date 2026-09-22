import React from 'react'
import { education } from '../../../utils/types'

type EducationItemProps = {
    education: education
}

export default function EducationItem({
    education,
}: EducationItemProps) {
    return (
        <article
            className="
                grid
                lg:grid-cols-[1fr_auto]
                gap-6
                lg:gap-12
                py-10
                lg:py-12
                border-b
                border-borderPrimary
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
                    {education.degree}
                </h3>

                <p
                    className="
                        mt-3
                        text-base
                        sm:text-lg
                        font-medium
                        text-accentPrimary
                    "
                >
                    {education.institution}
                </p>

                {education.department && (
                    <p
                        className="
                            mt-1
                            text-sm
                            sm:text-base
                            text-fontSecondary
                        "
                    >
                        {education.department}
                    </p>
                )}
            </div>

            <div
                className="
                    flex
                    flex-col
                    lg:items-end
                    gap-4
                    lg:min-w-[180px]
                "
            >
                <span
                    className="
                        text-sm
                        font-semibold
                        tracking-wide
                        text-fontSecondary
                    "
                >
                    {education.duration}
                </span>

                {education.cgpa && (
                    <div className="lg:text-right">
                        <span
                            className="
                                block
                                text-xs
                                font-semibold
                                tracking-[0.18em]
                                text-fontSecondary
                            "
                        >
                            CGPA
                        </span>

                        <span
                            className="
                                mt-1
                                block
                                text-lg
                                font-bold
                                text-fontPrimary
                            "
                        >
                            {education.cgpa}
                        </span>
                    </div>
                )}
            </div>
        </article>
    )
}