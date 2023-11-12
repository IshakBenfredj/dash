"use client"
import { useState } from "react";
import AddPhoto from "@/app/components/AddPhoto";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";

export default function page() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(title)
    console.log(details)
  }

  return (
    <div className="h-full flex flex-col">
      <PageHeader title={"add service"} />
      <div className="md:flexCenter md:px-0 px-4 add-page h-full">
        <form 
        onSubmit={handleSubmit}
        className="md:w-8/12 lg:w-5/12 w-full md:mt-0 mt-20 mx-auto">
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
          <textarea
            rows={5}
            id="details"
            className="input"
            placeholder="Service Details"
            onChange={(e) => setDetails(e.target.value)}
          />
          <Button loading={loading} title={'add service'} />
        </form>
      </div>
    </div>
  );
}