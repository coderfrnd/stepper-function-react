import React, { useState } from "react";
import StepCircle from "./component/StepCircle";
import Button from "./component/Button";

const StepContainer = ({ width = 0 }) => {
  let arr = ["Contact-details", "Shipping Address", "Payment", "Delivered"];
  let getCheckedIndex = width / 34;
  if (width > 102) width = 100;
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
          let checkedColor =
            ind < getCheckedIndex
              ? "green"
              : ind === getCheckedIndex
              ? "red"
              : "gray";

          return (
            <div key={ind} className="flex flex-col items-center">
              <StepCircle step={ind + 1} checked={checkedColor} msg={ele} />
              <span>{ele}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepContainer;
