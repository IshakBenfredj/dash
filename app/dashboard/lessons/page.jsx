"use client";
import Axios from "@/app/api";
import PageHeader from "@/app/components/PageHeader";
import { deleteLesson, getLessons } from "@/app/rtk/slices/lessons";
import Link from "next/link";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const lessons = useSelector((state) => state.lessons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLessons());
    setInterval(() => {
      dispatch(getLessons());
    }, 100);
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDeleting = confirm("Confirm Deleting ?");
      if (confirmDeleting) {
        await Axios.delete(`/lessons/delete/${id}`);
        dispatch(deleteLesson(id));
        alert("Deleting Success");
      }
    } catch (error) {
      alert("Something Wrong");
    }
  };

  return (
    <div>
      <PageHeader title={"lessons"} add={"lesson"} path={"lessons/addLesson"} />
      <div className="md:px-28 px-2 my-4">
        {lessons.map((lesson, index) => (
          <div
            key={lesson._id}
            className={`flexBetween px-2 md:py-4 py-2 border-b-[1px] border-gray-300 ${
              index === 0 && "border-t-[1px]"
            }`}
          >
            <div className="flexCenter md:gap-6 gap-3">
              <img
                src={lesson.image}
                className="md:w-14 w-10"
                alt=""
              />
              <p className="font-bold block text-white md:text-2xl text-xs capitalize">
                {lesson.title}
              </p>
            </div>
            <div className="flexCenter md:gap-3 gap-2">
              <Link
                href={lesson.link}
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
              <div
                className="p-2 rounded-lg bg-red-600 hover:bg-red-500 transition-all"
                onClick={() => handleDelete(lesson._id)}
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
