import { FC } from "react";
import Icon, { IconVariant } from "@/components/core/icons";
import FilterButton from "./filter";
import MoreButton from "./more";
import DefaultButton from "./default";
import PrimaryButton from "./primary";
import DeleteButton from "./delete";

export enum ButtonVariant {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  FILTER = "filter",
  MORE = "more",
  DELETE = "delete",
}
export interface ButtonProps {
  variant: ButtonVariant;
  text?: string;
  icon?: typeof Icon;
  onClick?: (e: any) => void;
}

const Button: FC<ButtonProps> = ({ variant, text, onClick }) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return (
        <PrimaryButton
          text={text!}
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
    case ButtonVariant.FILTER:
      return (
        <FilterButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
    case ButtonVariant.MORE:
      return (
        <MoreButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
    case ButtonVariant.DELETE:
      return (
        <DeleteButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );

    default:
      return (
        <DefaultButton
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
        />
      );
  }
};

export default Button;
