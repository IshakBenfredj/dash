import { RiDashboardFill } from 'react-icons/ri'
import { GiSkills } from 'react-icons/gi'
import { AiFillAppstore, AiFillMessage } from 'react-icons/ai'
import { MdPlayLesson, MdWork } from 'react-icons/md'
import { BsPersonHeart } from "react-icons/bs";
import { FaComments } from 'react-icons/fa';

export const navLinks = [
    {
        path : "",
        link : "dashboard",
        icon : <RiDashboardFill />,
    },
    {
        path : "/skills",
        link : "skills",
        icon : <GiSkills />,
    },
    {
        path : "/portfolio",
        link : "portfolio",
        icon : <AiFillAppstore />,
    },
    {
        path : "/services",
        link : "services",
        icon : <MdWork />,
    },
    {
        path : "/messages",
        link : "messages",
        icon : <AiFillMessage />,
    },
    {
        path : "/testimonials",
        link : "testimonials",
        icon : <BsPersonHeart />,
    },
    {
        path : "/comments",
        link : "comments",
        icon : <FaComments />,
    },
    {
        path : "/lessons",
        link : "lessons",
        icon : <MdPlayLesson />,
    },
]

export const skillsTypes = [
    "web front-end",
    "web back-end",
    "mobile front-end",
    "mobile back-end",
    "desktop front-end",
    "desktop back-end",
]