import { skillGroups } from '../../../utils/constants'
import SectionLabel from './SectionLabel'

export default function Skills() {
    return (
        <section id="Skills">
            <div className="my-8 px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto">

                    <SectionLabel
                        number="06"
                        title="SKILLS"
                    />

                    <div className="border-t border-borderPrimary">

                        {skillGroups.map((group) => (
                            <div
                                key={group.title}
                                className="
                                    grid
                                    md:grid-cols-[180px_1fr]
                                    gap-6
                                    md:gap-10
                                    py-7
                                    border-b
                                    border-borderPrimary
                                "
                            >
                                <h3 className="
                                    text-sm
                                    sm:text-base
                                    font-semibold
                                    uppercase
                                    tracking-[0.15em]
                                    text-accentPrimary
                                ">
                                    {group.title}
                                </h3>

                                <div className="
                                    flex
                                    flex-wrap
                                    gap-x-6
                                    gap-y-3
                                ">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="
                                                text-base
                                                sm:text-lg
                                                text-fontPrimary
                                                transition-colors
                                                duration-200
                                                hover:text-accentPrimary
                                            "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    )
}