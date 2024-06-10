import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-4   rounded-lg mt-4">
      {/* <div className="mr-4">{icon}</div> */}
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
