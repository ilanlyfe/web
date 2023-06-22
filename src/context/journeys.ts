import { JourneyData, ExperienceData } from "@/interfaces";
import { ulid } from "ulid";

export type ApiResponse<T> = {
  data?: T;
  error: string;
};

export function createJourney(journey: JourneyData): ApiResponse<JourneyData> {
  if (!journey.name) {
    return {
      error: "title is required",
    };
  } else if (!journey.description) {
    return {
      error: "description is required",
    };
  } else if (!journey.creator) {
    return {
      error: "a creator is needed in order to create a journey",
    };
  }
  let journeysArr: JourneyData[] = [];
  journey.id = ulid();

  let journeysJsonStr = localStorage.getItem("journeys");

  if (journeysJsonStr) {
    journeysArr = JSON.parse(journeysJsonStr);
  } else {
    console.log("no journeys found in local storage; creating a new one");
  }
  journeysArr.push(journey);
  localStorage.setItem("journeys", JSON.stringify(journeysArr));

  return {
    data: journey,
    error: "",
  };
}

export function getJourneys(): ApiResponse<JourneyData[]> {
  let journeys: JourneyData[] = [];

  let journeysStr = localStorage.getItem("journeys");
  if (journeysStr) {
    journeys = JSON.parse(journeysStr);
  }
  return {
    data: journeys,
    error: "",
  };
}

export function getJourneyById(journeyId: string): ApiResponse<JourneyData> {
  let journeys = getJourneys();
  console.log("getting journey by id", journeyId, journeys);
  if (journeys.data === undefined) {
    return {
      error: "no journeys found",
    };
  }
  for (let i = 0; i < journeys.data.length; i++) {
    if (journeys.data[i].id === journeyId) {
      return {
        data: journeys.data[i],
        error: "",
      };
    }
  }
  return {
    error: `no journey found with the provided id of ${journeyId}`,
  };
}

export function addExperienceToJourney(
  journeyId: string,
  experience: ExperienceData,
): ApiResponse<boolean> {
  // find journey from local storage
  let journeyObj = getJourneyById(journeyId).data;
  if (journeyObj === undefined) {
    console.log("no journey found");
    return {
      error: `no journey found with the provided id of ${journeyId}`,
    };
  }
  // parse the journey from the response (local | api)

  // add the experience to the journey
  if (journeyObj.experiences === undefined) {
    journeyObj.experiences = [];
  }
  console.log("experience being added to the journey", experience);
  journeyObj.experiences.push(experience);
  let total = 0;
  journeyObj.experiences.map((b) => {
    console.log("rate to be added to journye, ", b.rate);
    total += b.rate;
    console.log("total after going through all the experiences", total);
  });
  journeyObj.total = total;

  // make an update call to the api. if good save the journey to local storage.
  localStorage.setItem(`journey_${journeyId}`, JSON.stringify(journeyObj));

  return {
    data: true,
    error: "",
  };
}
