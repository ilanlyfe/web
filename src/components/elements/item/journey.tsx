import { FC } from "react";

export interface JourneyCompProps {
  name: string;
}

const JourneyComp: FC<JourneyCompProps> = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default JourneyComp;
