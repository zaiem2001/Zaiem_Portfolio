const projects = [
  {
    id: "p6",
    title: "Blog Application (Typescript and GraphQL)",
    imgs: [
      "/assets/projects/zblog-home.png",
      "/assets/projects/homePage.png",
      "/assets/projects/updatePage.png",
      "/assets/projects/followers.png",
      "/assets/projects/login.png",
      "/assets/projects/comments.png",
    ],
    link: "https://zblog-frontend.netlify.app/",
    git: "https://github.com/zaiem2001/zblog-frontend",
  },
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
    _id: 2,
    name: "Adrixus Tech Pvt Ltd",
    img: "/assets/Adrixus.png",
    location: "Vadodara",
    description: `Adrixus Tech Pvt Ltd is a leading IT company and giving varous services to the clients. For example, Web development, Blockchain development, Mobile development, etc. We have a team of highly skilled and experienced IT professionals who are dedicated to providing the best IT solutions to our clients.`,
    website: "https://spreadd.io",
    role: "MERN Stack Developer",
    startDate: "06-01-2022", //mm-dd-yyyy
    endDate: "",
    workDesc: `Working on some client's projects, then started working on the company's main website. 
    Worked with Apollo and graphQL with microservices, react-relay and added many use-cases.
               `,

    usecases: [
      "Apollo Federation",
      "Upgraded whole backend schema",
      "Working on Backend, Frontend, GraphQL with Apollo",
      "React-relay",
    ],

    stackUsed: [
      "GraphQL",
      "React-Relay",
      "React-Query",
      "React",
      "MongoDB",
      "NodeJS (Express)",
      "Jenkins",
    ],
  },
  {
    _id: 1,
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
      "All Students data in Excel Report",
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
