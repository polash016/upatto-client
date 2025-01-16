// components/Gallery.js
"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { useRouter } from "next/navigation";

const products = [
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Elegant Living Room",
    type: "Interior Design",
    size: "large", // Add a size property to control card size
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Cozy Bedroom",
    type: "Bedroom Design",
    size: "small",
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
    title: "Modern Kitchen",
    type: "Kitchen Design",
    size: "medium",
  },

  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1711534149/samples/balloons.jpg",
    title: "Minimalist Office",
    type: "Office Design",
    size: "medium",
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Luxury Bathroom",
    type: "Bathroom Design",
    size: "small",
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Rustic Dining Room",
    type: "Dining Room Design",
    size: "large",
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Contemporary Lounge",
    type: "Lounge Design",
    size: "medium",
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Chic Balcony",
    type: "Outdoor Design",
    size: "small",
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Vintage Study Room",
    type: "Study Room Design",
    size: "medium",
  },
  {
    image:
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    title: "Modern Hallway",
    type: "Hallway Design",
    size: "large",
  },
];

export default function ImageGallery() {
  const router = useRouter();
  const handleProduct = (id) => {
    router.push(`/product/${id}`);
  };
  return (
    <section className="py-12 bg-gray-50 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              onClick={() => handleProduct(product.type)}
              key={index}
              className={`overflow-hidden transition-all duration-300 group ${
                product.size === "large"
                  ? "md:col-span-2 lg:col-span-3 lg:row-span-3"
                  : product.size === "medium"
                  ? "md:col-span-1 lg:col-span-1 lg:row-span-1"
                  : product.size === "small"
                  ? "md:col-span-1 lg:col-span-1 lg:row-span-1"
                  : "md:col-span-1 lg:col-span-1"
              }`}
            >
              <CardContent className="p-0 relative">
                {/* Image Container */}
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 4}
                  />
                </div>

                {/* Overlay with Title and Type */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 w-full">
                    <div className="bg-white/50 p-2 rounded">
                      <h3 className="text-lg font-bold text-gray-900">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-700">{product.type}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
