"use client"
import { useState } from "react";
import AddPhoto from "@/app/components/AddPhoto";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";
import { skillsTypes } from "@/app/constants";
import Axios from "@/app/api";
import { useDispatch } from "react-redux";
import { addSkill } from "@/app/rtk/slices/skill";

export default function page() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [type, setType] = useState([])
  const [image, setImage] = useState('')

  const dispatch = useDispatch()

  const handleType = (e) => {
    const value = e.target.value
    if (type.includes(value)) {
      const removeItem = type.filter( i => i !== value )
      setType(removeItem)
    } else {
      setType([...type, value ])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (name.length && type.length && image.length) {
      try {
        const { data } = await Axios.post('/skills/add',{name,type,image})
        dispatch(addSkill(data))
        alert('Skill Adding Successfuly')
        setName('')
        setImage('')
      } catch (error) {
        alert('Something Worg')
      }
    } else {
      alert('Some Fields Are Empty')
    }
    setLoading(false)
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
            value={name}
            className="input"
            placeholder="Skill Name"
            onChange={(e) => setName(e.target.value)}
          />
          <AddPhoto image={image} setImage={setImage} />
          <div className="grid grid-cols-2 gap-3 mb-5">
            {skillsTypes.map((skillType) => (
              <div className="flex gap-2" key={skillType}>
                <input
                  type="checkbox"
                  id={skillType}
                  className="cursor-pointer"
                  value={skillType}
                  onChange={handleType}
                />
                <label
                  htmlFor={skillType}
                  className="text-gray-200 capitalize md:text-xl text-xs cursor-pointer"
                >
                  {skillType}
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
