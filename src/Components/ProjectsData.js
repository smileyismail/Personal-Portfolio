import { MdAttachMoney } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { GiClockwork } from "react-icons/gi";
import { MdOutlineLocalMovies } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { CgGlassAlt } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillHtml5 } from "react-icons/ai";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio website",
    category: "react",
    showOnHome: false,
    description:
      "My personal portfolio website which showcase all of  Me, My Skills, My Work, My Contact Information, etc. ",
    toolsUsed: "React, CSS, JSX",
    icon: <CgProfile />,
    githubLink: "https://github.com/smileyismail",
    liveLink: "https://smiley-ismail.netlify.app/",
  },
  {
    id: 2,
    title: "Mini-Games Studio",
    category: "javaScript",
    showOnHome: true,

    description:
      "A retro game studio where one can enjoy the 90s games. Some games are also integrated with API's and Computer AI",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <CgGames />,
    githubLink: "https://github.com/smileyismail/Mini-Games-Studio",
    liveLink: "https://smiley-mini-games-studio.netlify.app/",
  },
  {
    id: 3,
    title: "Expense Tracker",
    category: "react",
    showOnHome: true,

    description:
      "An expense tracker where one can track all of their Expenses, Add new Expense and Sort the expenses according to the date. ",
    toolsUsed: "React, CSS, JSX",
    icon: <MdAttachMoney />,
    githubLink: "https://github.com/smileyismail/Expense-Tracker",
    liveLink: "https://smiley-expense-tracker.netlify.app/",
  },
  {
    id: 4,
    title: "Stopwatch and Clock",
    category: "javaScript",
    showOnHome: true,

    description:
      "A Application with a functionality of both stopwatch and a clock. The design of the application is Spectacular. ",
    toolsUsed: "HTML, CSS, JavaScript, jQuery ",
    icon: <GiClockwork />,

    githubLink: "https://github.com/smileyismail/Stopwatch-and-Clock",
    liveLink: "https://smiley-stopwatch-clock.netlify.app/",
  },
  {
    id: 5,
    title: "Movies Palace",
    category: "javaScript",
    showOnHome: false,

    description:
      "A website where you can find latest movies with details along with their ratings. The application is connected to a API so that i fetches latest Movies all the time.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <MdOutlineLocalMovies />,

    githubLink: "https://github.com/smileyismail/Movies-Palace",
    liveLink: "https://smiley-movies-palace.netlify.app/",
  },
  {
    id: 6,
    title: "Resume Builder",
    showOnHome: true,

    category: "react",
    description:
      "An amazing Resume Builder that can create Modern Resumes with spectacular Templates.",
    toolsUsed: "React, CSS, JSX",
    icon: <RiNewspaperLine />,

    githubLink: "https://github.com/smileyismail/Resume-Builder",
    liveLink: "https://smiley-resume-builder.netlify.app/",
  },
  {
    id: 7,
    title: "E-Commerce Store",
    category: "react",
    showOnHome: true,

    description:
      "This is an E-Commerce Store with cart option and the can be filtered by category. We can also search products by their names.",
    toolsUsed: "React, CSS, JSX",
    icon: <BsCart4 />,

    githubLink: "https://github.com/smileyismail/E-Commerse-Store",
    liveLink: "https://smiley-e-store.netlify.app/",
  },
  {
    id: 8,
    title: "Calculator",
    category: "javaScript",
    showOnHome: false,

    description:
      "A calculator that can be used to perform all the mathematical operations.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <FaCalculator />,

    githubLink: "https://github.com/smileyismail/Calculator",
    liveLink: "https://smiley-calculator.netlify.app/",
  },
  {
    id: 9,
    title: "Drink Water Tracker",
    category: "others",
    showOnHome: false,

    description:
      "A web application that can help you track the amount of water to drink in a day with cool animations.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <CgGlassAlt />,

    githubLink: "https://github.com/smileyismail/Drink-Water-Tracker",
    liveLink: "https://smiley-drink-water-tracker.netlify.app/",
  },
  {
    id: 10,
    title: "Hover Board",
    category: "others",
    showOnHome: false,

    description:
      "A cool animation with multiple colors and different effects will occur when you hover on it.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <CgMenuGridR />,

    githubLink: "https://github.com/smileyismail/Hover-Board",
    liveLink: "https://smiley-hover-board.netlify.app/",
  },
  {
    id: 11,
    title: "Figma to HTML",
    category: "others",
    showOnHome: true,

    description:
      "Converted a Figma full website Design to HTML. The Design is also responsive.",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <AiFillHtml5 />,

    githubLink: "https://github.com/smileyismail/Figma-to-HTML",
    liveLink: "https://smiley-figma-to-html.netlify.app/",
  },
];

export default PROJECTS_DATA;
