export type skillGroup = {
    title: string
    skills: string[]
}

export type project = {
    title: string
    gitRepoText?: string
    gitRepoLink?: string
    img?: string | null
    desc: string
    techStack: string[]
}

export type interest = {
    title: string
    description?: string
}

export type education = {
    degree: string
    institution: string
    department?: string
    duration: string
    cgpa?: string
}

export type certification = {
    title: string
    issuer: string
    date?: string
    image?: string | null
    link?: string
}

export type achievement = {
    title: string
    description?: string
    date?: string
    image?: string | null
    link?: string
}

export type experience = {
    title: string
    organization: string
    type: string
    location: string
    workMode: string
    description: string
    startDate: string
    endDate?: string
    duration: string
}