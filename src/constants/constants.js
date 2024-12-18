import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  trainer,
  restaurant,
  charity,
  suez,
  iti,
  personal,
  supabase,
  nextjs,
  designo,
  archstudio,
  photosnap,
  pfa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "User Experience",
    icon: backend,
  },
  {
    title: "Web Design",
    icon: mobile,
  },
  {
    title: "Content Creation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
];

const experiences = [
  {
    title: "Computer Science Student",
    company_name: "Suez Canel University",
    icon: suez,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Scholarship in ITI",
    company_name: "Information Technology Institute",
    icon: iti,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Personal Projects",
    company_name: "",
    icon: personal,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Italian Restaurant",
    description:
      "A website for an authentic Italian restaurant, showcasing their menu, location, and contact information. Users can also make reservations and explore their catering services.",
    tags: [
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/ZiadRefaey/Ray-s-Restaraunt/",
    live_site_link: "https://rays-restaurant.netlify.app/home.html",
  },
  // {
  //   name: "Orphanage Charity",
  //   description:
  //     "A website for a non-profit organization that helps orphans and vulnerable children. The website features information about their mission, current projects, and ways to donate and get involved.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "red-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: charity,
  //   source_code_link: "https://github.com/ZiadRefaey/Ray-s-Charity",
  //   live_site_link: "https://rays-charity.netlify.app/",
  // },

  {
    name: "Personal Trainer",
    description:
      "A website for a personal trainer who specializes in helping clients achieve their fitness goals. The website includes information about their services, pricing, and testimonials from satisfied clients.",
    tags: [
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: trainer,
    source_code_link: "https://github.com/ZiadRefaey/Ray-s-Trainer",
    live_site_link: "https://rays-trainer.netlify.app/",
  },
  {
    name: "Designo",
    description:
      "A website for a designing company specializing in software products. such as mobile apps, webapps and graphic design. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
    ],
    image: designo,
    source_code_link: "https://github.com/ZiadRefaey/Deisgno-FEM",
    live_site_link: "https://deisgno-fem-ziadrefaeys-projects.vercel.app/",
  },
  {
    name: "ArchStudio",
    description:
      "A website for an architecture company portfolio. Specializing in Modern architecture connecting with clients to bring their ideas to life.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
    ],
    image: archstudio,
    source_code_link: "https://github.com/ZiadRefaey/Arch-Studio-FEM",
    live_site_link: "https://arch-studio-fem.vercel.app/",
  },
  {
    name: "Photosnap",
    description:
      "Photosnap is a platform for photographers and visual storytellers. showcasing the work and portfolio of the group.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: photosnap,
    source_code_link: "https://github.com/ZiadRefaey/FE-Mentor-Photosnap",
    live_site_link: "https://merry-treacle-84322f.netlify.app/",
  },
  {
    name: "Personal Fiannce app",
    description:
      "A webapp to track your finances. It's a fullstack application using supabase to handle the database and nextAuth for authentication. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "gray-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: pfa,
    source_code_link: "https://github.com/ZiadRefaey/personal-finance-app",
    live_site_link: "https://personal-finance-app-fem.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
