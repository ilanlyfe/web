import { NextApiResponse, NextApiRequest } from "next";
import { getMockCuration } from "./mocks";
import { Curation } from "@/interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curation>,
) {
  console.log("request: ", req.body);
  const curation = getMockCuration(); // TODO: replace with real curation
  return res.status(200).json(curation);
}
