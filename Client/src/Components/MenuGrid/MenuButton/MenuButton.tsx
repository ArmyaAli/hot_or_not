import React from "react";
import "./MenuButton.css";

export interface ButtonProps {
  Text: string;
}

export const MenuButton = (props: ButtonProps) => {
  return (
    <div className="menu-button-wrapper">
      <button>{props.Text}</button>
    </div>
  );
};
