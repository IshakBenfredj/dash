'use client'
import { useEffect, useState } from "react";
import Axios from "../../api";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const { data } = await Axios.get("/messages");
    setMessages(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return <div>
    {
        messages.map(m => (<p>{m.message}</p>))
    }
  </div>;
}