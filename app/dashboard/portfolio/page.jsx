"use client";
import Axios from "@/app/api";
import PageHeader from "@/app/components/PageHeader";
import { deleteProject, getPortfolio } from "@/app/rtk/slices/portfolio.js";
import Link from "next/link";
import { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
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
            <div className="flexCenter gap-6">
              <img src={project.image} className="md:w-52 w-20" alt="" />
              <p className="font-bold text-white md:text-2xl text-xs capitalize">
                {project.name}
              </p>
            </div>
            <div className="flexCenter gap-3">
              <Link href={project.link}
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all"
                onClick={() => handleDelete(project._id)}
              >
                <FaLink 
                  size={32}
                  className="text-white cursor-pointer md:block hidden"
                />
                <FaLink 
                  size={16}
                  className="text-white cursor-pointer md:hidden block"
                />
              </Link>
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
              <div
                className="p-2 rounded-lg bg-green-600 hover:bg-green-500 transition-all"
                onClick={() => handleDelete(project._id)}
              >
                <AiFillEdit
                  size={34}
                  className="text-white cursor-pointer md:block hidden"
                />
                <AiFillEdit
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
