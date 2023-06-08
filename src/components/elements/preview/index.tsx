import { FC } from "react";
import Link from "next/link";
import { Journey, Experience } from "@/interfaces";

interface PreviewProps {
  type: InstanceType;
  data?: Journey | Experience;
  onClick?: (e: any) => void;
}

export enum InstanceType {
  JOURNEY = "journey",
  EXPERIENCE = "experience",
  ADD_NEW_JOURNEY = "add_new_journey",
}

export interface JourneyData {
  id: string;
}
export interface ExperienceData {
  id: string;
}
const Preview: FC<PreviewProps> = ({ type, onClick }) => {
  return (
    <div className="w-full m-w-full " onClick={onClick}>
      <div className="mt-2 w-full border border-grey-200 rounded-lg bg-white shadow-sm hover:shadow-md">
        <div className="p-4">{renderPreview(type)}</div>
      </div>
    </div>
  );
};

export default Preview;

function renderPreview(type: InstanceType) {
  switch (type) {
    case InstanceType.JOURNEY:
      return <div className="">this is a journey preview</div>;
    case InstanceType.EXPERIENCE:
      return <div>this is an experience preview</div>;
    case InstanceType.ADD_NEW_JOURNEY:
      return <div>Create a journey</div>;
  }
}

/*** Notes ***
 * Notes go here.
 */
