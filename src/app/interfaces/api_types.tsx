import { JourneyData } from ".";

export interface API_ResponseV2<T> {
  data?: T;
  error?: TypeError;
}

export interface API_Response {
  total: number;
  resources?: API_Resource[];
  resource?: API_Resource;
  journeys?: JourneyData[];
  createJourneyResponse?: API_CreateJourneyResponse;
  error?: TypeError;
}

export interface API_CreateJourneyResponse {
  id: string;
}

export interface API_Journey {}

export interface API_Resource {
  id: string;
  parentId: string;
  relationToParent: string;
  createdAt: number;
  updatedAt: number;
  address: string;
  calendarIds: string[];
  resourceType: "PROPERTY" | "UNKNOWN";
  property?: API_Property;
  heroImage: string;
  images: string[];
  title: string;
  shortDescription: string;
  regionId: string;
  errMsg: string;
}

export interface API_Property {
  type: "HOME" | "UNKNOWN";
  home?: API_ResourceProperty_Home;
  roomCount: number;
  guestSize: number;
  attributes?: number;
}

export interface API_ResourceProperty_Home {
  id: string;
  createdAt: string;
  updatedAt: string;
  decks?: string[];
}

export interface API_Location {}
