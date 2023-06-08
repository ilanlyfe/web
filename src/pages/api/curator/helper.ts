import path from "path";
import { promises as fs } from "fs";
import { Persona, Curation, ItemDataType, MediaType } from "@/interfaces";

const curation = {
  id: "curation-id",
  items: [
    {
      id: "01H1YGY1YM1EF1VZCGNS3856BC",
      title: "Boost your conversion rate",
      type: ItemDataType.STORY,
      href: "#",
      item: {
        id: "mock_id",
      },
      media: [
        {
          id: "uaalkdjfalskdjlfksa",
          type: MediaType.IMAGE,
          srcUri:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
          // alt?: string;
        },
      ],
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
      rate: 404004,
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      createdAt: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      creator: {
        id: "Michael Foster",
      },
    },
    {
      id: "01H1YGY1YM1EF1VZCGNS3856BD",
      title: "Boost your conversion rate",
      type: ItemDataType.STORY,
      href: "#",
      item: {
        id: "mock_id",
      },
      media: [
        {
          id: "uaalkdjfalskdjlfksa",
          type: MediaType.IMAGE,
          srcUri:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
          // alt?: string;
        },
      ],
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
      rate: 404004,
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      createdAt: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      creator: {
        id: "string;",
        userName: "string;",
        email: "string;",
        isLoggedIn: false,
        login: "string;",
        avatarUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
      },
    },
  ],
};

// Returns a curation of items based on the parameters passed in from the
// guest's context or Persona. In the event that no contxt is passed in, as
// this will be the case for the initial release, the curator (api service)
// will return a curation containing a list of items that it deems to be
// relevant to the guest.
export async function getCuration(ctx?: Persona): Promise<Curation> {
  if (ctx) console.log(ctx.limit); 

  try {
    // const jsonDirectory = path.join(process.cwd(), 'mock_curations.json');
    // const fileContents = await fs.readFile(jsonDirectory ,'utf8');

    //Return the content of the data file in json format
    // const nextItems = await getContent({ skip, limit, type: "story" });
    // if (nextItems.length > 0) setLocalStories((current) => [...current, ...nextItems]);

    /** TODO: Maybe add some logic that will make sure that the client has not accumulated too much content.
     * Essentially trim the localStories array if needed.
     * Keep in mind the the array should be looked at in three parts: initial load (middle but initially on top; index 0 - n),
     * scroll load (@ bottom of screen but top of array; index n+1 - n+1+skip), and the newpush (content pushed from the server:
     * spliced in @ index 0. )
     *
     * More than likely the Mosaic component will need to be completely rerendered so that the new array elements pushed from the
     * can be accounted for appropriately.
     */

    let params = {
      limit: 0,
      type: "story",
      from: "useEffect",
    };
    if (ctx) params.limit = ctx.limit;
    console.log("params: to refresh context.  ", params);
    // let curation = JSON.parse(fileContents);
    // let curation: Curation = JSON.parse('{}');
    // console.log("curation: ", curation);
    return curation;
    // return fileContents;

    // setLocalStories(await getContent(params)); ???
  } catch (error) {
    console.log(error);
    return {} as Curation;
  }
  // return new Promise(async (resolve, reject) => {

  // });
}
