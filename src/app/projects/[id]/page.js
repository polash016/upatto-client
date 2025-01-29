import Image from "next/image";

export default function ProjectDetails() {
  const projectDetails = {
    title: "Desh Hotel",
    location: "Banani, Dhaka",
    client: "Desh Group",
    landArea: "678 Sqm",
    builtupArea: "8800 Sqm",
    scope: "Comprehensive Consultancy",
    brief:
      "The form's dark colour and subtle shape are designed to complement the high urban surroundings. Its facade features a composition of fins and two-tone colour, and its positioning of different planes to achieve a layering effect. The building caters to 48 rooms serviced apartment with all facilities.",
    images: [
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
      "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
    ],
    relatedProjects: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
        title: "Project 1",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
        title: "Project 2",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
        title: "Project 3",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/daa4x7pfh/image/upload/v1735656102/ndlbyzrrnhkeqrzl59jr.jpg",
        title: "Project 4",
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        {projectDetails.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Project Details (Fixed) */}
        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Location:</span>{" "}
            {projectDetails.location}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Client:</span>{" "}
            {projectDetails.client}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Land Area:</span>{" "}
            {projectDetails.landArea}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Built-up Area:</span>{" "}
            {projectDetails.builtupArea}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Scope of Work:</span>{" "}
            {projectDetails.scope}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Brief:</span> {projectDetails.brief}
          </p>
        </div>

        {/* Right Column: Images (Scrollable) */}
        <div className="space-y-4 h-[80vh] overflow-y-auto scrollbar-hide">
          {projectDetails.images.map((image, index) => (
            <div key={index} className="mb-4">
              <Image
                width={600}
                height={400}
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Related Projects */}
      <div className="flex  justify-center">
        <div>
          <h2 className="text-2xl my-4 font-bold text-gray-800 mt-12 mb-4 text-center">
            Related Projects
          </h2>
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hide cursor-pointer">
            {projectDetails.relatedProjects.map((project) => (
              <div
                key={project.id}
                className="w-48 flex-shrink-0 rounded-lg shadow-lg"
              >
                <Image
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="bg-white p-2 rounded-b-lg text-center">
                  <p className="text-sm font-semibold text-gray-700">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
