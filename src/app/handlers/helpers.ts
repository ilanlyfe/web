import data from "@/mockdata/index.json";
import {
  ExperienceData,
  ResourceRelationshipToParent,
  ExperienceType,
  JourneyData,
  MediaType,
} from "@/interfaces";
import { API_Resource } from "@/interfaces/api_types";

export function convertApiResourceToExpereince(
  data: API_Resource,
): ExperienceData {
  return {
    errMsg: "",
    id: data.id,
    parentId: "hello",
    title: data.title,
    shortDescription: data.shortDescription,
    heroImage: data.heroImage,
    images: data.images.map((uri, idx) => {
      return {
        id: `imageid_${idx}`,
        srcUri: uri,
        type: MediaType.IMAGE,
        alt: "sample alt text",
      };
    }),
    resourceType: ExperienceType.STAY,
    address: data.address,
    location: "somewhere in the world",
    calendarIds: data.calendarIds,
    regionId: data.regionId,
    updatedAt: data.updatedAt,
    updatedBy: "tony hill",
    relationToParent: ResourceRelationshipToParent.UNKNOWN, // FIXME: forcing this for now
    createdAt: data.createdAt,
    property: {
      type: ExperienceType.STAY,
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
  };
}

export function saveToCache(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getFromCache(key: string): any {
  let jsnStr = localStorage.getItem(key);
  if (jsnStr === null) return {};
  return JSON.parse(jsnStr);
}
