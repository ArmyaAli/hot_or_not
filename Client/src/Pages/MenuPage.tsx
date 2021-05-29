import React from "react";
import { Footer } from "../Components/Footer/Footer";
import { MenuGrid } from "../Components/MenuGrid/MenuGrid";
import { Navbar } from "../Components/Navbar/Navbar";

export const MenuPage = () => {
  return (
    <div>
      <Navbar />
      <MenuGrid
        categories={[
          "Male Streamers",
          "Female Streamers",
          "Male Porn Stars",
          "Female Porn Stars",
          "Male Celebs",
          "Female Celebs"
        ]}
      />
      <Footer />
    </div>
  );
};
