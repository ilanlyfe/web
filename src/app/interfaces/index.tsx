export interface GuestContext {
  id: string;
}

export interface Curation {
  id: string;
  prevId?: string;
  nextId?: string;
  timeViewed?: number;
  isLead?: boolean;
  items?: ItemData[]; // FIXME: this needs to be a required prop
  errMsg?: string;
}

export interface ItemData {
  type: ItemDataType;
  id: string;
  active?: boolean;
  creator?: Guest | SystemEntity;
  createdAt: number;
  experience?: ExperienceData;
  story?: StoryData;
  journey?: JourneyData;
  // title: string;
  // name?: string;
  // href?: string;
  // rate: number;
  // description: string;
  // reviews?: ReviewData[];
  // content?: any;
  // media: MediaData[];
  // type: ItemDataType;
  // itemType?: ExperienceData; // testing this approach out...
  // location?: Location;
  // item: ExperienceType; // testing this approach out...
}

export enum ItemDataType {
  STORY = "story",
  EXPERIENCE = "experience",
  JOURNEY = "journey",
  GUIDE = "guide",
  GEM = "gem",
  GUEST = "guest",
}

export interface JourneyData {
  id: string;
  name: string;
  description: string;
  creator: Guest;
  startDate: Date;
  endDate: Date;
  total: number;
  experiences?: ExperienceData[];
  //   permissions?: Permission[];
}

export interface Guest {
  id: string;
  userName: string;
  email?: string;
  isLoggedIn?: boolean;
  login?: string;
  avatarUrl: string;
}

export interface SystemEntity {
  id: string;
}

export interface StoryData {
  id: string;
  media: MediaData[];
  title: string;
  // name?: string;
  creator: Guest;
  // href?: string;
  points: number;
  createdAt: string;
  description: string;
  reviews?: ReviewData[];
  // content?: any;
}

// export interface ExperienceData {
//   id: string;
//   media: MediaData[];
//   title: string;
//   description: string;
//   rate: number;
//   // // scoring
//   reviews?: ReviewData[];
// }

export interface ReviewData {
  id: string;
  creator: Guest;
  content: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  shares: number;
}

export interface MediaData {
  id?: string;
  type: MediaType;
  srcUri: string;
  alt: string;
}

export enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
}

export interface Session {
  token: string;
  guest: Guest;
  // error?: AuthError;
}

export interface Location {
  id: string;
  lat: number;
  tags: string[];
  lng: number;
  elevation?: string;
  createdAt: number;
  updatedAt: number;
}

// IN PROGRESS

export interface ExperienceData {
  id: string;
  parentId: string;
  relationToParent: ResourceRelationshipToParent;
  createdAt: number;
  updatedAt: number;
  location: string;
  address: string;
  calendarIds: string[];
  resourceType: ExperienceType;
  property?: ResourcePropertyInstance;
  instance?:
    | Resource_Property
    | Resource_Vessel
    | Resource_Vehicle
    | Resource_Aircraft
    | Resource_Crew
    | Resource_Equipment
    | Resource_Space;
  updatedBy: string;
  heroImage: string;
  images: MediaData[];
  title: string;
  shortDescription: string;
  regionId: string;
  rate?: number;
  errMsg: string;
}

export enum ResourceRelationshipToParent {
  UNKNOWN = "RELATIONSHIP_UNSPECIFIED",
}
export interface Address {
  id: string;
}

export enum ExperienceType {
  UNSPECIFIED = "EXPERIENCE_TYPE_UNSPECIFIED",
  STAY = "EXPERIENCE_TYPE_STAY",
  YACHT_CHARTER = "EXPERIENCE_TYPE_YACHT_CHARTER",
  ACTIVITY = "EXPERIENCE_TYPE_ACTIVITY",
  CAR_RENTAL = "EXPERIENCE_TYPE_CAR_RENTAL",
  TRANSPORTATION = "EXPERIENCE_TYPE_TRANSPORTATION",
  EVENTS = "EXPERIENCE_TYPE_EVENTS",
  FOOD = "EXPERIENCE_TYPE_FOOD",
}

export enum ExperienceStayType {
  UNSPECIFIED = "EXPERIENCE_STAY_TYPE_UNSPECIFIED",
  YACHT = "EXPERIENCE_STAY_TYPE_YACHT",
  HOME = "EXPERIENCE_STAY_TYPE_HOME",
}

export interface ResourcePropertyInstance {
  type: ExperienceType;
  home?: ResourceProperty_Home;
  roomCount: number;
  guestSize: number;
  attributes?: number;
}
export interface ResourceProperty_Home {
  id: string;
  createdAt: string;
  updatedAt: string;
  decks?: string[];
}

export interface Resource_Property {
  type: ExperienceType;
  roomCount: number;
  guestSize: number;
  // attributes:number;
}
export interface Resource_Vessel {}
export interface Resource_Vehicle {}
export interface Resource_Aircraft {}
export interface Resource_Crew {}
export interface Resource_Equipment {}
export interface Resource_Space {}

export interface AuthModalProps {}

export interface SignInProps {}

export interface SignUpProps {
  open: boolean;
  toggleModal: () => void;
}
