"use client";
import { useState } from "react";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";
import Axios from "@/app/api";
import { useDispatch } from "react-redux";
import { addTestimonial } from "@/app/rtk/slices/testimonials";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (name.length && gender.length && text.length) {
      try {
        const { data } = await Axios.post("/testimonials/add", {
          name,
          gender,
          text,
        });
        dispatch(addTestimonial(data));
        alert("Testimonial Adding Successfuly");
        setName("");
        setText("");
        setGender("");
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
      <PageHeader title={"add testimonial"} />
      <div className="md:flexCenter md:px-0 px-4 add-page h-full">
        <form
          onSubmit={handleSubmit}
          className="md:w-8/12 lg:w-5/12 w-full md:mt-0 mt-20 mx-auto"
        >
          <label htmlFor="testimonialName" className="label">
            Name
          </label>
          <input
            type="text"
            id="testimonialName"
            value={name}
            className="input"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="testimonial" className="label">
            testimonial
          </label>
          <textarea
            rows={5}
            id="testimonial"
            className="input"
            placeholder="Testimonial"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="flex gap-2" key="male">
              <input
                type="radio"
                id="male"
                value="male"
                name="gender"
                className="cursor-pointer"
                onChange={(e) => setGender(e.target.value)}
              />
              <label
                htmlFor="male"
                className="text-gray-200 capitalize md:text-xl text-xs cursor-pointer"
              >
                male
              </label>
            </div>
            <div className="flex gap-2" key="female">
              <input
                type="radio"
                id="female"
                value="female"
                name="gender"
                className="cursor-pointer"
                onChange={(e) => setGender(e.target.value)}
              />
              <label
                htmlFor="female"
                className="text-gray-200 capitalize md:text-xl text-xs cursor-pointer"
              >
                female
              </label>
            </div>
          </div>
          <Button loading={loading} title={"add skill"} />
        </form>
      </div>
    </div>
  );
}
