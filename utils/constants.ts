export const colors = {
    bgPrimary: "#15133c",
    bgSecondary: "#181730",
    bgTertiary: "#292750",
    fontPrimary: "#F1EEE9",
    fontSecondary: "#EC994B",
    borderPrimary: "#555297",
    borderSecondary: "#EC994B",
    linkHoverColor: "#a39ef0"
}

export const techSkills = [
    "Typescript",
    "HTML",
    "Tailwind CSS",
    "NextJs",
    "ReactJs",
    "SQL",
    "API Integration",
]

export const softSkills = [
    "Communication",
    "Teamwork",
    "Leadership",
    "Problem-solving",
    "Time management",
    "Critical thinking",
    "Adaptability",
]

export type project = {
    title: string,
    gitRepoText?: string,
    gitRepoLink?: string,
    siteText: string,
    siteLink: string,
    img: string,
    desc: string
}

export const projects: project[] = [
    {
        title: "Weather App",
        gitRepoText: "Check out git repository",
        gitRepoLink: "https://github.com/SheikhXAdil/WeatherApp-react-tailwind",
        siteText: "View live site",
        siteLink: "https://weather-app-react-tailwind-six.vercel.app",
        img: "/Weather-app.png",
        desc: "A weather app built with ReactJs and Tailwind CSS using openweatherapi"
    },
    {
        title: "TextUtils",
        gitRepoText: "Check out git repository",
        gitRepoLink: "https://github.com/SheikhXAdil/TextUtils-react",
        siteText: "View live site",
        siteLink: "https://text-utils-react-omega.vercel.app",
        img: "/TextUtils.png",
        desc: "A text manupilating app built with ReactJs and Bootstrap"
    },
    {
        title: "Metaversus",
        gitRepoText: "Check out git repository",
        gitRepoLink: "https://github.com/SheikhXAdil/metaversus-tailwind",
        siteText: "View live site",
        siteLink: "https://metaversus-tailwind.vercel.app",
        img: "/Metaversus.png",
        desc: "A Modern Metaverse Website home page built with NextJs 13, Tailwind CSS and Framer Motion"
    },
    {
        title: "Carts and Details",
        gitRepoText: "Check out git repository",
        gitRepoLink: "https://github.com/SheikhXAdil/Cart-and-Details-ChakraUI",
        siteText: "View live site",
        siteLink: "https://cart-and-details-chakra-ui.vercel.app",
        img: "/Carts-and-Details.png",
        desc: "A Modern Carts & Details page built with NextJs 13 and Chakra UI"
    },
    {
        title: "CLI Games",
        siteText: "View on npm",
        siteLink: "https://www.npmjs.com/~sheikhxadil",
        img: "/cli.gif",
        desc: "CLI games built using TypeScript and npm packages such as Inquirer, Chalk etc"
    },
]
