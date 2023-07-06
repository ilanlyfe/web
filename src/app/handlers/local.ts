import { JourneyData } from "@/interfaces";


export function localGetJourneys(journeyId: string): JourneyData {
  let jsnStr = localStorage.getItem(`journey_${journeyId}`);
  if (jsnStr === null) return {} as JourneyData;
  let data = JSON.parse(jsnStr);
  if (data === undefined) return {} as JourneyData;
  return data;
}
