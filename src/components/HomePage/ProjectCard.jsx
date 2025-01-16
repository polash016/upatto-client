const ProjectCard = ({ image, index, handleImageLoad, handleProjectClick }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => handleProjectClick(image.href)}
    >
      <div className="bg-transparent border-none hover:opacity-70 transition-opacity duration-300">
        <div className="p-0">
          <img
            src={image.image}
            alt={image.alt}
            onLoad={() => handleImageLoad(index)}
            className="w-full h-auto aspect-square object-cover"
            style={{ display: "block" }}
          />
          {image.title && (
            <div className="flex justify-between items-end absolute bottom-0 p-4 w-full text-white bg-gradient-to-t from-gray-900">
              <div>
                <h2 className="text-md font-bold">{image.title}</h2>
                {image.subtitle && <p className="text-sm">{image.subtitle}</p>}
              </div>
              <div>
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
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
