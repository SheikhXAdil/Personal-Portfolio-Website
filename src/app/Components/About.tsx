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
                                    Hi, I&apos;m Adil! I&apos;m a{' '}
                                    <span className="font-semibold text-accentPrimary">
                                        back-end-focused Software Engineer
                                    </span>{' '}
                                    with experience designing and building reliable, scalable back-end and
                                    server-side solutions. My experience includes{' '}
                                    <span className="font-semibold text-accentPrimary">NodeJS</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">NestJS</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">Python</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">FastAPI</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">.NET</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">PostgreSQL</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">REST APIs</span>, and
                                    relational databases, with a focus on{' '}
                                    <span className="font-semibold text-accentPrimary">
                                        back-end architecture
                                    </span>
                                    , API development, database design, and maintainable production-grade
                                    software. I&apos;ve also gained nearly{' '}
                                    <span className="font-semibold text-accentPrimary">2 years</span> of
                                    experience through software engineering and AI-focused internships,
                                    working on practical development and research-oriented projects.
                                </p>

                                <p className="mt-6">
                                    Alongside back-end development, I have a strong interest in{' '}
                                    <span className="font-semibold text-accentPrimary">
                                        Artificial Intelligence
                                    </span>{' '}
                                    and its practical integration into software systems. I have worked with{' '}
                                    <span className="font-semibold text-accentPrimary">LLMs</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">AI agents</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">RAG</span>,{' '}
                                    <span className="font-semibold text-accentPrimary">
                                        vector databases
                                    </span>
                                    , and AI APIs, while exploring{' '}
                                    <span className="font-semibold text-accentPrimary">
                                        computer vision
                                    </span>{' '}
                                    and{' '}
                                    <span className="font-semibold text-accentPrimary">Edge AI</span>{' '}
                                    through hands-on projects. I enjoy understanding how systems work,
                                    solving engineering problems, and continuously learning technologies
                                    that help me build better software. My goal is to grow as a{' '}
                                    <span className="font-semibold text-accentPrimary">
                                        back-end engineer and system architect
                                    </span>{' '}
                                    while incorporating AI and emerging technologies where they provide real
                                    value.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}