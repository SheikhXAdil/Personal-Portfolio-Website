import React from 'react'
import SectionLabel from './SectionLabel'
import Interest from './Interest'
import { interests } from '../../../utils/data'

export default function Interests() {
    return (
        <section
            id="Interests"
            className="my-8 px-6 lg:px-8"
        >
            <div className="w-full max-w-7xl mx-auto">
                <SectionLabel
                    number="02"
                    title="INTERESTS"
                />

                <div className="grid lg:grid-cols-2 border-t border-borderPrimary">
                    {interests.map((interest, index) => (
                        <Interest
                            key={index}
                            interest={interest}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}