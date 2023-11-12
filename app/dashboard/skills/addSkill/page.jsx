"use client"
import { useState } from "react";
import AddPhoto from "@/app/components/AddPhoto";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";
import { skillsTypes } from "@/app/constants";

export default function page() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [type, setType] = useState([])
  const [image, setImage] = useState('')

  const handleType = (e) => {
    const value = e.target.value
    if (type.includes(value)) {
      const removeItem = type.filter( i => i !== value )
      setType(removeItem)
    } else {
      setType([...type, value ])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(name)
    console.log(type)
  }

  return (
    <div className="h-full flex flex-col">
      <PageHeader title={"add skill"} />
      <div className="md:flexCenter md:px-0 px-4 add-page h-full">
        <form 
        onSubmit={handleSubmit}
        className="md:w-8/12 lg:w-5/12 w-full md:mt-0 mt-20 mx-auto">
          <label htmlFor="skillName" className="label">
            Skill Name
          </label>
          <input
            type="text"
            id="skillName"
            className="input"
            placeholder="Skill Name"
            onChange={(e) => setName(e.target.value)}
          />
          <AddPhoto image={image} setImage={setImage} />
          <div className="grid grid-cols-2 gap-3 mb-5">
            {skillsTypes.map((type) => (
              <div className="flex gap-2" key={type}>
                <input
                  type="checkbox"
                  value={type}
                  id={type}
                  className="cursor-pointer"
                  onChange={handleType}
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
          <Button loading={loading} title={'add skill'} />
        </form>
      </div>
    </div>
  );
}
