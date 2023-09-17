import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
