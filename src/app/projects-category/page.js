"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsCategory() {
  const menuItems = [
    {
      label: "Exterior",
      to: "/projects-category/exterior",
      position: { top: "30%", left: "35%" },
    },
    {
      label: "Interior",
      to: "/projects-category/interior",
      position: { top: "40%", left: "43%" },
    },
  ];

  return (
    <div>
      <motion.div className="fixed inset-0 bg-white  flex items-center justify-center">
        <div className="relative w-full h-full">
          {menuItems.map((item, index) => (
            <motion.a
              href={item.to}
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={item.position}
              className="absolute text-xl font-bold text-gray-500 cursor-pointer hover:text-gray-600 sborder-t sborder-b w-full py-4"
            >
              <span className=" border-l-4 border-l-gray-400  px-4 py-4 ">
                {" "}
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
