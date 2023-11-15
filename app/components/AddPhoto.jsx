import { BiSolidImageAdd } from "react-icons/bi";
import FileBase from 'react-file-base64'

export default function AddPhoto({image,setImage}) {

  return (
    <div className="relative">
        <label
            htmlFor="image"
            className="flex text-secondary items-center border-2 border-secondary p-2 label input gap-4"
          >
            <BiSolidImageAdd size={24} />
            <span>{ image ? 'Already Choose' : 'Add Photo' }</span>
          </label>
          <span className="absolute top-0 right-0 left-0 bottom-0 opacity-0 ">
            <FileBase 
              type="file" 
              multiple={false}
              onDone = {({base64}) => setImage(base64) }
            />
          </span>
    </div>
  )
}