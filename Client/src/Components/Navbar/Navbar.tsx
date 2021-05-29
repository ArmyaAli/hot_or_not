import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="back-button-wrapper bg-gray-50 rounded-sm hover:bg-gray-500 cursor-pointer">
          <button className="back-button h-12 focus:outline-none">Go Back</button>
        </div>
        <div className="home-button-wrapper bg-gray-50 rounded-sm hover:bg-gray-500 cursor-pointer">
          <button className="home-button h-12 focus:outline-none">Home Page</button>
        </div>
        <div className="add-person-button-wrapper bg-gray-50 rounded-sm hover:bg-gray-500 cursor-pointer">
          <button className="add-person-button h-12 focus:outline-none">Add Person</button>
        </div>
      </div>
    </nav>
  );
};
