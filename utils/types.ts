export type skillGroup = {
    title: string
    skills: string[]
}

export type project = {
    title: string
    gitRepoText?: string | null
    gitRepoLink?: string | null
    siteText?: string | null
    siteLink?: string | null
    img?: string | null
    desc: string
    techStack: string[]
}

export type interest = {
    title: string
    description?: string | null
}

export type education = {
    degree: string
    institution: string
    department?: string | null
    duration: string
    cgpa?: string
}

export type certification = {
    title: string
    issuer: string
    date?: string | null
    image?: string | null
    link?: string | null
}

export type achievement = {
    title: string
    description?: string | null
    date?: string | null
    image?: string | null
    link?: string | null
}

export type experience = {
    title: string
    organization: string
    type: string
    location: string
    workMode: string
    description: string
    startDate: string
    endDate?: string | null
    duration: string
}