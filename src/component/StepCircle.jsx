import React from "react";

const StepCircle = ({ step, checked, msg }) => {
  //   msg = "jj";
  return (
    <div className=" flex flex-col items-center justify-center">
      <div
        className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center text-white text-lg font-bold"
        style={{ backgroundColor: checked }}
      >
        <span>{step}</span>
      </div>
      {/* <span>{msg}</span> */}
    </div>
  );
};

export default StepCircle;
