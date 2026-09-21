'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SectionLabel from './SectionLabel'
import { TypingText } from './CustomTexts'

const socials = [
    {
        name: 'GitHub',
        icon: faGithub,
        link: 'https://github.com/SheikhXAdil',
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/sheikhxadil/',
    },
    {
        name: 'Email',
        icon: faEnvelope,
        link: 'mailto:adilnadeemedu@gmail.com',
    },
]

export default function Contact() {
    const [isSending, setIsSending] = useState(false)

    const notifySuccess = () =>
        toast.success('Thank you for your message.', {
            position: 'top-right',
            autoClose: 5000,
            theme: 'dark',
        })

    const notifyError = () =>
        toast.error(
            'There was an error sending your message. Please try again or contact me directly by email.',
            {
                position: 'top-right',
                autoClose: 5000,
                theme: 'dark',
            }
        )

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        setIsSending(true)

        try {
            await emailjs.sendForm(
                'service_umvggca',
                'template_ueztmol',
                form,
                'aXnBJPrf5yyQapGha'
            )

            notifySuccess()
            form.reset()
        } catch (error) {
            console.error(error)
            notifyError()
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section id="Contact" className="mt-24 lg:mt-32 px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">

                <SectionLabel number="08" title="CONTACT" />

                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">

                    {/* Left */}
                    <div>
<h2 className="
    max-w-md
    text-4xl
    sm:text-5xl
    lg:text-5xl
    xl:text-6xl
    font-bold
    leading-[1.05]
    tracking-tight
    text-fontPrimary
">
    <span className="block">
        Let&apos;s build
    </span>

    <TypingText
        title="something useful."
        textStyle="text-accentPrimary"
    />
</h2>

                        <p className="
                            mt-6
                            max-w-md
                            text-sm
                            sm:text-base
                            leading-relaxed
                            text-fontSecondary
                        ">
                            Have a project, opportunity, research idea, or
                            simply want to get in touch? Send me a message
                            or connect through any of the platforms below.
                        </p>

                        <div className="mt-12">
                            <p className="
                                mb-6
                                text-xs
                                font-semibold
                                tracking-[0.2em]
                                text-accentPrimary
                            ">
                                FIND ME ONLINE
                            </p>

                            <div className="
                                flex
                                flex-wrap
                                gap-x-8
                                gap-y-5
                            ">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.link}
                                        target={
                                            social.name === 'Email'
                                                ? undefined
                                                : '_blank'
                                        }
                                        rel={
                                            social.name === 'Email'
                                                ? undefined
                                                : 'noopener noreferrer'
                                        }
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-3
                                            text-fontSecondary
                                            transition-colors
                                            hover:text-accentPrimary
                                        "
                                    >
                                        <span className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-borderPrimary
                                            transition-all
                                            group-hover:border-accentPrimary
                                            group-hover:bg-accentPrimary
                                            group-hover:text-fontAccent
                                        ">
                                            <FontAwesomeIcon
                                                icon={social.icon}
                                                className="h-4 w-4"
                                            />
                                        </span>

                                        <span className="
                                            text-sm
                                            font-medium
                                        ">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={sendEmail}
                        className="w-full"
                    >
                        <div className="space-y-6">

                            <div>
                                <label
                                    htmlFor="name"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-fontPrimary
                                    "
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    required
                                    type="text"
                                    name="user_name"
                                    placeholder="John Doe"
                                    className="
                                        h-14
                                        w-full
                                        rounded-xl
                                        border
                                        border-borderPrimary
                                        bg-bgSecondary
                                        px-4
                                        text-base
                                        text-fontPrimary
                                        placeholder:text-fontSecondary/60
                                        transition-all
                                        duration-200
                                        hover:border-borderSecondary
                                        focus:border-accentPrimary
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-accentPrimary/10
                                    "
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-fontPrimary
                                    "
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    required
                                    type="email"
                                    name="user_email"
                                    placeholder="john@example.com"
                                    className="
                                        h-14
                                        w-full
                                        rounded-xl
                                        border
                                        border-borderPrimary
                                        bg-bgSecondary
                                        px-4
                                        text-base
                                        text-fontPrimary
                                        placeholder:text-fontSecondary/60
                                        transition-all
                                        duration-200
                                        hover:border-borderSecondary
                                        focus:border-accentPrimary
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-accentPrimary/10
                                    "
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-fontPrimary
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    required
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me about your project, idea, or opportunity..."
                                    className="
                                        w-full
                                        resize-none
                                        rounded-xl
                                        border
                                        border-borderPrimary
                                        bg-bgSecondary
                                        px-4
                                        py-4
                                        text-base
                                        leading-relaxed
                                        text-fontPrimary
                                        placeholder:text-fontSecondary/60
                                        transition-all
                                        duration-200
                                        hover:border-borderSecondary
                                        focus:border-accentPrimary
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-accentPrimary/10
                                    "
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-xl
                                        bg-accentPrimary
                                        px-6
                                        py-3
                                        text-base
                                        font-semibold
                                        text-fontAccent
                                        transition-all
                                        duration-200
                                        hover:bg-accentSecondary
                                        hover:gap-4
                                        disabled:cursor-not-allowed
                                        disabled:opacity-50
                                    "
                                >
                                    {isSending ? 'Sending...' : 'Send message'}

                                    {!isSending && (
                                        <span className="
                                            text-lg
                                            transition-transform
                                            duration-200
                                            group-hover:translate-x-1
                                        ">
                                            →
                                        </span>
                                    )}
                                </button>
                            </div>

                        </div>
                    </form>


                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </section>
    )
}
