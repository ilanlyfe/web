import { FC } from "react";
import { JourneyData } from "@/interfaces";
import Preview, { InstanceType } from "@/components/elements/preview";
export interface JourneyProps {
  data: JourneyData;
  onClick?: (e: any) => void;
}

const Journey: FC<JourneyProps> = ({ data, onClick }) => {
  return <Preview data={data} type={InstanceType.JOURNEY} onClick={onClick} />;
};

export default Journey;
