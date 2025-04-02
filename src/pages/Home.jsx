import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateUser = () => {
    navigate("/user");
  };
  const navigateAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Generation Thailand <br />React - Assessment</h1>
      <button
        onClick={navigateUser}
        className="m-5 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition"
      >
        User Home
      </button>
      <button
        onClick={navigateAdmin}
        className="m-5 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 transition"
      >
        Admin Home
      </button>
    </div>
  );
};

export default Home;