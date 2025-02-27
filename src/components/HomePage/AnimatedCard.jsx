"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function AnimatedCard({ data }) {
  const handleProject = (id) => {
    console.log("Project ID:", id);
  };
  return (
    <CardContainer
      onClick={() => handleProject(data?._id)}
      className="cursor-pointer"
    >
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] fborder-black/[0.1] w-auto sm:w-[30rem] h-auto rdounded-xl p-6 dborder  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={data?.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col items-center mt-6">
          <CardItem className="rounded-xl text-lg font-semibold dark:text-white">
            {data?.client_name}
          </CardItem>
          <CardItem className=" rounded-xl text-xs font-normal dark:text-white">
            {data?.location}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
