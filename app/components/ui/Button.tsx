import clsx from "clsx";
import { ButtonProps } from "@/app/types/uiTypes";

export default function Button({
  content,
  icon,
  onClick,
  variant = "primary",
  type = "button",
  className,
  disabled = false,
}: ButtonProps) {
  const base = "px-4 py-2 rounded-sm text-sm transition-colors ";

  const variants = {
    primary:
      "bg-[var(--button-primary)] border-1 border-[var(--primary)] hover:bg-[var(--button-secondary)]",
    secondary: "bg-[var(--secondary)] text-white hover:bg-[#004f2e]",
    danger: "bg-[var(--danger)] text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(base, variants[variant], className, {
        "opacity-50 cursor-not-allowed": disabled,
      })}
    >
      {content} {icon}
    </button>
  );
}
