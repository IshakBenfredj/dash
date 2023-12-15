"use client";
import Axios from "@/app/api";
import PageHeader from "@/app/components/PageHeader";
import { deleteProject, getPortfolio } from "@/app/rtk/slices/portfolio.js";
import Link from "next/link";
import { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const portfolio = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolio());
    setInterval(() => {
      dispatch(getPortfolio());
    }, 100);
    console.log(portfolio);
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDeleting = confirm("Confirm Deleting ?");
      if (confirmDeleting) {
        await Axios.delete(`/portfolio/delete/${id}`);
        dispatch(deleteProject(id));
        alert("Deleting Success");
      }
    } catch (error) {
      alert("Something Wrong");
    }
  };

  return (
    <div>
      <PageHeader
        title={"my portfolio"}
        add={"project"}
        path={"portfolio/addProject"}
      />
      <div className="md:px-28 px-2 my-4">
        {portfolio.map((project, index) => (
          <div
            key={project._id}
            className={`flexBetween px-2 md:py-4 py-2 border-b-[1px] border-gray-300 ${
              index === 0 && "border-t-[1px]"
            }`}
          >
            <div className="flexCenter md:gap-6 gap-3">
              <img src={project.image} className="md:w-52 w-20 md:h-52 h-20 object-cover" alt="" />
              <div>
                <span className="font-bold block text-white md:text-2xl text-xs capitalize mb-5">
                  {project.title}
                </span>
                <span className="block text-gray-300 uppercase font-medium md:text-xl text-[10px]">
                  {project.type}
                </span>
              </div>
            </div>
            <div className="flexCenter md:gap-3 gap-2">
              <Link
                href={project.link}
                target="_blank"
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all"
              >
                <FaExternalLinkAlt
                  size={32}
                  className="text-white cursor-pointer md:block hidden"
                />
                <FaExternalLinkAlt
                  size={16}
                  className="text-white cursor-pointer md:hidden block"
                />
              </Link>
              <div className="p-2 rounded-lg bg-green-600 hover:bg-green-500 transition-all">
                <AiFillEdit
                  size={34}
                  className="text-white cursor-pointer md:block hidden"
                />
                <AiFillEdit
                  size={16}
                  className="text-white cursor-pointer md:hidden block"
                />
              </div>
              <div
                className="p-2 rounded-lg bg-red-600 hover:bg-red-500 transition-all"
                onClick={() => handleDelete(project._id)}
              >
                <AiFillDelete
                  size={34}
                  className="text-white cursor-pointer md:block hidden"
                />
                <AiFillDelete
                  size={16}
                  className="text-white cursor-pointer md:hidden block"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}