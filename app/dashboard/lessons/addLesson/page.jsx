"use client";
import { useState } from "react";
import AddPhoto from "@/app/components/AddPhoto";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";
import { useDispatch } from "react-redux";
import Axios from "@/app/api";
import { addLesson } from "@/app/rtk/slices/lessons";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title.length && link.length && image.length) {
      try {
        const { data } = await Axios.post("/lessons/add", {
          title,
          link,
          image,
        });

        dispatch(addLesson(data));
        alert("Lesson Adding Successfuly");
        setTitle("");
        setImage("");
        setLink("");
      } catch (error) {
        alert("Something Worg");
      }
    } else {
      alert("Some Fields Are Empty");
    }
    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col">
      <PageHeader title={"add Lesson"} />
      <div className="md:flexCenter md:px-0 px-4 add-page h-full py-28">
        <form
          onSubmit={handleSubmit}
          className="md:w-8/12 lg:w-5/12 w-full md:mt-0 mt-20 mx-auto"
        >
          <label htmlFor="name" className="label">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            className="input"
            placeholder="Lesson Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="link" className="label">
            Link
          </label>
          <input
            type="text"
            id="link"
            value={link}
            className="input"
            placeholder="Lesson Link"
            onChange={(e) => setLink(e.target.value)}
          />
          <AddPhoto image={image} setImage={setImage} />
          <Button loading={loading} title={"add project"} />
        </form>
      </div>
    </div>
  );
}