import { MediaData, Location } from "@/interfaces";

export interface Resource {
  id: string;
  parent_id: string; // ?? why the need for a parent?
  relation_to_parent: string;
  location: Location;
  region: Region;
  title: string;
  media: MediaData[];
  oneof: Property | Vessel | Vehicle; // TODO: add later on| Aircraft | Crew | Equipment | Space;
}

export enum RateInterval {
  // Maybe users will need to
  DAILY = "daily", // same as nightly
  HOURLY = "HOURLY",
}

export interface Property {
  instance: PropertyHome;
}

export interface PropertyHome {
  rooms: Room[];
  baths: Bath[];
  amenities: Amenity[];
  rules: Rule[];
  rates: Rate[];
}

export interface Room {
  id: string;
}

export interface Bath {
  id: string;
}

export interface Amenity {
  id: string;
}

export interface Rule {
  id: string;
}

export interface Rate {
  id: string;
  partnerId: string;
  experienceId: string;
  amount: number;
  currency: Currency;
  interval: RateInterval;
}

export enum Currency {
  USD = "USD",
  CAD = "CAD",
}

export interface Vehicle {
  mileage: number;
}

export interface Vessel {
  type: VesselType;
  options: VesselOptions;
}

export enum VesselType {
  SAILBOAT = "SAILBOAT",
}

export enum VesselOptions {
  FISHING = "fishing",
}

export interface Region {}
