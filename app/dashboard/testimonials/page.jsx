"use client";
import PageHeader from "@/app/components/PageHeader";
import { deleteTestimonial, getTestimonials } from "@/app/rtk/slices/testimonials";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import Axios from "@/app/api";

export default function page() {
  const testimonials = useSelector((state) => state.testimonials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestimonials());
    setInterval(() => {
      dispatch(getTestimonials());
    }, 100);
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDeleting = confirm("Confirm Deleting ?");
      if (confirmDeleting) {
        await Axios.delete(`/testimonials/delete/${id}`);
        dispatch(deleteTestimonial(id));
        alert("Deleting Success");
      }
    } catch (error) {
      alert("Something Wrong");
    }
  };

  return (
    <div>
      <PageHeader
        title={"testimonials"}
        add={"testimonial"}
        path={"testimonials/addTestimonial"}
      />
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1 justify-between md:px-6 px-3 py-6">
        {testimonials.map((testimonial) => (
          <div className="bg-gray-950 border-2 border-white rounded-xl p-2">
            <div className="flex items-center justify-between">
              <p className="text-primary capitalize text-xl font-bold">{testimonial.name}</p>
              <AiFillDelete className="text-red-600 md:text-2xl text-xl cursor-pointer" onClick={()=>handleDelete(testimonial._id)} />
            </div>
            <p className="text-sm text-gray-300 capitalize">{testimonial.gender}</p>
            <p className="text-gray-100">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}