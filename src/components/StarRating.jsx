import React from "react";
import { HiStar } from "react-icons/hi";

const StarRating = ({ rate }) => {
  // Generate an array of 5 stars with their fill status
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fillLevel = rate - index; // Determine how much each star should be filled
    if (fillLevel >= 1) return "full"; // Fully filled
    if (fillLevel > 0) return "half"; // Half-filled
    return "empty"; // Empty
  });

  return (
    <div className="flex items-center">
      {stars.map((star, index) => (
        <HiStar
          size="16px"
          key={index}
          className={`${
            star === "empty" ? "text-gray-300" : "text-[#F39D1A]"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
