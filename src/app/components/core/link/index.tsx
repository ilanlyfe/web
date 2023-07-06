import { FC } from "react";
export interface TypeProps {
  text: string;
  variant: TypeVariant;
  pricingType?: TypePricingType;
}

export enum TypePricingType {
  PER_NIGHT = "per-night",
  PER_PERSON = "per-person",
  PER_STAY = "per-stay",
}
export enum TypeVariant {
  BASE = "base", // default
  TITLE = "title",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
  LIGHT = "light",
  PRICING = "pricing",
}

const Type: FC<TypeProps> = ({ text, variant, pricingType }) => {
  switch (variant) {
    case TypeVariant.BASE:
      return <p className="font-light text-gray-900">{text}</p>;
    case TypeVariant.LIGHT:
      return <p className="font-light text-gray-900">{text}</p>;
    case TypeVariant.PRICING:
      return (
        <p className="font-light text-gray-900">
          {pricingType === TypePricingType.PER_NIGHT
            ? `$${text} / night`
            : `$${text}`}
        </p>
      );
    case TypeVariant.TITLE:
      return <h2 className="text-2xl font-medium ">{text}</h2>;
    default:
      return <div>{text}</div>;
  }
};
export default Type;
