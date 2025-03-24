import React from "react";

const StepCircle = ({ step, checked }) => {
  return (
    <div
      className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center text-white text-lg font-bold"
      style={{ backgroundColor: checked }}
    >
      <span>{step}</span>
    </div>
  );
};

export default StepCircle;
