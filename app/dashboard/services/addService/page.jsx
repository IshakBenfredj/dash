"use client";
import { useState } from "react";
import AddPhoto from "@/app/components/AddPhoto";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";
import Axios from "@/app/api";
import { useDispatch } from "react-redux";
import { addService } from "@/app/rtk/slices/services";
import TextArea from "@/app/components/TextArea";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title.length && details.length && image.length) {
      try {
        const { data } = await Axios.post("/services/add", {
          title,
          details,
          image,
        });

        dispatch(addService(data));
        alert("Service Adding Successfuly");
        setTitle("");
        setImage("");
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
    <div className="flex flex-col">
      <PageHeader title={"add service"} />
      <div className="md:flexCenter md:px-0 px-4 bg-gray-800 add-page py-16">
        <form
          onSubmit={handleSubmit}
          className="md:w-8/12 lg:w-5/12 w-full md:mt-0 mt-20 mx-auto"
        >
          <label htmlFor="title" className="label">
            title
          </label>
          <input
            type="text"
            id="title"
            className="input"
            placeholder="Service Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <AddPhoto image={image} setImage={setImage} />
          <label htmlFor="details" className="label">
            details
          </label>
          <TextArea details={details} setDetails={setDetails} />
          <Button loading={loading} title={"add service"} />
        </form>
      </div>
    </div>
  );
}
