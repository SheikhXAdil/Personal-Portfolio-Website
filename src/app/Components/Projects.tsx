import React from 'react'
import { projects } from '../../../utils/data'
import Project from './Project'
import SectionLabel from './SectionLabel'

export default function Projects() {
    return (
        <section
            id="Projects"
            className="my-8 px-6 lg:px-8"
        >
            <div className="w-full max-w-7xl mx-auto">

                <SectionLabel number="05" title="PROJECTS" />

                <p className="
                    mb-10
                    max-w-2xl
                    text-sm
                    sm:text-base
                    leading-relaxed
                    text-fontSecondary
                ">
                    Selected work across backend engineering, AI/ML, and systems development.
                </p>

                <div className="border-t border-borderPrimary">
                    {projects.map((project, index) => (
                        <Project
                            project={project}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}