import { ReactNode } from "react";
import { motion } from "framer-motion";
import "./Button.scss";

enum ButtonColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

const colors = {
  [ButtonColor.PRIMARY]: "primary",
  [ButtonColor.SECONDARY]: "secondary",
};

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit";
  color?: keyof typeof ButtonColor;
  disabled?: boolean
  active?: boolean
}

export const Button = ({
  children,
  onClick,
  color = ButtonColor.PRIMARY,
  type = "button",
  disabled = false,
  active = false,
  ...other
}: ButtonProps) => {
  return (
    <motion.button
      {...other}
      type={type}
      className={`credit-claculator-button ${colors[color]} ${active ? "active" : ""}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};