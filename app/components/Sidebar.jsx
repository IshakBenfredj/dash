"use client";
import Link from "next/link";
import { navLinks } from "../constants";
import Logo from "./Logo";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { useRouter, usePathname  } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const logOut = () => {
    if (localStorage.getItem("admin")) {
      localStorage.removeItem("admin");
      router.push("/");
    }
  };

  return (
    <div
      className={`sidebar fixed md:relative transition-all bg-gray-950 md:w-80 w-3/4 min-h-screen overflow-y-auto p-3 z-50 ${
        !openSidebar && "-translate-x-full"
      } md:translate-x-0`}
    >
      <Logo />
      <div
        onClick={() => setOpenSidebar(!openSidebar)}
        className="text-white text-2xl absolute top-0 -right-12 min-w-max min-h-max p-3 flexCenter bg-gray-950 cursor-pointer md:hidden"
      >
        { openSidebar ? <AiOutlineClose /> : <HiMenuAlt2 />}
      </div>
      <ul>
        {navLinks.map((link) => {
          return (
            <li
              key={link.path}
              className={
                `text-gray-200 text-lg font-medium whitespace-nowrap my-3 transition-all capitalize rounded-md 
                hover:bg-white hover:text-gray-900 ${pathname === `/dashboard${link.path}` && 'bg-white text-gray-900'}`
              }
              onClick={() => setOpenSidebar(false)}
            >
              <Link
                href={`/dashboard/${
                  link.path !== "dashboard" ? link.path : ""
                }`}
                className="flex items-center gap-3 p-3"
              >
                {link.icon}
                {link.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={logOut}
        className="flex w-full items-center gap-3 text-red-500 text-lg cursor-pointer font-medium whitespace-nowrap my-3 p-3 transition-all capitalize rounded-md hover:bg-red-500 hover:text-white"
      >
        <BiLogOutCircle />
        logOut
      </button>
    </div>
  );
}
