// The curator api (api service) is responsible for returning a curation
// as well as inidividual items. It is expected that the body of the request
// will contain a context object that will be used to determine what items
// should be returned in a curation. In the case where a single item such as
// an experience is requested, the curator will return a single curation
// containing a single item; the experience.

import { NextApiRequest, NextApiResponse } from "next";
import { getMockCuration } from "./mocks";
import type { Curation, ResponseError } from "@/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curation | ResponseError>,
) {
  console.log("request send to /pages/api/cuator/[id]: ", req);
  const { query } = req;
  const { id } = query;
  const curation = getMockCuration(); // TODO: repalce with real curation

  // User with id exists
  return curation
    ? res.status(200).json(curation)
    : res.status(404).json({ message: `Curation with id: ${id} not found.` });
}
