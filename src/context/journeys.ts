import { Journey, Experience } from "@/interfaces";

export type ApiResponse<T> = {
  data?: T;
  error: string;
};

export function createJourney(journey: Journey): ApiResponse<Journey> {
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
  journey.id = "01H24VF0JTY981SJMYXZW7JR0X";
  localStorage.setItem(
    "journey_01H24VF0JTY981SJMYXZW7JR0X",
    JSON.stringify(journey),
  );
  return {
    data: journey,
    error: "",
  };
}

export function getJourneys(): ApiResponse<Journey[]> {
  let journeys: Journey[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key?.includes("journey")) {
      let journey = localStorage.getItem(key);
      if (journey) {
        journeys.push(JSON.parse(journey));
      }
    }
  }
  return {
    data: journeys,
    error: "",
  };
}

export function addExperienceToJourney(
  journeyId: string,
  experience: Experience,
): ApiResponse<boolean> {
  // find journey from local storage
  let journeyStr = localStorage.getItem(`journey_${journeyId}`);

  // if not in local storage then call api to get the journey
  if (!journeyStr) {
    console.log("no journey found locally, calling api");
    // if no journey found then return not found error
    return {
      data: false,
      error: `no journey found with the provided id of ${journeyId}`,
    };
  }

  // parse the journey from the response (local | api)

  let journeyObj: Journey;
  if (typeof journeyStr === "string") {
    journeyObj = JSON.parse(journeyStr);
    console.log(`journey found locally with id ${journeyObj.id}`);
  } else {
    console.error("journey is not a string and cannot be parsed");
    return {
      data: false,
      error: "journey is not a string and cannot be parsed",
    };
  }
  // add the experience to the journey
  if (journeyObj.experiences === undefined) {
    journeyObj.experiences = [];
  }
  journeyObj.experiences.push(experience);

  // make an update call to the api. if good save the journey to local storage.
  localStorage.setItem(`journey_${journeyId}`, JSON.stringify(journeyObj));

  return {
    data: true,
    error: "",
  };
}
