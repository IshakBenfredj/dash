"use client";
import { useState } from "react";
import AddPhoto from "@/app/components/AddPhoto";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";
import { addProject } from "@/app/rtk/slices/portfolio";
import { useDispatch } from "react-redux";
import Axios from "@/app/api";
import axios from "axios";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const projectsTypes = ["web", "mobile", "desktop"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title.length && link.length && type.length && image.length && details.length) {
      try {
        const { data } = await Axios.post("/portfolio/add", {
          title,
          link,
          type,
          details,
          image,
        })
        
        dispatch(addProject(data));
        alert("Project Adding Successfuly");
        setTitle("");
        setImage("");
        setLink("");
        setType("");
        setDetails("");
      } catch (error) {
        alert("Something Worg");
      }
    } else {
      alert("Some Fields Are Empty");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col overflow-y-auto">
      <PageHeader title={"add project"} />
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
            placeholder="Project Title"
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
            placeholder="Project Link"
            onChange={(e) => setLink(e.target.value)}
          />
          <AddPhoto image={image} setImage={setImage} />
          <label htmlFor="details" className="label">
            details
          </label>
          <textarea
            rows={5}
            id="details"
            className="input"
            value={details}
            placeholder="Project Details"
            onChange={(e) => setDetails(e.target.value)}
          />
          <div className="grid grid-cols-3 gap-3 mb-5">
            {projectsTypes.map((type) => (
              <div className="flex gap-2" key={type}>
                <input
                  type="radio"
                  value={type}
                  name="type"
                  id={type}
                  className="cursor-pointer"
                  onChange={(e) => setType(e.target.value)}
                />
                <label
                  htmlFor={type}
                  className="text-gray-200 capitalize md:text-xl text-xs cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
          <Button loading={loading} title={"add project"} />
        </form>
      </div>
    </div>
  );
}



