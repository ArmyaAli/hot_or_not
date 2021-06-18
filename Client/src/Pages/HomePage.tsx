import React from "react";
import { Footer } from "../Components/Footer/Footer";
import { MenuGrid } from "../Components/MenuGrid/MenuGrid";
import { Navbar } from "../Components/Navbar/Navbar";
import { CATEGORIES } from "../Data/categoriesData";
import "./styles/HomePage.css";

export const HomePage = () => {
  return (
    <div >
      <Navbar />
      <div className="content-wrapper">
        <div className="banner-wrapper">
          <div className="banner-text">
            <h1 className="banner-title">Welcome To Twitch Hot Or Not</h1>
            <p><i>"10/10 Website! Great Stuff"</i>- xQcOW</p>
          </div>
        </div> 
      </div>

      <div className="content-wrapper mid">
        <h2 className="category-heading">Choose a Category</h2>
        <MenuGrid
          categories={CATEGORIES}
        />
      </div>
      <div className="content-wrapper bot">

      </div>
      <Footer />
    </div>
  );
};
