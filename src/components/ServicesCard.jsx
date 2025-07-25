import React from "react";

const ServicesCard = ({id, title, description, subpoints = [], imageSrc }) => {
  return (
    <div id={id} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full h-auto max-w-5xl mx-auto">
      {/* Left side: Image */}
      <div className="md:w-1/2 h-64 md:h-auto p-4 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="aspect-square w-[50vw] md:w-[40vw] object-contain"
        />
      </div>
      {/* Right side: Text */}
      <div className="flex flex-col justify-center px-4 py-2 md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="space-y-2">
          {subpoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-black rounded-full mt-2 mr-2"></span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;