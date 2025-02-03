import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h3 className="text-3xl font-semibold top-3 absolute">Home Page</h3>
      <Link
        to="/login"
        className="text-2xl font-medium bg-green-500 hover:bg-green-500/90 px-4 py-2 rounded-md"
      >
        Login
      </Link>
    </div>
  );
}

export default App;
