import { RiDashboardFill, RiMailStarFill } from 'react-icons/ri'
import { GiSkills } from 'react-icons/gi'
import { AiFillAppstore, AiFillMessage } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'


export const navLinks = [
    {
        path : "",
        link : "dashboard",
        icon : <RiDashboardFill />,
    },
    {
        path : "skills",
        link : "skills",
        icon : <GiSkills />,
    },
    {
        path : "portfolio",
        link : "portfolio",
        icon : <AiFillAppstore />,
    },
    {
        path : "services",
        link : "services",
        icon : <MdWork />,
    },
    {
        path : "messages",
        link : "messages",
        icon : <AiFillMessage />,
    },
    {
        path : "job messages",
        link : "job messages",
        icon : <RiMailStarFill />,
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