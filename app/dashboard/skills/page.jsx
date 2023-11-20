"use client";
import Axios from "@/app/api";
import PageHeader from "@/app/components/PageHeader";
import Loading from "@/app/loading";
import { deleteSkill, getSkills } from "@/app/rtk/slices/skill";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const skills = useSelector((state) =>state.skills);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSkills());
    },[]);

  const handleDelete = async (id) => {
    try {
      const confirmDeleting = confirm("Confirm Deleting ?");
      if (confirmDeleting) {
        await Axios.delete(`/skills/delete/${id}`);
        dispatch(deleteSkill(id));
        alert("Deleting Success");
      }
    } catch (error) {
      alert("Something Wrong");
    }
  };

  return (
    <div>
      <PageHeader title={"my skills"} add={"skill"} path={"skills/addSkill"} />
      <div className="md:px-28 px-2 my-4">
        {skills.map((skill, index) => {
          return (
            <div
              key={skill._id}
              className={`flexBetween px-2 md:py-4 py-2 border-b-[1px] border-gray-300 ${
                index === 0 && "border-t-[1px]"
              }`}
            >
              <div className="flexCenter gap-6">
                <img src={skill.image} className="md:w-14 w-10" alt="" />
                <p className="font-bold text-white md:text-2xl capitalize">{skill.name}</p>
              </div>
              <div
                className="p-2 rounded-lg bg-red-600 hover:bg-red-500 transition-all"
                onClick={() => handleDelete(skill._id)}
              >
                <AiFillDelete
                  size={34}
                  className="text-white cursor-pointer md:block hidden"
                />
                <AiFillDelete
                  size={24}
                  className="text-white cursor-pointer md:hidden block"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
