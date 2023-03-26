import { MdAttachMoney } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { CgWebsite, CgIfDesign } from "react-icons/cg";
import { GiClockwork } from "react-icons/gi";
import { MdOutlineLocalMovies } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
// import { FaCalculator } from "react-icons/fa";
// import { CgGlassAlt } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import { SiJavascript } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Pennywise",
    description:
      "Expense tracking websites simplify financial management by providing an online platform for categorizing, tracking, and analyzing expenses, saving time and reducing errors.",
    toolsUsed: "React, Firebase, Tailwind CSS",
    icon: <MdAttachMoney />,
    githubLink: "https://github.com/smileyismail/Pennywise",
    liveLink: "https://pennywisee.netlify.app/",
  },

  {
    id: 2,
    title: "Mini-Games Studio",
    description:
      "A web application contains couple of retro games from the late 90s, allowing nostalgic gamers to relive the excitement of the golden era of gaming.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <CgGames />,
    githubLink:
      "https://github.com/smileyismail/Javascript-Projects/tree/master/01_MiniGamesStudio",
    liveLink: "https://javascript-projectss.netlify.app/01_minigamesstudio/",
  },

  {
    id: 3,
    title: "Movies Hive",
    description:
      "This website provides details and ratings of the movies, with new, popular, trending and top-rated films constantly updated through a connection to an API.",
    toolsUsed: "React, Material UI, theMoviesDB",
    icon: <MdOutlineLocalMovies />,

    githubLink: "https://github.com/smileyismail/Movies-Hive",
    liveLink: "https://movies-hive.netlify.app",
  },

  {
    id: 4,
    title: "D-Staffing",
    description:
      "A modern website landing page that is not only visually stunning, but it is also fully responsive to ensure seamless navigation on any device.",
    toolsUsed: "React, Tailwind Css, React-Carousel",
    icon: <CgWebsite />,
    githubLink: "https://github.com/smileyismail/D-Staffing",
    liveLink: "https://d-staffing.netlify.app/",
  },

  {
    id: 5,
    title: "Ninja Mail",
    description:
      "A modern website landing page that is not only visually stunning, but it is also fully responsive to ensure seamless navigation on any device.",
    toolsUsed: "React, Tailwind Css",
    icon: <CgWebsite />,
    githubLink: "https://github.com/smileyismail/NinjaMail",
    liveLink: "https://ninjamaill.netlify.app/",
  },

  {
    id: 6,
    title: "Cartway",
    description:
      "This is an E-Commerce Store with cart option and it can also be filtered by category. We can also search products by their names.",
    toolsUsed: "React, Tailwind Css",
    icon: <BsCart4 />,
    githubLink: "https://github.com/smileyismail/Cartway",
    liveLink: "https://cartway.netlify.app/",
  },
  {
    id: 7,
    title: "Javascript Projects",
    description:
      "Many small JavaScript projects that showcase basic functionalities and logic, such as form validation, DOM manipulation, animations, user interaction, etc...",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <SiJavascript />,
    githubLink: "https://github.com/smileyismail/Javascript-Projects",
    liveLink: "https://javascript-projectss.netlify.app/",
  },

  {
    id: 8,
    title: "Design Projects",
    description:
      "Many small Design projects that showcase visually stunning user interfaces, such as simple animations, Text Effects, etc...",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <CgIfDesign />,
    githubLink: "https://github.com/smileyismail/Design-Projectsy",
    liveLink: "https://design-projects.netlify.app/",
  },

  // updated end

  {
    id: 9,
    title: "Stopwatch and Clock",
    description:
      "A Application with a functionality of both stopwatch and a clock. The design of the application is Spectacular. ",
    toolsUsed: "HTML, CSS, JavaScript, jQuery ",
    icon: <GiClockwork />,
    githubLink: "https://github.com/smileyismail/Stopwatch-and-Clock",
    liveLink: "https://smiley-stopwatch-clock.netlify.app/",
  },

  {
    id: 10,
    title: "Resume Builder",
    description:
      "An amazing Resume Builder that can create Modern Resumes with spectacular Templates.",
    toolsUsed: "React, CSS, JSX",
    icon: <RiNewspaperLine />,
    githubLink: "https://github.com/smileyismail/Resume-Builder",
    liveLink: "https://smiley-resume-builder.netlify.app/",
  },

  {
    id: 11,
    title: "Hover Board",
    description:
      "A cool animation with multiple colors and different effects will occur when you hover on it.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <CgMenuGridR />,
    githubLink: "https://github.com/smileyismail/Hover-Board",
    liveLink: "https://smiley-hover-board.netlify.app/",
  },
];

export default projects;