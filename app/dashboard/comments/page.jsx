"use client";
import Axios from "@/app/api";
import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function page() {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const { data } = await Axios.get("/comments");
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  const formatDate = (timestamp) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      new Date(timestamp)
    );
    return formattedDate;
  };

  const handleDelete = async (id) => {
    try {
      const confirmDeleting = confirm("Confirm Deleting ?");
      if (confirmDeleting) {
        await Axios.delete(`/comments/delete/${id}`);
        getComments();
        alert("Deleting Success");
      }
    } catch (error) {
      alert("Something Wrong");
    }
  };

  return (
    <div>
      <PageHeader title={"Comments"} />
      {comments.map((comment, index) => (
        <div
          className={`p-3 pb-2 ${index % 2 === 0 && "bg-gray-900"}`}
          key={comment._id}
        >
          <div className="flex flex-col">
            <h3 className="font-bold capitalize text-white">{comment.name}</h3>
            <div className="flex items-center text-sm gap-3 text-gray-400">
              <Link href={`mailto:${comment.email}`}>{comment.email}</Link>
              <span className="w-1 h-1 rounded-full bg-gray-200"></span>
              <p>{formatDate(comment.createdAt)}</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col">
            <p className="w-4/5 text-gray-200">{comment.comment}</p>
            <dir className="flexCenter my-0 mt-2 md:mt-0">
              <AiFillDelete
                size={30}
                className=" text-white p-1 bg-red-700 rounded-lg md:w-fit w-2/3 mx-auto cursor-pointer"
                onClick={() => handleDelete(comment._id)}
              />
            </dir>
          </div>
        </div>
      ))}
    </div>
  );
}
