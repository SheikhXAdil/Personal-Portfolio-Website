import React from 'react'
import SectionLabel from './SectionLabel'
import Certification from './Certification'
import { achievements, certifications } from '../../../utils/data'
import Achievement from './Achievement'

export default function CertificationsAchievements() {
    return (
        <section
            id="Certifications"
            className="my-8 px-6 lg:px-8"
        >
            <div className="w-full max-w-7xl mx-auto">
                <SectionLabel
                    number="07"
                    title="CERTIFICATIONS & ACHIEVEMENTS"
                />

                {/* Certifications */}
                <div>
                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            gap-4
                        "
                    >
                        <h2
                            className="
                                text-sm
                                font-semibold
                                tracking-[0.2em]
                                text-accentPrimary
                            "
                        >
                            CERTIFICATIONS
                        </h2>

                        <div className="h-px flex-1 bg-borderPrimary" />
                    </div>

                    <div className="border-t border-borderPrimary">
                        {certifications.map((certification, index) => (
                            <Certification
                                key={index}
                                certification={certification}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mt-20">
                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            gap-4
                        "
                    >
                        <h2
                            className="
                                text-sm
                                font-semibold
                                tracking-[0.2em]
                                text-accentPrimary
                            "
                        >
                            ACHIEVEMENTS
                        </h2>

                        <div className="h-px flex-1 bg-borderPrimary" />
                    </div>

                    <div className="border-t border-borderPrimary">
                        {achievements.map((achievement, index) => (
                            <Achievement
                                key={index}
                                achievement={achievement}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}