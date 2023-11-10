"use client"
import Link from "next/link";
import { MdAdd } from "react-icons/md";
// import { RiArrowLeftLine } from "react-icons/ri";

export default function PageHeader({ title, add, path }) {

  return (
    <div className={`md:px-6 pl-14 pr-2 md:py-3 ${add ? 'py-2' : 'py-[10px]'} flexBetween w-full bg-gray-900`}>
      <h1 className="font-bold md:text-3xl text-xl text-white capitalize">
        {title}
      </h1>
      { add && (
          <Link
            href={`${path}`}
            className="bg-primary flexCenter gap-2 md:p-3 py-1 px-2 text-white font-bold rounded-lg md:text-xl capitalize"
          >
            {/* {" "} */}
                <MdAdd size={24} />
                <span className="hidden md:block">add {add}</span>
          </Link>
        )}
    </div>
  );
}
{/* : ( */}
  {/* <RiArrowLeftLine size={24} /> */}
{/* ) */}