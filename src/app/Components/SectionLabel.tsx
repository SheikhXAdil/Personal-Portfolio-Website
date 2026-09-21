type SectionLabelProps = {
    number: string
    title: string
    className?: string
}

export default function SectionLabel({
    number,
    title,
    className = '',
}: SectionLabelProps) {
    return (
        <div className={`mb-10 flex items-center gap-4 ${className}`}>
            <div
                className="
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    border
                    border-accentPrimary/30
                    text-xs
                    font-semibold
                    tracking-widest
                    text-fontPrimary
                "
            >
                {number}
            </div>

            <div className="h-px w-10 bg-borderPrimary" />

            <span
                className="
                    text-sm
                    sm:text-base
                    font-semibold
                    tracking-[0.22em]
                    text-accentPrimary
                "
            >
                {title}
            </span>
        </div>
    )
}