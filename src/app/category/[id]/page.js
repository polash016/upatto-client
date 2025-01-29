"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Khazana Dhaka",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
  },
  {
    id: 2,
    title: "Desh Hotel",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
  },
  {
    id: 3,
    title: "Arannyk Holiday Resort",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
  },
  {
    id: 4,
    title: "Western Engineering Hotel",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
  },
  {
    id: 5,
    title: "Radisson Blu, Cox's Bazar",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
  },
];

const CategoryProduct = () => {
  return (
    <div className="relative flex flex-col items-start space-y-4 p-12 mt-10 bg-gray-100 min-h-screen">
      {projects.map((project) => (
        <motion.a
          href={`/projects/${project.id}`}
          key={project.id}
          className="relative w-full group cursor-pointer py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100  transition-opacity duration-500 ease-in-out grayscale"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className="relative z-10 px-6 py-4 text-lg font-medium text-gray-800  group-hover:text-white transition-all duration-500">
            {project.title}
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default CategoryProduct;
