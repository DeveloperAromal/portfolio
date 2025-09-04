import { ReactNode } from "react";

export interface ButtonProps {
  content: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}
