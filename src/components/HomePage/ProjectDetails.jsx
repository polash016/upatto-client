import { AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const sampleProjects = [
  {
    _id: "project1",
    title: "Nazim Residence",
    subtitle: "Multifamily House",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project1",
  },
  {
    _id: "project2",
    title: "Asset Untamed",
    subtitle: "Commercial",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project2",
  },
  {
    _id: "project3",
    title: "Radison Red",
    subtitle: "Hotels & Resorts",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project3",
  },
  {
    _id: "project4",
    title: "Mutual Khan Tower",
    subtitle: "Multifamily House",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project4",
  },
  {
    _id: "project5",
    title: "Jams Ariyana Loft",
    subtitle: "Multifamily House",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project5",
  },
  {
    _id: "project6",
    title: "Moinah's Bari",
    subtitle: "Single Family House",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project6",
  },
  {
    _id: "project7",
    title: "ADN HQ",
    subtitle: "Commercial",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project7",
  },
  {
    _id: "project8",
    title: "Radiant Head Office",
    subtitle: "Commercial",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project8",
  },
  {
    _id: "project9",
    title: "Khazana Dhaka",
    subtitle: "Hotels & Resorts",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project9",
  },
];

const ProjectDetails = ({ selectedProject, setSelectedProject }) => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const res = sampleProjects.map((item) => item._id === selectedProject);
    setProjectData(res);
  }, [selectedProject]);

  return (
    <AnimatePresence>
      {selectedProject && projectData && (
        <Dialog open={!!selectedProject} onOpenChange={setSelectedProject}>
          <DialogContent className="w-full min-h-screen max-w-6xl flex flex-col overflow-y-auto bg-gray-50">
            <DialogHeader>
              <DialogTitle>{projectData.title}</DialogTitle>
              <DialogClose asChild>
                <Button variant="ghost" className="absolute top-2 right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
              </DialogClose>
            </DialogHeader>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 px-5 my-3">
                <p>
                  <span className="font-bold text-gray-900">Location:</span>{" "}
                  {projectData.location}
                </p>
                <p>
                  <span className="font-bold text-gray-900">Client:</span>{" "}
                  {projectData.client}
                </p>
                <p>
                  <span className="font-bold text-gray-900">Land Area:</span>{" "}
                  {projectData.landArea}
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    Built-up Area:
                  </span>{" "}
                  {projectData.builtUpArea}
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    Scope of work:
                  </span>{" "}
                  {projectData.scopeOfWork}
                </p>
                <p>
                  <span className="font-bold text-gray-900">Brief:</span>{" "}
                  {projectData.brief}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-5 my-3 flex flex-col">
                {projectData.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${projectData.title} ${index}`}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "300px", display: "block" }}
                  />
                ))}
              </div>
            </div>
            {projectData.relatedProjects.length > 0 && (
              <div className="p-5 flex flex-col">
                <h2 className="text-xl font-bold mb-2">Related Project</h2>
                <div className="flex items-center justify-center gap-4">
                  {projectData.relatedProjects.map((relatedProject, index) => (
                    <img
                      src={relatedProject}
                      key={index}
                      alt={`related ${relatedProject} ${index}`}
                      className="w-1/4 h-auto object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
