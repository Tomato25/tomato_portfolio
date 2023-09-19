import {
  SiAdobexd,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiFirebase,
  SiNodedotjs,
  SiPostgresql,
  SiCss3
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import {FaCcStripe, FaReact} from "react-icons/fa"

export const projects = [
  {
    name: "Instagram clone",
    id: "4",
    year: "2023",
    github: "https://github.com/Tomato25/instagram-project",
    link: "https://instagram-project-liart.vercel.app/",
    description: [
      "Instagram clone fullstack web application developed with NextJS, NodeJS, Typescript, NextAuth, TailwindCSS and Google Firebase.",
      "Sign in functionality. Users can add posts, comment and like. Users can also check out their saved and liked posts. ",
      "Application is fully responsive and can be accessed in light or dark mode."
    ],
      technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
    ],
    images: [
      {
        src: "/Images/Instagram/1.png",
        alt: "screenshot1",
      },
      {
        src: "/Images/Instagram/2.png",
        alt: "screenshot2",
      },
      {
        src: "/Images/Instagram/3.png",
        alt: "screenshot3",
      },
      {
        src: "/Images/Instagram/4.png",
        alt: "screenshot4",
      },
      {
        src: "/Images/Instagram/5.png",
        alt: "screenshot5",
      },
      {
        src: "/Images/Instagram/6.png",
        alt: "screenshot6",
      },
      {
        src: "/Images/Instagram/7.png",
        alt: "screenshot7",
      },
    ],
  },
  {
    name: "E-commerce",
    id: "3",
    github: "https://github.com/Tomato25/next-ecommerce",
    link: "https://next-ecommerce-roan-kappa.vercel.app/",
    year: "2023",
    description: [
      "Fullstack e-commerce web application with integrated Stripe payment developed using NextJS, NodeJS, TailwindCSS, PostgreSQL, Zustand etc.",
      "After signing in users can browse different categories and add items to the cart. Cart item quantity can be changed and items can be removed.",
      "Stripe checkout is integrated in the website and with the database. Users can see their purchase history at the dashboard.",
      "Application is fully responsive and can be accessed in light and dark mode."
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        name: "Stripe",
        icon: <FaCcStripe />,
      },
    ],

    images: [
      {
        src: "/Images/Ecommerce/1.png",
        alt: "screenshot1",
      },
      {
        src: "/Images/Ecommerce/2.png",
        alt: "screenshot2",
      },
      {
        src: "/Images/Ecommerce/3.png",
        alt: "screenshot3",
      },
      {
        src: "/Images/Ecommerce/4.png",
        alt: "screenshot4",
      },
      {
        src: "/Images/Ecommerce/5.png",
        alt: "screenshot5",
      },
      {
        src: "/Images/Ecommerce/6.png",
        alt: "screenshot6",
      },
    ],
  },
  {
    name: "Snaga Prirode",
    id: "2",
    year: "2023",
    github: "https://github.com/Tomato25/SnagaPrirode",
    link: "https://snagaprirode.com.hr/",
    description: [
      "Freelance project for small farm business in Croatia. Website is fully responsive and developed using ReactJS, CSS3 and Framer Motion",
    ],
    technologies: [
      {
        name: "react.js",
        icon: <FaReact />,
      },
      {
        name: "css",
        icon: <SiCss3 />,
      },
      {
        name: "FramerMotion",
        icon: <TbBrandFramerMotion />,
      },
    ],

    images: [
      {
        src: "/Images/SnagaPrirode/screen0.png",
        alt: "screenshot0",
      },
      {
        src: "/Images/SnagaPrirode/screen1.png",
        alt: "screenshot1",
      },
      {
        src: "/Images/SnagaPrirode/screen2.png",
        alt: "screenshot2",
      },
      {
        src: "/Images/SnagaPrirode/screen3.png",
        alt: "screenshot3",
      },
      {
        src: "/Images/SnagaPrirode/screen4.png",
        alt: "screenshot4",
      },
      {
        src: "/Images/SnagaPrirode/screen5.png",
        alt: "screenshot5",
      },
    ],
  },
  {
    name: "Tomic Codes Portfolio",
    id: "1",
    github: "https://github.com/Tomato25/tomato_portfolio",
    link: "https://h-tomic.codes/",
    year: "2023",
    description: [
      "Personal portfolio website developed using NextJS, Typescript, TailwindCSS and FramerMotion library",
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        name: "FramerMotion",
        icon: <TbBrandFramerMotion />,
      },
    ],

    images: [
      {
        src: "/Images/Portfolio/1.png",
        alt: "screenshot1",
      },
      {
        src: "/Images/Portfolio/2.png",
        alt: "screenshot2",
      },
      {
        src: "/Images/Portfolio/3.png",
        alt: "screenshot3",
      },
      {
        src: "/Images/Portfolio/4.png",
        alt: "screenshot4",
      },
      {
        src: "/Images/Portfolio/5.png",
        alt: "screenshot5",
      },
    ],
  } /* {
  name: "NTU Rise",
  year: "2022",
  images: [
    {
      src: "/Images/NTURise/1.png",
      alt: "screenshot1",
    },
    {
      src: "/Images/NTURise/2.png",
      alt: "screenshot2",
    },
    {
      src: "/Images/NTURise/3.png",
      alt: "screenshot3",
    },
    {
      src: "/Images/NTURise/4.png",
      alt: "screenshot4",
    },
    {
      src: "/Images/NTURise/5.png",
      alt: "screenshot5",
    },
    {
        src: "/Images/NTURise/6.png",
        alt: "screenshot6",
      },
  ],
}, {
  name: "Wellbeing application",
  year: "2020",
  images: [
    {
      src: "/Images/WellbeingApp/1.jpg",
      alt: "screenshot1",
    },
    {
      src: "/Images/WellbeingApp/2.jpg",
      alt: "screenshot2",
    },
    {
      src: "/Images/WellbeingApp/3.jpg",
      alt: "screenshot3",
    },
    {
      src: "/Images/WellbeingApp/4.jpg",
      alt: "screenshot4",
    },
    {
      src: "/Images/WellbeingApp/5.jpg",
      alt: "screenshot5",
    },
  ], 
}*/,
];
