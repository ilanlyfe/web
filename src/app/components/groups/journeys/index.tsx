"use client";
import { FC, useState, useEffect } from "react";
import Journey, { JourneyProps } from "@/components/elements/item/journey";
import { JourneyData } from "@/interfaces";

export interface JourneysProps {
  journeys?: JourneyData[];
}
const Journeys: FC = () => {
  const [jns, setJourneys] = useState<JourneyData[]>();
  // TODO: call the getJourneys() method from the context.
  useEffect(() => {
    console.log("where am i? ", window.location.pathname);
    const _jns = getLocalJourneys();
    setJourneys(_jns);
  }, []);

  return (
    <div className="bg-white py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {jns
            ? jns.map((data, idx) => (
                <Journey
                  key={idx}
                  data={data}
                  onClick={(e: any) => deleteLocalJourney(data.id)}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );

  function deleteLocalJourney(id: string) {
    let journeys: JourneyData[] = [];

    let journeysStr = localStorage.getItem("journeys");
    if (journeysStr) {
      journeys = JSON.parse(journeysStr);
    }

    let popped = journeys.pop();
    console.log("deleted journed with id: ", popped!.id);

    // journeys.map((jny, idx) => {
    //   if (jny.id === id) {
    //     // remove journey from array

    //   }
    // });

    journeysStr = JSON.stringify(journeys);
    localStorage.setItem("journeys", journeysStr);
    setJourneys(journeys);
  }
};
export default Journeys;

function getLocalJourneys(): JourneyData[] {
  let journeys: JourneyData[] = [];

  let journeysStr = localStorage.getItem("journeys");
  if (journeysStr) {
    journeys = JSON.parse(journeysStr);
  }
  return journeys;
}

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
