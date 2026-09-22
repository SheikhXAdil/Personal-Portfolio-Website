import React from 'react'
import { interest } from '../../../utils/types'

type InterestProps = {
    interest: interest
    index: number
}

export default function Interest({
    interest,
    index,
}: InterestProps) {
    return (
        <article
            className="
                group
                py-8
                lg:py-10
                lg:px-8
                first:lg:pl-0
                border-b
                border-borderPrimary
                lg:[&:nth-child(odd)]:border-r
                lg:[&:nth-last-child(-n+2)]:border-b-0
            "
        >
            <div className="flex gap-5">
                <span
                    className="
                        pt-1
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

                <div>
                    <h3
                        className="
                            text-xl
                            sm:text-2xl
                            font-bold
                            tracking-tight
                            text-fontPrimary
                            transition-colors
                            duration-200
                            group-hover:text-accentPrimary
                        "
                    >
                        {interest.title}
                    </h3>

                    {interest.description && (
                        <p
                            className="
                                mt-3
                                max-w-xl
                                text-sm
                                sm:text-base
                                leading-relaxed
                                text-fontSecondary
                            "
                        >
                            {interest.description}
                        </p>
                    )}
                </div>
            </div>
        </article>
    )
}