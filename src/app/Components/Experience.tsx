import React from 'react'
import SectionLabel from './SectionLabel'
import { experiences } from '../../../utils/data'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
    return (
        <section
            id="Experience"
            className="my-8 px-6 lg:px-8"
        >
            <div className="w-full max-w-7xl mx-auto">
                <SectionLabel
                    number="03"
                    title="EXPERIENCE"
                />

                <div className="relative">
                    {experiences.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            experience={experience}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}