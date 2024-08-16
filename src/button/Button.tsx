import { ReactNode } from "react";
import classes from "./button.module.css";

export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={classes.button}>
      {children}
    </button>
  );
};
