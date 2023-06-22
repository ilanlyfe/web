import { FC } from "react";
import { JourneyData } from "@/interfaces";

export interface JourneyProps {
  data: JourneyData;
}

const Journey: FC<JourneyProps> = ({
  data: { id, name, description, creator, startDate, endDate, total },
}) => {
  return (
    <div>
      {/* trash button */}

      <p>{name}</p>
      <p>{description}</p>
      <p>{total}</p>
    </div>
  );
};

export default Journey;
