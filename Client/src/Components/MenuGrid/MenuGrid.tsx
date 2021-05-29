import React from "react";
import { MenuButton } from "./MenuButton/MenuButton";

export interface GridProps {
    categories: string[];
}
export const MenuGrid = (props: GridProps) => {
  return (
    <div>
        {props.categories.map((category) => <MenuButton Text={category} /> )}
    </div>
  );
};
