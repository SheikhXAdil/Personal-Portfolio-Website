import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { project } from '../../../utils/constants'

type ProjectProps = {
    project: project
    index: number
}

export default function Project({
    project,
    index,
}: ProjectProps) {
    return (
        <article
            className="
                group
                grid
                lg:grid-cols-[80px_1fr_280px]
                gap-6
                lg:gap-10
                py-10
                lg:py-14
                border-b
                border-borderPrimary
            "
        >
            {/* Number */}
            <div
                className="
                    text-sm
                    font-semibold
                    tracking-[0.18em]
                    text-fontSecondary
                    transition-colors
                    duration-200
                    group-hover:text-accentPrimary
                "
            >
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Main content */}
            <div className="min-w-0">
                <h3
                    className="
                        text-2xl
                        sm:text-3xl
                        font-bold
                        tracking-tight
                        text-fontPrimary
                        transition-colors
                        duration-200
                        group-hover:text-accentPrimary
                    "
                >
                    {project.title}
                </h3>

                <p
                    className="
                        mt-4
                        max-w-3xl
                        text-sm
                        sm:text-base
                        leading-relaxed
                        text-fontSecondary
                    "
                >
                    {project.desc}
                </p>

                {project.techStack && project.techStack.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                        {project.techStack.map((tech: string) => (
                            <span
                                key={tech}
                                className="
                                    text-xs
                                    sm:text-sm
                                    font-medium
                                    text-fontSecondary
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Image + GitHub */}
            <div
                className="
                    flex
                    flex-col
                    lg:items-end
                    justify-between
                    gap-6
                "
            >
                {project.img && (
                    <div
                        className="
                            relative
                            w-full
                            lg:w-[240px]
                            aspect-video
                            overflow-hidden
                            border
                            border-borderPrimary
                            bg-bgSecondary
                        "
                    >
                        <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            className="
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-[1.03]
                            "
                        />
                    </div>
                )}

                {project.gitRepoLink && (
                    <Link
                        href={project.gitRepoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
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
                        {project.gitRepoText || 'View source'}

                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="
                                h-3
                                w-3
                                transition-transform
                                duration-200
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
                        />
                    </Link>
                )}
            </div>
        </article>
    )
}