"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faXmark,
    faDownload,
} from "@fortawesome/free-solid-svg-icons"

type ResumeViewerProps = {
    isOpen: boolean
    onClose: () => void
}

export default function ResumeViewer({
    isOpen,
    onClose,
}: ResumeViewerProps) {
    if (!isOpen) return null

    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-fontPrimary/70
                backdrop-blur-sm
                p-3
                sm:p-6
            "
            onClick={onClose}
        >
            <div
                className="
                    relative
                    flex
                    h-[95dvh]
                    w-full
                    max-w-5xl
                    flex-col
                    overflow-hidden
                    rounded-xl
                    bg-bgSecondary
                    shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-between
                        border-b
                        border-borderPrimary
                        bg-bgSecondary
                        px-4
                        py-3
                        sm:px-6
                    "
                >
                    <h2
                        className="
                            text-base
                            sm:text-lg
                            font-semibold
                            text-fontPrimary
                        "
                    >
                        Resume
                    </h2>

                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Download */}
                        <a
                            href="/resume.pdf"
                            download
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-borderPrimary
                                px-3
                                py-2
                                text-sm
                                font-semibold
                                text-fontPrimary
                                transition-colors
                                hover:border-borderSecondary
                                hover:bg-bgTertiary
                            "
                        >
                            <FontAwesomeIcon
                                icon={faDownload}
                                className="h-3.5 w-3.5"
                            />

                            <span className="hidden sm:inline">
                                Download
                            </span>
                        </a>

                        {/* Close */}
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close resume"
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                text-fontSecondary
                                transition-colors
                                hover:bg-bgTertiary
                                hover:text-fontPrimary
                            "
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="h-5 w-5"
                            />
                        </button>
                    </div>
                </div>

                {/* PDF */}
                <div className="min-h-0 flex-1 bg-bgTertiary">
                    <iframe
                        src="/resume.pdf"
                        title="Muhammad Adil Nadeem Resume"
                        className="h-full w-full border-0"
                    />
                </div>
            </div>
        </div>
    )
}