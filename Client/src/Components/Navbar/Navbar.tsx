import React from "react";
import './Navbar.css'

export const Navbar = () => {
  return(
    <nav>
        <div className="nav-wrapper">
            <div className="home-button-wrapper">
                <button className="home-button w-96 bg-gray-50">Home page</button>
            </div>
        </div>
    </nav>
  )
};
