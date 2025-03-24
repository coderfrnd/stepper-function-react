import React, { useState } from "react";
import Header from "./component/Header";
import StepContainer from "./StepContainer";
import Button from "./component/Button";

const App = () => {
  const [width, setwidth] = useState(0);
  const [disable, setdisable] = useState(1);
  const [backWardDisable, setbackWardDisable] = useState(0);
  let stepsTextArray = [
    "Add contact details for further communications.",
    "Add shipping address for successful delivery.",
    "Complete Payment to complete the order.",
    "Ready to get delivered!",
    "Order Delivered successfully!🎉",
  ];
  const [showTextOfSteps, setshowTextOfSteps] = useState(
    stepsTextArray[disable - 1]
  );
  console.log(showTextOfSteps);

  function handleForwardProgressBar() {
    if (width <= 102) {
      setwidth((prev) => prev + 34);
      setdisable((prev) => prev + 1);
      setbackWardDisable((prev) => prev + 1);
      setshowTextOfSteps(stepsTextArray[disable]);
    }
  }
  function handlePreviousProgressBar() {
    if (width >= 34) {
      setwidth((prev) => prev - 34);
      setdisable((prev) => prev - 1);
      setbackWardDisable((prev) => prev - 1);
      setshowTextOfSteps(stepsTextArray[disable - 2]);
      console.log(disable);
    }
  }

  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <div className="flex-col justify-center">
          <StepContainer width={width} />
          <div className="p-4 flex justify-center">
            <h1 className="text-3xl">{showTextOfSteps}</h1>
          </div>
          <div className="flex justify-center mt-4 p-4">
            <Button
              type={"Prev"}
              handleProgress={handlePreviousProgressBar}
              disable={backWardDisable}
            />
            <Button
              type={"Next"}
              handleProgress={handleForwardProgressBar}
              disable={disable}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
