"use client";
import { useEffect, useState } from "react";
import Axios from "../../api";
import Link from "next/link";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const { data } = await Axios.get("/messages");
    setMessages(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="md:p-0 pt-10">
      {messages.map((m,index) => (
        <div className={`p-3 ${index %2 !== 0 && 'bg-gray-900'}`}>
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
          <p className="text-white md:w-10/12 mt-3">{m.message}</p>
        </div>
      ))}
    </div>
  );
}
