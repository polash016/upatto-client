import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4  mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, type, id, image }) => {
  const router = useRouter();
  const handleProduct = (id) => {
    router.push(`/projects/${id}`);
  };
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Card
        onClick={() => handleProduct(id)}
        className="overflow-hidden transition-all duration-300 group h-full cursor-pointer"
      >
        <CardContent className="p-0 relative h-full">
          {/* Image Container */}
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale group-hover/bento:grayscale-0 transition-all duration-500 group-hover/bento:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Overlay with Title and Type */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/bento:bg-opacity-50 transition-all duration-500 flex items-end p-4">
            <div className="text-white opacity-0 group-hover/bento:opacity-100 transition-all duration-500 w-full">
              <div className="bg-white/50 p-2 rounded">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-700">{type}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
