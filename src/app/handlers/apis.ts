import {
  Curation,
  GuestContext,
  ItemDataType,
  ResourceRelationshipToParent,
  ItemData,
  ExperienceType,
  MediaData,
  MediaType,
  JourneyData,
} from "@/interfaces";
import {
  API_Resource,
  API_Response,
  API_ResponseV2,
  API_CreateJourneyResponse,
} from "@/interfaces/api_types";
import {
  convertApiResourceToExpereince,
  saveToCache,
} from "@/handlers/helpers";
import { ulid } from "ulid";
import { getMockJourneys } from "./journeys";

export async function getCuration(
  params: getCurationParams,
): Promise<Curation> {
  let errMsg = "";
  const resp: API_Response = await fetch(
    "http://127.0.0.1:8080/resource/homes-list",
    { cache: "no-store" },
  )
    .then((res) => {
      return res.json();
    })
    .catch((err: TypeError) => {
      errMsg = err.message;
      return err;
    });
  let curation = {
    id: "01GT02ARYB08WHYMF27AA9DZA1",
    items: [] as ItemData[],
    errMsg,
  };

  if (resp === undefined || resp.error !== undefined) {
    console.error("error from fetching /resources/homes-list : ", resp.error);
    return curation;
  }

  for (let experience of resp.resources!) {
    let media: MediaData[] = [];
    // console.log("experience : ", experience);
    if (experience.property === undefined) {
      // console.log("experience : ", experience);
      return curation;
    }

    // for (let image of experience.images) {
    //   let media = {
    //     type: MediaType.IMAGE,
    //     id: image.id,
    //     srcUri: image.url,
    //     createdAt: image.createdAt,
    //     updatedAt: image.updatedAt,
    //   };
    //   media.push(mediaItem);
    // }
    let item = {
      id: experience.id,
      type: ItemDataType.EXPERIENCE,
      createdAt: 90900909,
      experience: {
        errMsg,
        id: experience.id,
        parentId: "hello-yello",
        title: experience.title,
        shortDescription: experience.shortDescription,
        heroImage: experience.heroImage,
        images: [
          {
            id: "imageid_1",
            srcUri: experience.heroImage,
            type: MediaType.IMAGE,
            alt: "sample alt text",
          },
        ],
        resourceType: ExperienceType.STAY,
        address: experience.address,
        location: "somewhere in the world",
        calendarIds: experience.calendarIds,
        regionId: experience.regionId,
        updatedAt: experience.updatedAt,
        updatedBy: "tony hill",
        relationToParent: ResourceRelationshipToParent.UNKNOWN, // FIXME: forcing this for now
        createdAt: experience.createdAt,
        property: {
          type: ExperienceType.STAY,
          createdAt: 909090,
          updatedAt: 909090,
          roomCount: 3,
          guestSize: 6,
          // attributes: {},
          home: {
            id: "homeid_1",
            createdAt: "0",
            updatedAt: "0",
            decks: [],
          },
        },
      },
    };
    curation.items.push(item);
  }

  // console.log("curation from the api: ", curation);
  return curation;
}

export async function getItem(id: string): Promise<ItemData> {
  let errMsg = "";
  const resp: API_ResponseV2<API_Resource> = await fetch(
    `http://127.0.0.1:8080/resource/home/${id}`,
    // { cache: "no-store" },
  )
    .then((res) => {
      return res.json();
    })
    .catch((err: TypeError) => {
      console.error("error from fetching /resources/home/:id : ", err);
      errMsg = err.message;
      return err;
    });
  // console.log("respone from the api: ", resp);
  let item = {} as ItemData;
  if (resp.data !== undefined) {
    item = {
      id: resp.data.id,
      type: ItemDataType.EXPERIENCE,
      createdAt: resp.data.createdAt,
      experience: convertApiResourceToExpereince(resp.data),
    };
  }

  return item;
}

export async function createJourney(
  journey: JourneyData,
): Promise<API_ResponseV2<API_CreateJourneyResponse>> {
  if (!journey.name) {
    return {
      error: {
        message: "title is required",
        name: "some name",
      },
    };
  } else if (!journey.description) {
    return {
      error: {
        message: "description is required",
        name: "some name",
      },
    };
  } else if (!journey.creator) {
    return {
      error: {
        message: "a creator is needed in order to create a journey",
        name: "some name",
      },
    };
  }
  journey.id = ulid();

  saveToCache(journey.id, journey);
  const resp: API_ResponseV2<API_CreateJourneyResponse> = await fetch(
    `http://127.0.0.1:8080/journey/create`,
  )
    .then((res) => {
      return res.json();
    })
    .catch((err: TypeError) => {
      console.error("error from fetching /resources/home/:id : ", err);
      return err;
    });
  return {
    data: resp.data,
  };
}

export async function getJourneys(
  params: getJourneysParams,
): Promise<API_ResponseV2<JourneyData[]>> {
  let journeys: JourneyData[] = [];
  let resp: API_ResponseV2<JourneyData[]> = {} as API_ResponseV2<JourneyData[]>;
  if (params.mock) {
    resp = await getMockJourneys();
  } else {
    resp = await fetch(
      `http://127.0.0.1:8080/journeys`,
      // { cache: "no-store" },
    )
      .then((res) => {
        return res.json();
      })
      .catch((err: TypeError) => {
        console.error("error from fetching /resources/home/:id : ", err);
        return err;
      });
  }

  if (resp.data !== undefined) {
    journeys = resp.data;
  }
  return { data: journeys };
}

export type getJourneysParams = {
  id?: string;
  guestId?: string;
  cache?: "no-store" | "default";
  mock?: boolean;
};

export type getCurationParams = {
  id?: string;
  ctx?: GuestContext;
};
