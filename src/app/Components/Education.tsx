import React from 'react'
import SectionLabel from './SectionLabel'
import { educationItems } from '../../../utils/data'
import EducationItem from './EducationItem'

export default function Education() {
    return (
        <section
            id="Education"
            className="my-8 px-6 lg:px-8"
        >
            <div className="w-full max-w-7xl mx-auto">
                <SectionLabel
                    number="04"
                    title="EDUCATION"
                />

                <div className="border-t border-borderPrimary">
                    {educationItems.map((item, index) => (
                        <EducationItem
                            key={index}
                            education={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}