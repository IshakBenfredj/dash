"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { getSkills } from "../rtk/slices/skill";
import { useDispatch } from "react-redux";
import { getPortfolio } from "../rtk/slices/portfolio";
import { getServices } from "../rtk/slices/services";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
    dispatch(getPortfolio());
    dispatch(getServices());
    setLoading(false);
  }, []);

  // useEffect(()=>{
  //     if (localStorage.getItem('admin') !== process.env.ADMIN_PASS) {
  //         if (router) {
  //             router.push('/')
  //         }
  //     }
  //     setLoading(false)
  // },[])

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="bg-gray-800 w-full p-5">
        <h1 className="capitalize text-gray-200 md:text-9xl text-lg font-black text-center l2">
          Welcome to <span className="text-secondary">dashboard</span>
        </h1>
      </div>
    );
  }
}
