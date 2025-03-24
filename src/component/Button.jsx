import React from "react";

const Button = ({ type, handleProgress, disable }) => {
  let disableStatus = false;
  if (disable == 5 || disable == 0) {
    disableStatus = true;
  }
  return (
    <button
      className={`border px-4 py-2 ${
        disableStatus ? "cursor-not-allowed opacity-50" : "hover:bg-gray-200"
      }`}
      onClick={handleProgress}
      disabled={disableStatus}
    >
      {type}
    </button>
  );
};

export default Button;
