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
    link: "https://zsocialapp.onrender.com/",
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
    _id: 3,
    name: "Carleton University",
    img: "/assets/carleton_university_logo.jpeg",
    location: "Ottawa",
    description: ``,
    website: "https://carleton.ca/",
    role: "Full Stack Developmemt: Course Instructor",
    startDate: "09-01-2023", //mm-dd-yyyy
    endDate: "05-10-2024",
    range: "2023-2024",
    workDescription: [
      "Led a Full Stack Development course for 30 students, focusing on HTML, CSS, JavaScript, and frontend development with React.",
      "Taught students how to deploy static websites on GitHub and Netlify, emphasizing industry-standard deployment practices.",
      "Covered RESTful APIs using backend development using NodeJS and Express.",
      "Guided students through creating three React projects, providing hands-on experience in project development and deployment on GitHub and Netlify.",
    ],

    usecases: ["JavaScript", "React", "NodeJS", "APIs", "HTML/CSS"],

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
    _id: 2,
    name: "Spreadd",
    img: "/assets/spreadd-logo.jpg",
    location: "Vadodara",
    description: `Spreadd is a SaaS-based AdTech platform that allows you to carry out marketing campaigns, check content analytics and carry out advanced audience targeting, Our primary focus is on building a feasible, fast yet secure platform that makes marketing more transparent and ethical for all. A platform for the creators, influencers, brands who are looking for effective digital marketing campaigns that are backed by data. Currently, we don't have a system that provides customised, fast, transparent and detailed analytical informative platforms - Spreadd wants to make a difference here!`,
    website: "https://spreadd.io",
    role: "Full Stack Developer",
    startDate: "05-01-2022", //mm-dd-yyyy
    endDate: "01-01-2023",
    range: "2022-2023",
    workDesc: `Worked on GraphQL, Apollo-server, React-relay, MERN stack and other
    libraries. Worked on different microservices. Studied Meta developers API and integrated WhatsApp into the webapp, where, admin can perform many actions through WhatsApp. 
    Worked on campaign statistics design and integration on creator side as well as brand side, where they can see their due payments, milestones, goals to acheive etc. Worked on Redesigning whole campaign creation flow. Worked on UI, backend as well as on integration. Created Referral programme UI for creators.
               `,
    workDescription: [
      "Streamlined communication and registration processes by integrating WhatsApp Business with webhooks, resulting in a 10% increase in user engagement.",
      "Implemented optimization strategies for GraphQL queries with react-relay fragments, simultaneously restructuring the backend GraphQL schema for Microservices. These initiatives resulted in a notable 20% increase in website speed, reduced unnecessary updates, enhanced data storage efficiency, and ensured consistency across the system.",
      "Developed RazorPayX SDK for cryptocurrency payments within the RazorPay ecosystem.",
      "Achieved more than 95% test coverage by writing unit tests for backend microservices, supporting Test-Driven Development",
    ],
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
    role: "Software Developer",
    startDate: "08-01-2021",
    endDate: "04-03-2022",
    range: "2021-2022",
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

    workDescription: [
      "Implemented automated solutions for administrative tasks, including daily email automation and batch histories leading to a 25% increase in operational efficiency.",
      "led the development and deployment of several features for more than 3,000 enrolled students, working closely with the design team to ensure they fulfilled user requirements and preferences.",
      "Independently developed use cases addressing organizational needs, including Hackathon, Capstone, Mock-Interview, Cron-Job automation and more. These features significantly contributed to enhancing team productivity, increased administrative control, and expanded data insights, improving overall platform functionality and efficiency.",
      "Acted as an effective mentor, providing comprehensive instruction on MERN stack concepts and web development to students, earning a top-rated, 5-star mentor status.",
    ],
  },
];

export default projects;
