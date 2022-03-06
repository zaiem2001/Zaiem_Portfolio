const projects = [
  {
    id: "p4",
    title: "Social Media App",
    imgs: [
      "/assets/projects/profilePage.png",
      "/assets/projects/homePage.png",
      "/assets/projects/updatePage.png",
      "/assets/projects/followers.png",
      "/assets/projects/login.png",
      "/assets/projects/comments.png",
    ],
    link: "https://zaiem-social.herokuapp.com/",
    git: "https://github.com/zaiem2001/social-media-app",
  },
  {
    id: "p1",
    title: "Ecommerce shopping app",
    imgs: [
      "/assets/projects/shop.png",
      "/assets/projects/profile.png",
      "/assets/projects/order.png",
      "/assets/projects/home.png",
      "/assets/projects/cart.png",
    ],
    link: "https://zaiemshop.herokuapp.com/",
    git: "https://github.com/zaiem2001/MERN-stack-Shop-App",
  },
  {
    id: "p2",
    title: "Next.Js meetings app",
    imgs: ["/assets/projects/meetings.png"],
    link: "https://nextjs-demo-project-9aeopp381-zaiem2001.vercel.app/",
    git: "https://github.com/zaiem2001/nextjs-demo-project",
  },
  {
    id: "p3",
    title: "React portfolio design",
    imgs: [
      "/assets/projects/portfolio.png",
      "/assets/projects/portfolioPage.png",
      "/assets/projects/work.png",
    ],
    link: "https://zaiem2001.github.io/portfolio-react-test/",
    git: "https://github.com/zaiem2001/portfolio-react-test",
  },
];

export const companies = [
  {
    name: "GUVI Geek Networks",
    img: "/assets/guvi.jpg",
    location: "Chennai",
    description: `GUVI (Grab Your Vernacular Imprint) Geek Network Private Limited is an Online Learning Platform incubated by IITM and IIM-A, supported by Google Launchpad & Jio Gennext.
    What sets us apart is the fact that we offer online learning in a plethora of different vernacular languages along with English. With more than 1.8 lakh users currently learning from our platform, GUVI continues to grow at a tremendous rate. Visit www.guvi.in now.`,
    website: "https://www.guvi.in/",
    role: "Software Developer Intern",
    startDate: "01-03-2022",
    endDate: "04-03-2022",
    workDesc: `Implemented Various use-cases for the company's main website,
               Worked on various events,
               Solved student queries in MERN Stack,
               Tasks evaluation.
               `,

    usecases: [
      "Hackathon (with Email)",
      "Capstone (with Email)",
      "Students Leave Applications",
      "MockInterview",
      "Batch History",
      "Various Filters",
      "Interviews, Applications and Requirements",
      "Admin Dashboard",
      "Bulk Mailer",
      "All Students data in Excel Report"
    ],

    stackUsed: [
      "React",
      "MongoDB",
      "NodeJS (Express)",
      "Redis",
      "AWS",
      "SocketIO",
      "Github",
    ],
  },
];

export default projects;
