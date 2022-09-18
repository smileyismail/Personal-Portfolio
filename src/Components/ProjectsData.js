import { MdAttachMoney } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { GiClockwork } from "react-icons/gi";
import { MdOutlineLocalMovies } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio website",
    category: "react",
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
    description:
      "A retro game studio where one can enjoy the 90s games. Some games are also integrated with API's and Computer AI",
    toolsUsed: "JavaScript, CSS, HTML",
    icon: <CgGames />,
    githubLink: "https://github.com/smileyismail/Mini-Games-Studio",
    liveLink: "https://smiley-mini-games-studio.netlify.app/",
  },
  {
    id: 3,
    title: "Expense Tracker",
    category: "react",
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
    description:
      "A website where you can find latest movies with details along with their ratings. The application is connected to a API so that i fetches latest Movies all the time.",
    toolsUsed: "React, CSS, JSX",
    icon: <MdOutlineLocalMovies />,

    githubLink: "https://github.com/smileyismail/Movies-Palace",
    liveLink: "https://smiley-movies-palace.netlify.app/",
  },
  {
    id: 6,
    title: "Resume Builder",
    category: "react",
    description:
      "An amazing Resume Builder that can create Modern Resumes with spectacular Templates.",
    toolsUsed: "React, CSS, JSX",
    icon: <RiNewspaperLine />,

    githubLink: "https://github.com/smileyismail/Resume-Builder",
    liveLink: "https://smiley-resume-builder.netlify.app/",
  },
];

export default PROJECTS_DATA;