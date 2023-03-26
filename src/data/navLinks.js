import { BsPersonCircle } from "react-icons/bs";
import { GoTools } from "react-icons/go";
import { AiFillProject } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdWork } from "react-icons/md";

const navLinks = [
  { id: 1, text: "Home", icon: <IoMdHome />, path: "#home" },
  { id: 2, text: "About", icon: <BsPersonCircle />, path: "#about" },
  { id: 3, text: "Skills", icon: <GoTools />, path: "#skills" },
  { id: 4, text: "Experience", icon: <MdWork />, path: "#experience" },
  { id: 5, text: "Projects", icon: <AiFillProject />, path: "#projects" },
  { id: 6, text: "Contacts", icon: <MdEmail />, path: "#contact" },
];

export default navLinks;
