"use client";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/core/icons";
interface PrimaryButtonProps {
  text: string;
  onClick?: (e: any) => void;
}
const PrimaryButton: FC<PrimaryButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="flex items-center justify-center rounded-lg py-3 px-8 h-auto w-full text-center bg-cyan-500"
      onClick={onClick}
    >
      {text}

      {/* add right icon */}
    </button>
  );
};

export default PrimaryButton;
