import { FC } from "react";
import Journey, { JourneyProps } from "@/components/elements/item/journey";
import { JourneyData } from "@/interfaces";

export interface JourneysProps {
  journeys: JourneyData[];
}
const Journeys: FC = () => {
  // TODO: call the getJourneys() method from the context.
  const data: JourneyData[] = [
    {
      id: "01H24VF0JTY981SJMYXZW7JR0X",
      name: "Journey 1",
      description: "This is a journey description",
      startDate: new Date("Jan 26, 2023"),
      endDate: new Date("Feb 4, 2023"),
      creator: {
        id: "01H24VF0JTY981SJMYXZW7JR0X",
        userName: "John Doe",
        avatarUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing",
      },
      total: 142343,
    },
    {
      id: "01H24VF0JTY981SJMYXZW7JR0Y",
      name: "Journey 2",
      description: "This is a journey description",
      startDate: new Date("Jan 26, 2023"),
      endDate: new Date("Feb 4, 2023"),
      creator: {
        id: "01H24VF0JTY981SJMYXZW7JR0X",
        userName: "John Doe",
        avatarUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing",
      },
      total: 142343,
    },
    {
      id: "01H24VF0JTY981SJMYXZW7JR0Z",
      name: "Journey 3",
      description: "This is a journey description",
      startDate: new Date("Jan 26, 2023"),
      endDate: new Date("Feb 4, 2023"),
      creator: {
        id: "01H24VF0JTY981SJMYXZW7JR0X",
        userName: "John Doe",
        avatarUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing",
      },
      total: 142343,
    },
    {
      id: "01H24VF0JTY981SJMYXZW7JR0A",
      name: "Journey 4",
      description: "This is a journey description",
      startDate: new Date("Jan 26, 2023"),
      endDate: new Date("Feb 4, 2023"),
      creator: {
        id: "01H24VF0JTY981SJMYXZW7JR0X",
        userName: "John Doe",
        avatarUrl:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing",
      },
      total: 142343,
    },
  ];
  
  return (
    <div className="bg-white py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-4 space-y-20 lg:mt-20 lg:space-y-20">
            {data.map((data, idx) => (
              <Journey key={idx} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Journeys;
