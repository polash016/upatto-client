import React from "react";
import { AnimatedCard } from "./AnimatedCard";
import img1 from "../../../public/project_image1.jpeg";
import img2 from "../../../public/project_image2.jpeg";
import img3 from "../../../public/project_image3.jpeg";

const data = [
  {
    _id: "1",
    location: "Dhaka, Bangladesh",
    client_name: "ABC Developers Ltd.",
    land_area: "5000 sqft",
    built_up_area: "3500 sqft",
    scope_of_work: "Architectural Design, Interior Design",
    details:
      "A modern residential villa with open-plan interiors and sustainable materials.",
    image: img1,
    //"https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534129/samples/landscapes/architecture-signs.jpg",
  },
  {
    _id: "2",
    location: "Chittagong, Bangladesh",
    client_name: "XYZ Constructions",
    land_area: "10,000 sqft",
    built_up_area: "7500 sqft",
    scope_of_work: "Structural Design, Landscape Design",
    details:
      "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
    image: img2,
    //"https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534129/samples/landscapes/architecture-signs.jpg",
  },
  {
    _id: "3",
    location: "Sylhet, Bangladesh",
    client_name: "Green Valley Resorts",
    land_area: "20,000 sqft",
    built_up_area: "15,000 sqft",
    scope_of_work: "Resort Planning, Interior & Exterior Design",
    details:
      "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
    image: img3,
    //"https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534129/samples/landscapes/architecture-signs.jpg",
  },
  {
    _id: "4",
    location: "Khulna, Bangladesh",
    client_name: "Riverfront Holdings",
    land_area: "8000 sqft",
    built_up_area: "6000 sqft",
    scope_of_work: "Urban Planning, Façade Design",
    details:
      "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
    image: img1,
    //"https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534129/samples/landscapes/architecture-signs.jpg",
  },
  {
    _id: "5",
    location: "Rajshahi, Bangladesh",
    client_name: "Elegant Homes Ltd.",
    land_area: "6000 sqft",
    built_up_area: "4500 sqft",
    scope_of_work: "Full Architectural Services",
    details:
      "A contemporary-style duplex with smart home integrations and sustainable building techniques.",
    image: img2,
    // "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534129/samples/landscapes/architecture-signs.jpg",
  },
  {
    _id: "6",
    location: "Rajshahi, Bangladesh",
    client_name: "Elegant Homes Ltd.",
    land_area: "6000 sqft",
    built_up_area: "4500 sqft",
    scope_of_work: "Full Architectural Services",
    details:
      "A contemporary-style duplex with smart home integrations and sustainable building techniques.",
    image: img3,
    // "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534129/samples/landscapes/architecture-signs.jpg",
  },
];

const AnimatedProjects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mx-auto text-center mb-4 bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text w-fit">
        Projects
      </h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
        {data.length > 0 ? (
          data.map((project, index) => (
            <AnimatedCard key={project._id} data={project} />
          ))
        ) : (
          <p className="text-center text-gray-500">No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default AnimatedProjects;
