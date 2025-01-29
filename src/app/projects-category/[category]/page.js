"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

export default function Category() {
  const { category } = useParams();
  console.log(category);
  const menuItems = [
    {
      id: 1111,
      label: "Home",
      position: { top: "30%", left: "35%" },
    },
    { id: 22334, label: "Commercial", position: { top: "40%", left: "43%" } },
    {
      id: 39422,
      label: "Office",
      position: { top: "53%", left: "40%" },
    },
  ];

  return (
    <div>
      <motion.div className="fixed inset-0 bg-white  flex items-center justify-center">
        <div className="relative w-full h-full">
          {menuItems.map((item, index) => (
            <motion.a
              href={`/category/${item.id}`}
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={item.position}
              className="absolute text-xl font-bold text-gray-500 cursor-pointer hover:text-gray-600 sborder-t sborder-b w-full py-12"
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
