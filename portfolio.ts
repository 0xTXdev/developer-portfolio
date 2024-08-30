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
    "Results-driven Python Full Stack Developer with 4 years of hands-on experience in React and Django development, backed by 9 years of programming expertise, starting as an open-source contributor at 17.",
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
  subTitle: "Results-driven Python Full Stack Developer",
  data: [
    {
      title: "Software Engineer | Python Full Stack Developer | Backend Solutions",
      lottieAnimationFile: `/developer-portfolio/lottie/skills/fullstack.json`, // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building scalable backend systems with Python & Django"),
        emoji("⚡ Creating SPAs and PWAs with React.js"),
        emoji("⚡ Automating deployment with Docker, Kubernetes, and CI/CD"),
        emoji("⚡ Ensuring code quality with TDD and Continuous Integration"),
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
          skillName: "Flask",
          iconifyTag: "logos:flask",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "React",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NextJS",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
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
    subHeader: "Bachelor's Degree in Computer Science",
    duration: "04/2016 - 09/2020",
    desc: "Kyoto, JP",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Python Developer | Full Stack Engineer",
    company: "TechGlobe Solutions",
    companyLogo: `${process.env.BASE_PATH || ""}/img/icons/common/techglobe.png`,
    date: "06/2023 - 07/2024",
    desc: "",
    descBullets: [
      "Architected a scalable web application, increasing user capacity by 40% and significantly improving customer satisfaction.",
      "Collaborated with cross-functional teams to integrate machine learning algorithms, boosting data processing efficiency by 25%.",
      "Developed a new RESTful API that optimized data retrieval processes and enhanced overall system performance.",
      "Created custom Python scripts that saved approximately 15 hours of manual work weekly, streamlining data management.",
      "Automated testing workflows, increasing code coverage by 30% and strengthening application robustness.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Hitachi",
    companyLogo: `${process.env.BASE_PATH || ""}/img/icons/common/hitachi.png`,
    date: "03/2021 - 05/2023",
    desc: "",
    descBullets: [
      "Developed over 50 reusable JSX components, improving development speed by 20% for future projects.",
      "Engineered a PostgreSQL database system that optimized data storage and retrieval, enhancing efficiency by 35%.",
      "Built progressive web applications using React, resulting in a 50% boost in user engagement on mobile platforms.",
      "Refined backend architecture, reducing server response times by 150ms on average.",
      "Integrated external services using RESTful APIs, expanding platform capabilities and enriching user experience.",
    ],
  },
  {
    role: "Python Developer",
    company: "Rakuten",
    companyLogo: `${process.env.BASE_PATH || ""}/img/icons/common/Rakuten.jpg`,
    date: "10/2020 - 02/2021",
    desc: "",
    descBullets: [
      "Designed a comprehensive content management system with Django, efficiently managing workflows for a team of 20+ content creators.",
      "Implemented a new scoring algorithm for educational assessments, improving accuracy by 15%.",
      "Led code reviews to ensure compliance with coding standards, enhancing security and scalability.",
      "Migrated development environments to Azure, streamlining deployment processes and improving consistency.",
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
    role: "Senior Frontend Developer at TechGlobe Solutions",
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
    name: "Giyu Inoue",
    role: "CTO at Rakuten",
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
  keywords: ["Haru", "Haru Tanaka", "@0xTXdev", "0xTXdev", "Portfolio", "Haru Portfolio ", "Haru Tanaka Portfolio"],
};
