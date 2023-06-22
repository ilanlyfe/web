import type { Endpoints } from "@octokit/types";

// Data types
export interface ItemData {
  type: ItemDataType;
  id: string;
  active?: boolean;
  creator: Guest | SystemEntity;
  createdAt: string;
  href: string;
  instance: ExperienceData | JourneyData | StoryData;
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

export interface ExperienceData {
  id: string;
  media: MediaData[];
  title: string;
  description: string;
  rate: number;
  // // scoring
  reviews?: ReviewData[];
}

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
  alt?: string;
}

export enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
}

interface _CardProps {
  meta?: unknown;
  profile?: string;
  media?: string | { src: any; link: any }[];
  kind:
    | "reward"
    | "promo"
    | "story"
    | "experience"
    | "event"
    | "info"
    | "category";
}
export enum ItemDataType {
  STORY = "story",
  EXPERIENCE = "experience",
  JOURNEY = "journey",
  GUIDE = "guide",
  GEM = "gem",
  GUEST = "guest",
}

export interface AuthSession {
  token: string;
  user?: Guest;
  error?: AuthError;
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

export interface View {
  itemId: string;
  timeOnSuggeston: number; // seconds
}

export interface AuthModalProps {}

export interface SignUpProps {
  open: boolean;
  toggleModal: () => void;
}

export interface ForgotPasswordProps {}

export interface SignInProps {}

export interface Curation {
  id: string;
  prevId?: string;
  nextId?: string;
  timeViewed?: number;
  isLead?: boolean;
  items?: ItemData[]; // FIXME: this needs to be a required prop
}

export type Events =
  Endpoints["GET /users/{username}/events"]["response"]["data"];

export interface Session {
  token: string;
  guest: Guest;
  error?: AuthError;
}

interface AuthError {
  code: string;
  message: string;
}

export interface MessagesProps {
  messages: MessageProps[];
}

export interface MessageProps {
  userName: string;
  id: string;
  content: string;
}

export interface SearchProps {
  query: string;
}

export interface Location {
  lat: number;
  lng: number;
  altitude?: string;
  updatedAt: Date;
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
  permissions?: Permission[];
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  roles: Role[];
}

export interface Role {
  id: string;
  name: string;
}

export type ResponseError = {
  message: string;
};

export interface Persona {
  limit: number;
  guestContext?: string;
  behavior?: Behavior;
}

export interface Behavior {
  views: View[];
}

// Deprecate??

export type ExperienceType = {
  id: string;
  // active?: boolean;
  // media: Media[];
  // title: string;
  // name?: string;
  // href?: string;
  // rate: number;
  // description: string;
  // createdAt: string;
  // reviews?: ReviewData[];
  // creator: Guest | SystemEntity;
  // content?: any;
  // itemType?: Story | Experience; // testing this approach out...
  // location?: Location;
};

export type StoryType = {
  id: string;
};
