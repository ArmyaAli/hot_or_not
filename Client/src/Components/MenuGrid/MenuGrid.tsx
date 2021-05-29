import React from "react";
import { MenuButton } from "./MenuButton/MenuButton";
import "./MenuGrid.css"

export interface GridProps {
    categories: string[];
}
export const MenuGrid = (props: GridProps) => {
  return (
    <div className="button-container">
        {props.categories.map((category) => <MenuButton Text={category} /> )}
    </div>
  );
};
