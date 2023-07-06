import { FC } from "react";
import { JourneyData, ExperienceData } from "@/interfaces";
import Button, { ButtonVariant } from "@/components/core/button";

interface PreviewProps {
  type: InstanceType;
  data?: JourneyData | ExperienceData;
  onClick?: (e: any) => void;
}

export enum InstanceType {
  JOURNEY = "journey",
  EXPERIENCE = "experience",
  ADD_NEW_JOURNEY = "add_new_journey",
}

const Preview: FC<PreviewProps> = ({ type, onClick }) => {
  return (
    <div className="flex p-2 mb-3 w-full border border-grey-200 rounded-lg bg-white">
      <div className=" w-full ml-1 " onClick={onClick}>
        <div className="">{renderPreview(type)}</div>
      </div>
      {type === InstanceType.ADD_NEW_JOURNEY ? null : (
        <div className="flex pt-1 items-start justify-between">
          <Button
            variant={ButtonVariant.DELETE}
            onClick={(e) => {
              if (onClick) onClick(e);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Preview;

function renderPreview(type: InstanceType) {
  switch (type) {
    case InstanceType.JOURNEY:
      return (
        <div className="rounded-lg">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Journey name
          </h3>
          <dl className=" space-y-1 text-sm leading-6 text-gray-600">
            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <p className=" text-gray-400">Jan 1, 2023 - Jan 14, 2023</p>
              </dd>
            </div>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd>$13,234.32 ($437.23/guest)</dd>
            </div>
          </dl>
        </div>
      );
    case InstanceType.EXPERIENCE:
      return <div>this is an experience preview</div>;
    case InstanceType.ADD_NEW_JOURNEY:
      return <div className="text-center p-2">Create a journey</div>;
  }
}
