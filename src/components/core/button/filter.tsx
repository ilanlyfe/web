import { FC } from "react";
import Icon, { IconVariant } from "@/components/core/icons";
interface FilterButtonProps {
  onClick?: () => void;
}
const FilterButton: FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex items-center h-full w-full text-center"
      onClick={onClick}
    >
      <Icon variant={IconVariant.FILTER} />
      {/* add text */}
      {/* add right icon */}
    </button>
  );
};

export default FilterButton;
