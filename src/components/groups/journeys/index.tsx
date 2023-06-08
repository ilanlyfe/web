import { FC } from "react";
import JourneyComp, {
  JourneyCompProps,
} from "@/components/elements/item/journey";
import { Journey } from "@/interfaces";

export interface JourneysProps {
  journeys: Journey[];
}
const JourneysComp: FC = () => {
  const data: JourneyCompProps[] = [
    {
      name: "Journey 1",
    },
    {
      name: "Journey 2",
    },
    {
      name: "Journey 3",
    },
    {
      name: "Journey 4",
    },
  ];
  return (
    <div className="bg-white py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-4 space-y-20 lg:mt-20 lg:space-y-20">
            {data.map((data, idx) => (
              <JourneyComp key={idx} name={data.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JourneysComp;
