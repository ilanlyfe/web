/**
 * getCurations(params) - returns a list of curations
 * getItem(params) - returns a single item. item can be an experience, a story, etc...
 * getJourneys(params) - returns a list of journeys
 * */

import data from "@/mockdata/index.json";
import {
  Curation,
  ExperienceData,
  GuestContext,
  ItemDataType,
  ResourceRelationshipToParent,
  ItemData,
  ExperienceType,
  MediaData,
  MediaType,
} from "@/interfaces";
import { API_ResponseV2 } from "@/interfaces/api_types";
import { getJourneys } from "@/handlers/apis";
import { JourneyData } from "@/interfaces";

export type addExperienceToJourneyParams = {
  journeyId: string;
  experience: ExperienceData;
  cache?: boolean;
};

export async function addExperienceToJourney(
  params: addExperienceToJourneyParams,
): Promise<API_ResponseV2<boolean>> {
  // find journey from local storage
  let resp = await getJourneys({
    id: params.journeyId,
    mock: true, // FIXME: forcing this for now
  });
  if (resp.error !== undefined) {
    console.log("error adding experience to journey: ", resp.error);
    return {
      error: resp.error,
    };
  }

  let journeyObj: JourneyData;
  // parse the journey from the response (local | api)

  if (resp.data !== undefined && resp.data.length > 0) {
    journeyObj = resp.data[0];
  } else {
    // add the experience to the journey
    journeyObj = {
      id: params.journeyId,
      name: "the tenth",
      description: "this is the tenth description",
      experiences: [params.experience],
      startDate: new Date("2023-07-12T00:00:00.000Z"),
      endDate: new Date("2023-07-28T00:00:00.000Z"),
      total: 0,
      creator: {
        id: "01H253Q3MEB4TV43Q9ZWXTMWPC",
        userName: "testing_tony_local",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
      },
    };
  }

  console.log("experience being added to the journey", params.experience);
  if (journeyObj.experiences !== undefined) {
    journeyObj.experiences.push(params.experience);
  } else {
    journeyObj.experiences = [];
  }

  let total = 0;
  journeyObj.experiences.map((e) => {
    // FIXME: this is not working, the rate is not there.
    // console.log("rate to be added to journye, ", b.rate);
    if (e.rate !== undefined) {
      total += e.rate;
    }
  });
  console.log("total after going through all the experiences", total);
  journeyObj.total = total;

  // make an update call to the api. if good save the journey to local storage.
  localStorage.setItem(
    `journey_${params.journeyId}`,
    JSON.stringify(journeyObj),
  );

  return {
    data: true,
  };
}
