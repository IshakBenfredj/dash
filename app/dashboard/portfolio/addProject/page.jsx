"use client";
import { useState } from "react";
import AddPhoto from "@/app/components/AddPhoto";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const projectsTypes = ["web", "mobile", "desktop"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(name);
    console.log(type);
    console.log(link);
  };

  return (
    <div className="h-full flex flex-col">
      <PageHeader title={"add project"} />
      <div className="md:flexCenter md:px-0 px-4 add-page h-full">
        <form
          onSubmit={handleSubmit}
          className="md:w-8/12 lg:w-5/12 w-full md:mt-0 mt-20 mx-auto"
        >
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input"
            placeholder="Project Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="link" className="label">
            Link
          </label>
          <input
            type="text"
            id="link"
            className="input"
            placeholder="Project Link"
            onChange={(e) => setLink(e.target.value)}
          />
          <AddPhoto image={image} setImage={setImage} />
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