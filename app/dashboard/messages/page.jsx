"use client";
import { useEffect, useState } from "react";
import Axios from "../../api";
import Link from "next/link";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import PageHeader from "@/app/components/PageHeader";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const { data } = await Axios.get("/messages");
    setMessages(data);
  };

  const handleDelete = async (id) => {
    try {
      const confirmDeleting = confirm("Confirm Deleting ?");
      if (confirmDeleting) {
        await Axios.delete(`/messages/delete/${id}`);
        getMessages();
        alert("Deleting Success");
      }
    } catch (error) {
      alert("Something Wrong");
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <PageHeader title={"Messages"} />
      {messages.map((m, index) => (
        <div className={`p-3 ${index % 2 !== 0 && "bg-gray-900"}`}>
          <div className="flex gap-3">
            <h3 className="font-bold text-white capitalize">{m.name}</h3>
            {m.isWork && (
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Link href={`mailto:${m.email}`}>{m.email}</Link>
            <span className="w-1 h-1 rounded-full bg-gray-200"></span>
            <Link href={`tel:${m.phone}`}>{m.phone}</Link>
          </div>
          <div className="flex md:items-center md:flex-row flex-col gap-3">
            <p className="text-white md:w-10/12 mt-3">{m.message}</p>
            <div className="flexCenter gap-4 md:w-2/12">
              <AiFillEye
                size={30}
                className=" text-white p-1 bg-secondary rounded-lg cursor-pointer"
              />
              <AiFillDelete
                size={30}
                className=" text-white p-1 bg-red-700 rounded-lg cursor-pointer"
                onClick={() => handleDelete(m._id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
