"use client";
import PageHeader from "@/app/components/PageHeader";
import { getPortfolio } from "@/app/rtk/slices/portfolio.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const portfolio = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolio());
    setInterval(() => {
      dispatch(getPortfolio());
    }, 100);
    console.log(portfolio);
  }, []);

  return (
    <div>
      <PageHeader
        title={"my portfolio"}
        add={"project"}
        path={"portfolio/addProject"}
      />
      <div>
        {portfolio.map((p) => (
         <>
         <p className="text-white">{p.name}</p>
          <img className="w-10" src={p.image} alt="" />
         </> 
        ))}
      </div>
    </div>
  );
}
