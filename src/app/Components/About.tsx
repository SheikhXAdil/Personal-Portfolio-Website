import { TypingText } from './CustomTexts'
import SectionLabel from './SectionLabel'

export default function About() {
    return (
        <section id="About">
            <div className="my-8 px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto">

                    <SectionLabel
                        number="01"
                        title="ABOUT"
                    />

                    <div className="
                        grid
                        lg:grid-cols-[1fr_2fr]
                        gap-10
                        lg:gap-20
                    ">

                        {/* Main highlight */}
                        <div>
                            <h2 className="
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                font-bold
                                leading-[1.1]
                                tracking-tight
                                text-fontPrimary
                            ">
                                Building beyond
                                <span className="block">
                                    <TypingText
                                        title="the backend."
                                        textStyle="text-accentPrimary"
                                    />
                                </span>
                            </h2>

                            <p className="
                                mt-5
                                max-w-xs
                                text-sm
                                leading-relaxed
                                text-fontSecondary
                            ">
                                Thinking in terms of architecture, scalability,
                                reliability, and the systems behind them.
                            </p>
                        </div>

                        {/* About content */}
                        <div className="
                            border-l
                            border-borderPrimary
                            pl-6
                            sm:pl-8
                            lg:pl-10
                        ">
                            <div className="
                                text-sm
                                sm:text-base
                                lg:text-lg
                                leading-[1.9]
                                text-fontSecondary
                            ">
                                <p>
                                    Hi, I&apos;m Adil! I&apos;m a back-end-focused
                                    Software Engineer with expertise in designing
                                    and building reliable, scalable back-end and
                                    server-side solutions.
                                </p>

                                <p className="mt-6">
                                    My experience includes working with NodeJS,
                                    NestJS, Python, FastAPI, .NET, PostgreSQL,
                                    REST APIs, and relational databases, with a
                                    focus on back-end architecture, API
                                    development, database design, and writing
                                    maintainable production-grade software. I
                                    have also gained nearly 2 years of experience
                                    through software engineering and AI-focused
                                    internships, working on practical development
                                    and research-oriented projects.
                                </p>

                                <p className="mt-6">
                                    Alongside back-end development, I have a
                                    strong interest in Artificial Intelligence
                                    and its practical integration into software
                                    systems. I have worked with LLMs, AI agents,
                                    RAG, vector databases, and AI APIs, as well as
                                    explored computer vision and Edge AI through
                                    hands-on projects.
                                </p>

                                <p className="mt-6">
                                    I enjoy understanding how systems work,
                                    solving engineering problems, and learning
                                    technologies that help me build better
                                    software. I approach my work with a focus on
                                    problem-solving, continuous learning, and
                                    collaboration. I value clear communication,
                                    teamwork, adaptability, and taking ownership
                                    of my responsibilities.
                                </p>

                                <p className="mt-6">
                                    My primary goal is to continue growing as a
                                    back-end engineer and system architect, while
                                    expanding my ability to incorporate AI and
                                    other emerging technologies into back-end
                                    applications where they provide real value.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}