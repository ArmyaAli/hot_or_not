import React from "react";
import { Footer } from "../Components/Footer/Footer";
import { MenuGrid } from "../Components/MenuGrid/MenuGrid";
import { Navbar } from "../Components/Navbar/Navbar";
import "./styles/HomePage.css";

export const HomePage = () => {
  return (
    <div >
      <Navbar />
      <div className="content-wrapper">

      </div>
      <div className="content-wrapper mid">
        <MenuGrid
          categories={[
            "Male Streamers",
            "Female Streamers",
            "Male Porn Stars",
            "Female Porn Stars",
            "Male Celebs",
            "Female Celebs",
            "Other"
          ]}
        />
      </div>
      <div className="content-wrapper bot">

      </div>
      <Footer />
    </div>
  );
};
