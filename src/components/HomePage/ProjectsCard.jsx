import Image from "next/image";
import React, { useEffect, useState } from "react";
import project1 from '../../../public/project1.jpeg';
import project2 from '../../../public/project2.jpeg';
import project3 from '../../../public/project3.jpeg';
import project4 from '../../../public/project4.jpeg';
import project5 from '../../../public/project5.jpeg';
import project6 from '../../../public/project6.jpeg';
import project7 from '../../../public/project7.jpeg';
import Slider from "./Slider";
import {motion} from 'framer-motion';

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
    image: project1,
    icon: "🏠",
    slides: [
      {
        image: project1,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, facere? Sit ea facere sapiente quam commodi consequuntur odit, officiis aut voluptatem fugiat assumenda iste alias quisquam! Labore sequi hic vitae quas ex excepturi provident. Id nostrum atque excepturi, fugiat sapiente veniam, itaque dolorum laudantium perferendis corporis eos dolor quae nobis.",
      },
      {
        image: project2,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, facere? Sit ea facere sapiente quam commodi consequuntur odit, officiis aut voluptatem fugiat assumenda iste alias quisquam! Labore sequi hic vitae quas ex excepturi provident. Id nostrum atque excepturi, fugiat sapiente veniam, itaque dolorum laudantium perferendis corporis eos dolor quae nobis.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
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
    image: project2,
    icon: "🏢",
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
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
    image: project3,
    icon: "🌴",
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
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
    image: project4,
    icon: "🏙️",
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
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
    image: project5,
    icon: "🏡",
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "6",
    location: "Barisal, Bangladesh",
    client_name: "Blue Horizon Ltd.",
    land_area: "7000 sqft",
    built_up_area: "5000 sqft",
    scope_of_work: "Residential Design, Exterior Design",
    details:
      "A coastal home designed to withstand harsh weather while offering stunning ocean views.",
    image: project6,
    icon: "🌊",
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "7",
    location: "Rangpur, Bangladesh",
    client_name: "Northern Constructions",
    land_area: "9000 sqft",
    built_up_area: "6500 sqft",
    scope_of_work: "Commercial Design, Structural Engineering",
    details:
      "A shopping mall with modern amenities and eco-friendly design features.",
    image: project7,
    icon: "🛍️",
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "8",
    location: "Mymensingh, Bangladesh",
    client_name: "Green Fields Ltd.",
    land_area: "12,000 sqft",
    built_up_area: "9000 sqft",
    scope_of_work: "Agricultural Planning, Landscape Design",
    details:
      "A farmhouse with integrated agricultural facilities and modern living spaces.",
    image: project1,
    icon: "🚜", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "9",
    location: "Comilla, Bangladesh",
    client_name: "Heritage Homes",
    land_area: "5500 sqft",
    built_up_area: "4000 sqft",
    scope_of_work: "Restoration, Interior Design",
    details:
      "A restored heritage home blending traditional architecture with modern comforts.",
    image: project2,
    icon: "🏛️", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "10",
    location: "Narayanganj, Bangladesh",
    client_name: "Riverfront Developers",
    land_area: "8500 sqft",
    built_up_area: "6000 sqft",
    scope_of_work: "Urban Development, Façade Design",
    details:
      "A riverside residential complex with modern amenities and scenic views.",
    image: project3,
    icon: "🌉", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "11",
    location: "Gazipur, Bangladesh",
    client_name: "Skyline Constructions",
    land_area: "15,000 sqft",
    built_up_area: "10,000 sqft",
    scope_of_work: "High-Rise Design, Structural Engineering",
    details:
      "A high-rise apartment building with state-of-the-art facilities and panoramic city views.",
    image: project4,
    icon: "🏙️", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "12",
    location: "Tangail, Bangladesh",
    client_name: "Green Valley Homes",
    land_area: "6000 sqft",
    built_up_area: "4500 sqft",
    scope_of_work: "Residential Design, Landscape Design",
    details:
      "A family home surrounded by lush greenery and designed for sustainable living.",
    image: project5,
    icon: "🌳", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "13",
    location: "Jessore, Bangladesh",
    client_name: "Golden Homes Ltd.",
    land_area: "7000 sqft",
    built_up_area: "5000 sqft",
    scope_of_work: "Residential Design, Interior Design",
    details:
      "A modern family home with spacious interiors and energy-efficient features.",
    image: project6,
    icon: "🏠", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "14",
    location: "Bogra, Bangladesh",
    client_name: "Northern Developers",
    land_area: "10,000 sqft",
    built_up_area: "7500 sqft",
    scope_of_work: "Commercial Design, Urban Planning",
    details:
      "A mixed-use development with retail spaces, offices, and residential units.",
    image: project7,
    icon: "🏬",
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "15",
    location: "Pabna, Bangladesh",
    client_name: "Green Earth Ltd.",
    land_area: "12,000 sqft",
    built_up_area: "9000 sqft",
    scope_of_work: "Sustainable Design, Landscape Architecture",
    details:
      "An eco-friendly residential complex with green roofs and solar panels.",
    image: project1,
    icon: "🌞", // Sun icon
  },
  {
    _id: "16",
    location: "Kushtia, Bangladesh",
    client_name: "Heritage Constructions",
    land_area: "8000 sqft",
    built_up_area: "6000 sqft",
    scope_of_work: "Restoration, Interior Design",
    details:
      "A restored heritage building converted into a boutique hotel with modern amenities.",
    image: project2,
    icon: "🏨", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "17",
    location: "Faridpur, Bangladesh",
    client_name: "Riverfront Developers",
    land_area: "9000 sqft",
    built_up_area: "6500 sqft",
    scope_of_work: "Urban Development, Façade Design",
    details:
      "A riverside residential complex with modern amenities and scenic views.",
    image: project3,
    icon: "🌊", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "18",
    location: "Dinajpur, Bangladesh",
    client_name: "Northern Homes Ltd.",
    land_area: "11,000 sqft",
    built_up_area: "8000 sqft",
    scope_of_work: "Residential Design, Landscape Design",
    details:
      "A family home surrounded by lush greenery and designed for sustainable living.",
    image: project4,
    icon: "🌳", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "19",
    location: "Noakhali, Bangladesh",
    client_name: "Coastal Developers",
    land_area: "13,000 sqft",
    built_up_area: "9500 sqft",
    scope_of_work: "Coastal Design, Structural Engineering",
    details:
      "A beachfront villa designed to withstand coastal weather while offering stunning ocean views.",
    image: project5,
    icon: "🏖️", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
  {
    _id: "20",
    location: "Satkhira, Bangladesh",
    client_name: "Green Valley Resorts",
    land_area: "14,000 sqft",
    built_up_area: "10,000 sqft",
    scope_of_work: "Resort Planning, Interior & Exterior Design",
    details:
      "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
    image: project6,
    icon: "🌴", 
    slides: [
      {
        image: project1,
        text: "A modern residential villa with open-plan interiors and sustainable materials.",
      },
      {
        image: project2,
        text: "A commercial complex featuring energy-efficient office spaces and rooftop gardens.",
      },
      {
        image: project3,
        text: "A luxury eco-resort with a fusion of traditional and contemporary architectural elements.",
      },
      {
        image: project4,
        text: "A mixed-use development with modern apartments, retail spaces, and scenic river views.",
      }
    ]
  },
];




const ProjectsCard = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [imageHeight, setImageHeight] = useState(1000);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (!isScrolling) setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  const handleImageLoad = (event) => {
    const naturalHeight = event.target.naturalHeight;
    setImageHeight(naturalHeight);
  };

  const toggleActiveCard = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full mt-[7%]">
      {/* Full-width parent */}
      <div className="p-4 w-full">
        {/* Center cards using flex-col and items-center */}
        <div
          className={` flex flex-col gap-8 items-center`}
        >
          {data.length > 0 ? (
            data.map((project) => (
              <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.5 }}
                key={project._id}
                // When active, card spans full width; otherwise fixed width & centered.
                className={`cursor-pointer ${activeCard === project._id ? "w-full" : "w-[500px] mx-auto"}`}
                onClick={() => toggleActiveCard(project._id)}
              >
                {activeCard === project._id ? (
                  // Active card: slider takes full width
                  <Slider project={project} onClose={() => setActiveCard(null)} />
                ) : (
                  // Non-active card: uses a two-column grid with fixed image width.
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mr-[20rem]">
                    {/* Text Section */}
                    <div className="flex flex-col items-center md:items-end md:justify-start">
                      <div className="text-4xl mb-4">{project.icon}</div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-1 text-end">
                        {project.client_name}
                      </h3>
                      <p className="text-gray-500 text-xs text-end">{project.location}</p>
                      <p className="text-gray-500 text-xs text-end">2025</p>
                    </div>
                    {/* Image Section with fixed width */}
                    <div className="relative h-[300px] w-[410px]">
                      <Image
                        src={project.image}
                        alt={project.client_name}
                        width={410}
                        height={imageHeight}
                        className="object-cover h-full w-full"
                        onLoad={handleImageLoad}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
};




export default ProjectsCard;

