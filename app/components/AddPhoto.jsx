import { BiSolidImageAdd } from "react-icons/bi";

export default function AddPhoto({image,setImage}) {
  return (
    <>
        <label
            htmlFor="image"
            className="flex text-secondary items-center border-2 border-secondary p-2 label input gap-4"
          >
            <BiSolidImageAdd size={24} />
            <span>Add Photo</span>
          </label>
          <input type="file" name="image" id="image" className="hidden" />
    </>
  )
}
