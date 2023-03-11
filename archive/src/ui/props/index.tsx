import { Hit } from "react-instantsearch-core";

export interface ExperienceFields {
  name: string;
  rate: number;
  place: string;
}

export interface SearchProps {
  hits: Hit[];
  refine: (value: string) => void;
  currentRefinement: string;
}
