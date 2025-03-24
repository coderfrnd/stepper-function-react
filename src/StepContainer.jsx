import React, { useState } from "react";
import StepCircle from "./component/StepCircle";
import Button from "./component/Button";

const StepContainer = ({ width = 0 }) => {
  let arr = [1, 2, 3, 4];
  let getCheckedIndex = width / 33;
  if (width > 99) width = 99;
  return (
    <div className="w-full flex  relative ">
      <div className="absolute top-[70%] left-0 right-0 flex justify-center">
        <div className="h-[10px] bg-amber-300 w-[75%]">
          <div
            className={`bg-red-500  h-[10px]`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-around w-full mt-[80px] z-10">
        {arr.map((ele, ind) => {
          if (ind < getCheckedIndex)
            return <StepCircle step={ele} checked={"green"} />;
          if (ind == getCheckedIndex)
            return <StepCircle step={ele} checked={"red"} />;
          return <StepCircle step={ele} />;
        })}
      </div>
    </div>
  );
};

export default StepContainer;
