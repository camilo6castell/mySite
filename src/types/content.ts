// types/content.ts

// --- Metadata ---
export interface MetadataImage {
    url: string
    width: number
    height: number
}

export interface MetadataOpenGraph {
    title: string
    description: string
    url: string
    siteName: string
    images: MetadataImage[]
    locale: string
    type: string
}

export interface MetadataContent {
    title: string
    description: string
    openGraph: MetadataOpenGraph
}

// --- Navbar ---
export interface NavbarContent {
    logo_day: string
    logo_night: string
    spawn_animation_duration: number
}

// --- Hero ---
export interface HeroContent {
    badge: string
    Title: string
    role: string
    DescOne: string
    DescTwo: string
    heroImage: string
}

// --- Projects ---
export interface Project {
    title: string
    summary: string
    stack: string[]
    repo: string
    demo: string
}

export interface ProjectsContent {
    projects: Project[]
}

// --- Contact ---
export interface ContactSocial {
    label: string
    href: string
    color: [string, string] // siempre dos colores
}

export interface ContactContent {
    name: string
    role: string
    email: string
    location: string
    avatar: string
    socials: ContactSocial[]
}
