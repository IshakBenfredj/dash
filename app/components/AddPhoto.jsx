"use client";
import { BiEdit, BiSolidImageAdd } from "react-icons/bi";
import Dropzone from "react-dropzone";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

export default function AddPhoto({ image, setImage }) {
  const isImage = image !== null;
  const [imageName, setImageName] = useState('')


  const convertToBase64 = (acceptedFiles) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
      setImageName(file.name);
    };

    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  };

  useEffect(()=>{
    console.log(image);
  },[image])

  return (
    <div className="relative">
      {isImage && (
        <div className="flexCenter items-stretch mb-5 gap-2">
          <Dropzone
            accept="image/*,video/*"
            multiple={false}
            onDrop={convertToBase64}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="cursor-pointer w-full">
                <input {...getInputProps()} />
                <label
                  htmlFor="image"
                  className="flex text-secondary items-center border-2 border-secondary p-2 m-0 label input gap-4"
                >
                  {!image ? (
                    <>
                      <BiSolidImageAdd size={24} />
                      <span>Add Photo</span>
                    </>
                  ) : (
                    <>
                      <BiEdit size={24} />
                      <p>{imageName}</p>
                    </>
                  )}
                </label>
              </div>
            )}
          </Dropzone>
          {image && (
            <button
              onClick={() => setImage("")}
              className="flexCenter text-red-400 border-2 border-red-400 p-2 rounded-md"
            >
              <MdDelete size={24} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}



