import React from "react";
import { useTheme } from "../context/theme";

const Div = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`m-16 h-[600px] w-[600px] ${
        theme == "light" ? "bg-red-500 text-white" : "bg-gray-500 text-black"
      } rounded-lg font-medium text-3xl flex items-center justify-center`}
    >
      <h4>hi</h4>
    </div>
  );
};

export default Div;
