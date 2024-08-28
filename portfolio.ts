import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Haru Tanaka",
  title: "Hi all, I'm Haru",
  description:
    "Ambitious and technically adept Python Full Stack Developer with over 7 years of industry experience, specializing in React and Django development. My career is marked by a track record of building robust systems that enhance user interface and experience, achieving a 99.9% uptime for business-critical applications, and notably improving system efficiencies. Eager to develop SIGMA's next-generation assessment platform.",
  resumeLink: "https://drive.google.com/file/d/1d431f4q2Khz8elNSm1QKp9d2eimD6SNM/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "0xtxdev",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "hanatanya93@gmail.com",
  // linkedin: "https://www.linkedin.com/in/1Haru100/",
  url: "https://discord.com/users/225308015165702154",
  github: "https://github.com/0xtxdev",
  // instagram: "https://www.instagram.com/__Haru100",
  // facebook: 'https://www.facebook.com/1Haru100',
  // twitter: 'https://twitter.com/1Haru100',
};

export const skillsSection: SkillsSectionType = {
  title: "SUMMARY",
  subTitle: "Ambitious and technically adept Python Full Stack Developer",
  data: [
    {
      title: "Software Engineer | Python Full Stack Developer | Backend Solutions",
      lottieAnimationFile: `/developer-portfolio/lottie/skills/fullstack.json`, // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building various kind of bots using python"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "",
          iconifyTag: "",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Kyoto",
    subHeader: "Master's Degree in Computer Science",
    duration: "01/2018 - 01/2020",
    desc: "Kyoto, JP",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "University of Nagoya",
    subHeader: "Bachelor's Degree in Computer Science",
    duration: "01/2016 - 01/2018",
    desc: "Nagoya, JP",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Python Developer",
    company: "TechGlobe Solutions",
    companyLogo: `${process.env.BASE_PATH || ""}/img/icons/common/techglobe.png`,
    date: "06/2023 - 07/2024",
    desc: "",
    descBullets: [
      "Led the development of a scalable web application, increasing user capacity by 40% and significantly enhancing the customer experience.",
      "Collaborated with a cross-functional team to integrate machine learning algorithms, resulting in a 25% improvement in data processing efficiency.",
      "Pioneered the implementation of a new RESTful API, which streamlined data retrieval processes and bolstered overall system performance.",
      "Executed end-to-end software development lifecycle with precision, delivering stable releases and achieving a 99.9% uptime for critical applications.",
      "Wrote custom Python scripts for data manipulation that saved the company approximately 15 hours of manual work per week.",
      "Automated the testing process which improved the code coverage by 30%, enhancing the robustness of the application.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Hitachi",
    companyLogo: `${process.env.BASE_PATH || ""}/img/icons/common/hitachi.png`,
    date: "03/2021 - 05/2023",
    desc: "",
    descBullets: [
      "Created over 50 JSX components that were reusable and contributed to a 20% increase in development speed for future projects.",
      "Designed and implemented a database system in PostgreSQL that optimized storage and retrieval operations by 35%.",
      "Developed progressive web apps with React, enhancing mobile user engagement by more than 50%.",
      "Optimized existing backend code, leading to a reduction in server response time by an average of 150ms. ",
      "Integrated third-party services using RESTful APIs, which expanded the platform's capabilities and enriched the user experience.",
    ],
  },
  {
    role: "Python Developer",
    company: "Rikuten",
    companyLogo: `${process.env.BASE_PATH || ""}/img/icons/common/rikuten.jpg`,
    date: "10/2020 - 02/2021",
    desc: "",
    descBullets: [
      "Developed a robust content management system using Django, which successfully managed the workflow for a team of 20 content creators.",
      "Implemented a new scoring algorithm for educational assessments that increased the accuracy of results by 15%.",
      "Performed extensive code reviews to enforce coding standards and improve application's security and scalability.",
      "Assisted in transitioning the development environment to Azure resulting in a more consistent deployment process.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/0xtxdev/developer-portfolio",
    link: "https://0xtxdev.github.io/developer-portfolio/",
  },
  {
    name: "Makuake",
    desc: "Makuake is a crowdfunding platform that allows creators to launch projects and gather support from backers. The site features a user-friendly interface built with React, providing dynamic content updates, while Django serves as the backend framework managing user data, project submissions, and transactions.",
    link: "https://makuake.com",
  },
  {
    name: "BASE",
    desc: "BASE is an e-commerce platform that allows users to create their online stores easily. The frontend is built with React, providing a responsive and engaging shopping experience. The backend, powered by Django, manages product listings, transactions, and user accounts efficiently.",
    link: "https://thebase.in",
  },
  {
    name: "Cookpad",
    desc: "Cookpad is a recipe-sharing platform where users can upload and discover recipes. The site employs React to enhance user engagement through interactive features like recipe ratings and comments. Django supports the backend, managing the database of recipes, user profiles, and community interactions.",
    link: "https://cookpad.com",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at TechGlobe Solutions",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Haru is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Ichiro Kato",
    role: "Project Manager of Hitachi",
    feedback:
      "Haru has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Haru is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Haru for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Kiyu Okasaki",
    role: "CTO at Rikuten",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Haru Tanaka",
  description: greetings.description,
  author: "Haru Tanaka",
  image: "https://arweave.net/d8_MWvW5cekbrMZby1bgdDldvAr84wX7GpAP_MiisGI",
  url: "https://0xtxdev.github.io/developer-portfolio/",
  keywords: ["Haru", "Haru Tanaka", "@0xTxdev", "0xTxdev", "Portfolio", "Haru Portfolio ", "Haru Tanaka Portfolio"],
};
