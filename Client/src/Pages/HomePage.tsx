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
