import React, { useState } from "react";
import Header from "./component/Header";
import StepContainer from "./StepContainer";
import Button from "./component/Button";

const App = () => {
  const [width, setwidth] = useState(0);
  const [disable, setdisable] = useState(1);
  const [backWardDisable, setbackWardDisable] = useState(0);
  function handleForwardProgressBar() {
    if (width <= 99) {
      setwidth((prev) => prev + 33);
      setdisable((prev) => prev + 1);
      setbackWardDisable((prev) => prev + 1);
    }
  }
  function handlePreviousProgressBar() {
    if (width >= 33) {
      setwidth((prev) => prev - 33);
      setdisable((prev) => prev - 1);
      setbackWardDisable((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <div className="flex-col justify-center">
          <StepContainer width={width} />
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
