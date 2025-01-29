// import React from "react";
// import { BentoGrid } from "./BentoGrid";
// import { BentoGridItem } from "./BentoGridItem";

// export function GalleryDemo() {
//   const products = [
//     {
//       image:
//         "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
//       title: "Elegant Living Room",
//       type: "Interior Design",
//       size: "large",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
//       title: "Cozy Bedroom",
//       type: "Bedroom Design",
//       size: "small",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
//       title: "Modern Kitchen",
//       type: "Kitchen Design",
//       size: "medium",
//     },
//     // Add more items as needed
//   ];

//   return (
//     <BentoGrid className="max-w-4xl mx-auto">
//       {products.map((product, i) => (
//         <BentoGridItem
//           key={i}
//           title={product.title}
//           type={product.type}
//           image={product.image}
//           size={product.size}
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

import React from "react";
import { BentoGrid, BentoGridItem } from "./Bento";

export function GalleryDemo() {
  return (
    <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          type={item.type}
          id={item.id}
          image={item.image}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => <div className=""></div>;
const itemsssss = [
  {
    title: "The Dawn of Innovation",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "The Digital Revolution",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
];

const items = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Elegant Living Room",
    type: "Interior Design",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Cozy Bedroom",
    type: "Bedroom Design",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
    title: "Modern Kitchen",
    type: "Kitchen Design",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
    title: "Minimalist Office",
    type: "Office Design",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Luxury Bathroom",
    type: "Bathroom Design",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Rustic Dining Room",
    type: "Dining Room Design",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Contemporary Lounge",
    type: "Lounge Design",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Chic Balcony",
    type: "Outdoor Design",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Vintage Study Room",
    type: "Study Room Design",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Modern Hallway",
    type: "Hallway Design",
  },
];
