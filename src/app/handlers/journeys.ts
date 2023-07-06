import {
  JourneyData,
  ExperienceData,
  MediaType,
  ExperienceType,
  ResourceRelationshipToParent,
} from "@/interfaces";
import { API_ResponseV2 } from "@/interfaces/api_types";
import { getJourneys } from "@/handlers/apis";

export type ApiResponse<T> = {
  data?: T;
  error: string;
  err?: TypeError;
};

export async function getMockJourneys(): Promise<
  API_ResponseV2<JourneyData[]>
> {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          id: "01H49ZK8WQ6H3C543FCZCX20RY",
          name: "the tenth",
          description: "this is the tenth description",
          startDate: new Date("2023-07-12T00:00:00.000Z"),
          endDate: new Date("2023-07-28T00:00:00.000Z"),
          total: 0,
          creator: {
            id: "01H253Q3MEB4TV43Q9ZWXTMWPC",
            userName: "testing_tony_local",
            avatarUrl: "https://i.pravatar.cc/150?img=3",
          },
          experiences: [
            {
              errMsg: "",
              id: "01GT2A70WFR6EKA7WVFM4Q5G3G",
              regionId: "",
              parentId: "hello",
              title: "Casa de Suenos",
              shortDescription:
                "This home has some of the most amazing views of the South Shore of St. John.",
              heroImage:
                "https://images.ctfassets.net/g5nrk2qtffpm/4CwuDEF9owgz1ubssbRswb/ea07a145936bb9d4c23147a9e29be256/DSC_0013a-1.jpg",
              images: [
                {
                  id: "imageid_0",
                  srcUri:
                    "https://images.ctfassets.net/g5nrk2qtffpm/5FsBGWsKx1nCM7DeZRFi1I/246c1e62e679453cd2faf23b9e412bbe/CasaDeSuenosGreatRoom2-2-1500x981.jpg",
                  type: MediaType.IMAGE,
                  alt: "sample alt text",
                },
                {
                  id: "imageid_1",
                  srcUri:
                    "https://images.ctfassets.net/g5nrk2qtffpm/HdQK5O6T4DsRKa37wHo8i/6db50ca1f5b01672b217e34a7566b69f/CasaDeSuenosGreatRoom1-2-1500x1000.jpg",
                  type: MediaType.IMAGE,
                  alt: "sample alt text",
                },
                {
                  id: "imageid_2",
                  srcUri:
                    "https://images.ctfassets.net/g5nrk2qtffpm/6QgFkUPmAo5d17yN4z8Uir/221a83906ab1e5379160bee5b84d6a80/cds11-1.jpg",
                  type: MediaType.IMAGE,
                  alt: "sample alt text",
                },
                {
                  id: "imageid_3",
                  srcUri:
                    "https://images.ctfassets.net/g5nrk2qtffpm/jTBpNAr76JtlnodeAY6Dj/8deab2e61c0b3e7c97a929d082c9d3e7/CasaDeSuenosCottageBR-2-1500x1037.jpg",
                  type: MediaType.IMAGE,
                  alt: "sample alt text",
                },
                {
                  id: "imageid_4",
                  srcUri:
                    "https://images.ctfassets.net/g5nrk2qtffpm/4nBF5Oair56jLwgRgDWJL/b86d3a34430017acc340b7d0e7ee4d3d/CasaDeSuenosBR4-2-1500x1008.jpg",
                  type: MediaType.IMAGE,
                  alt: "sample alt text",
                },
              ],
              resourceType: ExperienceType.STAY,
              address: "null",
              location: "somewhere in the world",
              calendarIds: [],
              updatedAt: 0,
              updatedBy: "tony hill",
              relationToParent: ResourceRelationshipToParent.UNKNOWN,
              createdAt: 0,
              property: {
                type: ExperienceType.STAY,
                roomCount: 3,
                guestSize: 6,
                home: {
                  id: "homeid_1",
                  createdAt: "0",
                  updatedAt: "0",
                  decks: [],
                },
              },
            },
          ],
        },
      ],
    });
  });
}
