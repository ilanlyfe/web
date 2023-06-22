import path from "path";
import { promises as fs } from "fs";
import { Persona, Curation, ItemDataType, MediaType } from "@/interfaces";
import { off } from "process";
const onlineMediaUri =
  "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80";
const offlineMediaUri = "/wall.jpg";
const curation = {
  id: "01H1YGY1YM1EF1VXCGNS38AAAA",
  items: [
    {
      id: "01H1YGY1YM1EF1VZCGNS3856BX",
      type: ItemDataType.STORY,
      createdAt: "jan 27, 2023",
      href: "http://localhost:3000/story/sotry-id",
      creator: {
        id: "01H1YGY1YM1EF1VZCGNS3856BD",
        userName: "testing_local_tony",
        avatarUrl: "google.com",
      },
      instance: {
        id: "01H1YGY1YM1EF1VZCGNS3856BC",
        name: "sample name 1",
        title: "Boost your conversion rate today",
        points: 12345,
        createdAt: "jan 27, 2023",
        creator: {
          id: "01H1YGY1YM1EF1VZCGNS3856BD",
          userName: "testing_local_tony",
          avatarUrl: "google.com",
        },
        reviews: [
          {
            id: "01H1YGY1YM1EF1VZCGNS3856AC",
            creator: {
              id: "01H1YGY1YM1EF1VZCGNS3856BD",
              userName: "testing_local_tony",
              avatarUrl: "google.com",
            },
            content:
              "This is what i think about the time i went on a boat trip with @capt andy",
            likes: 123,
            dislikes: 22,
            shares: 2345,
            createdAt: "jan 27, 2023",
          },
        ],
        href: "http://localhost:3000",
        media: [
          {
            id: "uaalkdjfalskdjlfksa",
            type: MediaType.IMAGE,
            srcUri: offlineMediaUri,

            // alt?: string;
          },
        ],
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
        content:
          "This is some sample content about a time in St. John where my and a friend named mark had a great time out on the water with the fellas. The wifes wree there too!",
        imageUrl: offlineMediaUri,
      },
    },
    {
      id: "01H1YGY1YM1EF1VZCGNS3856BX",
      type: ItemDataType.EXPERIENCE,
      createdAt: "jan 27, 2023",
      href: "http://localhost:3000",
      creator: {
        id: "01H1YGY1YM1EF1VZCGNS3856BD",
        userName: "testing_local_tony",
        avatarUrl: "google.com",
      },
      instance: {
        id: "01H1YGY1YM1EF1VZCGNS3856BX",
        title: "Villa amazing",
        points: 12345,
        rate: 123456,
        description:
          "This is a beautiful home overlooking the tranquil waters of the Caribbean Sea.",
        reviews: [
          {
            id: "01H1YGY1YM1EF1VZCGNS3856AC",
            creator: {
              id: "01H1YGY1YM1EF1VZCGNS3856BD",
              userName: "testing_local_tony",
              avatarUrl: "google.com",
            },
            content:
              "This is what i think about the time i went on a boat trip with @capt andy",
            likes: 123,
            dislikes: 22,
            shares: 2345,
            createdAt: "jan 27, 2023",
          },
        ],

        media: [
          {
            id: "uaalkdjfalskdjlfksa",
            type: MediaType.IMAGE,
            srcUri: offlineMediaUri,
            // alt?: string;
          },
        ],
      },
    },
    {
      id: "01H1YGY1YM1EF1VZCGNS3856BX",
      type: ItemDataType.EXPERIENCE,
      createdAt: "jan 27, 2023",
      href: "http://localhost:3000",
      creator: {
        id: "01H1YGY1YM1EF1VZCGNS3856BD",
        userName: "testing_local_tony",
        avatarUrl: "google.com",
      },
      instance: {
        id: "01H1YGY1YM1EF1VZCGNS3856BX",
        title: "Seranusa",
        points: 12345,
        rate: 123456,
        description:
          "This is a beautiful home overlooking the tranquil waters of the Caribbean Sea.",
        reviews: [
          {
            id: "01H1YGY1YM1EF1VZCGNS3856AC",
            creator: {
              id: "01H1YGY1YM1EF1VZCGNS3856BD",
              userName: "testing_local_tony",
              avatarUrl: "google.com",
            },
            content:
              "This is what i think about the time i went on a boat trip with @capt andy",
            likes: 123,
            dislikes: 22,
            shares: 2345,
            createdAt: "jan 27, 2023",
          },
        ],

        media: [
          {
            id: "uaalkdjfalskdjlfksa",
            type: MediaType.IMAGE,
            srcUri: offlineMediaUri,
            // alt?: string;
          },
        ],
      },
    },
    {
      id: "01H1YGY1YM1EF1VZCGNS3856FGE",
      type: ItemDataType.EXPERIENCE,
      createdAt: "jan 27, 2023",
      href: "http://localhost:3000",
      creator: {
        id: "01H1YGY1YM1EF1VZCGNS3856BD",
      },
      instance: {
        id: "01H1YGY1YM1EF1VZCGNS3856BX",
        title: "Pink Conch",
        points: 12345,
        rate: 123456,
        description:
          "This is a beautiful home overlooking the tranquil waters of the Caribbean Sea.",
        reviews: [
          {
            id: "01H1YGY1YM1EF1VZCGNS3856AC",
            creator: {
              id: "01H1YGY1YM1EF1VZCGNS3856BD",
              userName: "testing_local_tony",
              avatarUrl: "google.com",
            },
            content:
              "This is what i think about the time i went on a boat trip with @capt andy",
            likes: 123,
            dislikes: 22,
            shares: 2345,
            createdAt: "jan 27, 2023",
          },
        ],

        media: [
          {
            id: "uaalkdjfalskdjlfksa",
            type: MediaType.IMAGE,
            srcUri: offlineMediaUri,
            // alt?: string;
          },
        ],
      },
    },
    {
      id: "01H1YGY1YM1EF1VZCGNS3856FGE",
      type: ItemDataType.EXPERIENCE,
      createdAt: "jan 27, 2023",
      href: "http://localhost:3000",
      creator: {
        id: "01H1YGY1YM1EF1VZCGNS3856BD",
      },
      instance: {
        id: "01H1YGY1YM1EF1VZCGNS3856BX",
        title: "Mistral",
        points: 12345,
        rate: 123456,
        description:
          "This is a beautiful home overlooking the tranquil waters of the Caribbean Sea.",
        reviews: [
          {
            id: "01H1YGY1YM1EF1VZCGNS3856AC",
            creator: {
              id: "01H1YGY1YM1EF1VZCGNS3856BD",
              userName: "testing_local_tony",
              avatarUrl: "google.com",
            },
            content:
              "This is what i think about the time i went on a boat trip with @capt andy",
            likes: 123,
            dislikes: 22,
            shares: 2345,
            createdAt: "jan 27, 2023",
          },
        ],

        media: [
          {
            id: "uaalkdjfalskdjlfksa",
            type: MediaType.IMAGE,
            srcUri: offlineMediaUri,
            // alt?: string;
          },
        ],
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
    // console.log("func.getCuration -> params: to refresh context.  ", params);
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

/**
 * 
 * 
 *  {
      id: "01H1YGY1YM1EF1VZCGNS3856BC",
      type: ItemDataType.STORY,
      createdAt: "jan 27, 2023",
      creator: {
        id: "01H1YGY1YM1EF1VZCGNS3856BD",
        userName: "testing_local_tony",
        avatarUrl: "google.com",
      },
      instance: {
        id: "01H1YGY1YM1EF1VZCGNS3856BC",
        name: "sample name 1",
        title: "Boost your conversion rate",
        points: 12345,
        reviews: [
          {
            id: "01H1YGY1YM1EF1VZCGNS3856AC",
            creator: {
              id: "01H1YGY1YM1EF1VZCGNS3856BD",
              userName: "testing_local_tony",
              avatarUrl: "google.com",
            },
            content:
              "This is what i think about the time i went on a boat trip with @capt andy",
            likes: 123,
            dislikes: 22,
            shares: 2345,
          },
        ],
        href: "http://localhost:3000",
        media: [
          {
            id: "uaalkdjfalskdjlfksa",
            type: MediaType.IMAGE,
            srcUri:
              offlineMediaUri,
            // alt?: string;
          },
        ],
        description:
          "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
        content:
          "This is some sample content about a time in St. John where my and a friend named mark had a great time out on the water with the fellas. The wifes wree there too!",
        imageUrl:
          offlineMediaUri,
      },
    },
    
 */
