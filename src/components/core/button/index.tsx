import { FC } from "react";
import Icon, { IconVariant } from "@/components/core/icons";
import FilterButton from "./filter";

export enum ButtonVariant {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  FILTER = "filter",
}
export interface ButtonProps {
  variant: ButtonVariant;
  text?: string;
  icon?: typeof Icon;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ variant, text, onClick }) => {
  switch (variant) {
    case ButtonVariant.FILTER:
      return <FilterButton onClick={onClick} />;

    default:
      return (
        <button
          className="flex items-center h-full w-full text-center"
          onClick={onClick}
        >
          {/* add text */}
          default button
          {/* add right icon */}
        </button>
      );
  }
};

export default Button;
