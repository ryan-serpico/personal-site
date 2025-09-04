export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://ryanserpi.co',
    title: 'Ryan Serpico',
    subtitle: 'Deputy Director of Newsroom AI and Automation at Hearst Newspapers',
    description: 'Ryan Serpico - Deputy Director of Newsroom AI and Automation at Hearst Newspapers, building AI tools to empower journalists nationwide',
    image: {
        src: '/mug.jpeg',
        alt: 'Ryan Serpico'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ryanserpico'
        }
    ],
    hero: {
        text: "I'm **Ryan Serpico**, Deputy Director of Newsroom AI and Automation at Hearst Newspapers, where I build tools that leverage generative AI and automation to empower journalists across newsrooms nationwide. My approach focuses on using AI responsibly to support reporters—not replace them—while maintaining the highest editorial standards. As a University of Florida journalism graduate and former digital producer at the San Antonio Express-News, I'm passionate about the intersection of cutting-edge technology and quality journalism. I've developed tools like Producer-P and the award-nominated Kamala Harris News Assistant that help newsrooms work more efficiently while preserving journalistic integrity.",
        image: {
            src: '/mug.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
