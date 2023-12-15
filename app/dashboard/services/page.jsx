"use client";
import Axios from "@/app/api";
import PageHeader from "@/app/components/PageHeader";
import { deleteService, getServices } from "@/app/rtk/slices/services";
import { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const services = useSelector((state) => state.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
    setInterval(() => {
      dispatch(getServices());
    }, 100);
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDeleting = confirm("Confirm Deleting ?");
      if (confirmDeleting) {
        await Axios.delete(`/services/delete/${id}`);
        dispatch(deleteService(id));
        alert("Deleting Success");
      }
    } catch (error) {
      alert("Something Wrong");
    }
  };

  return (
    <div>
      <PageHeader
        title={"my services"}
        add={"service"}
        path={"services/addService"}
      />
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around items-start md:p-5 p-3">
        {services.map((service) => (
          <div 
          className="p-3 pt-6 rounded-xl border-2 border-gray-300 bg-gray-900 overflow-hidden relative before:absolute before:w-1/2
           before:h-4 before:rounded-full before:mx-auto before:bg-primary before:-top-2 before:left-1/2 before:-translate-x-1/2">
            <img className="md:w-20 w-14 mx-auto" src={service.image} alt="" />
            <h4 className="font-bold md:text-2xl text-xl text-primary text-center my-3">
              {service.title}
            </h4>
            <p className="text-center md:text-lg text-gray-300">
              {service.details.slice(0,100)} ...
            </p>
            <div className="flexCenter gap-3 mt-4">
              <div className="p-1 flexCenter w-full rounded-lg border-2 border-green-600 bg-green-600 hover:bg-green-500 transition-all">
                <AiFillEdit
                  size={24}
                  className="text-white cursor-pointer md:block hidden"
                />
                <AiFillEdit
                  size={16}
                  className="text-white cursor-pointer md:hidden block"
                />
              </div>
              <div
                className="p-1 flexCenter w-full rounded-lg border-2 border-red-500 hover:bg-red-500 transition-all"
                onClick={() => handleDelete(service._id)}
              >
                <AiFillDelete
                  size={24}
                  className="cursor-pointer md:block hidden text-red-500 hover:text-white"
                />
                <AiFillDelete
                  size={16}
                  className="cursor-pointer md:hidden block text-red-500 hover:text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
