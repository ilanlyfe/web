import { getItem } from "@/handlers/apis";
import PageLayout from "./item";
// import JourneyFlowForm from "@/components/groups/forms/journey_flow";

export default async function ItemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await getItem(id);

  //   const [isModalActive, setIsModalActive] = useState(false);
  //   const [experience, setExperience] = useState<ExperienceData>(
  // {} as ExperienceData,
  //   );

  // const router = useRouter();
  // const id = router.query.id as string;

  // console.log("curation data from curator api", curation);
  // if (error) console.error("error from curator api", error);

  // let item: ItemData = {} as ItemData;
  console.log("experience data from x/page.tsx: ", item);
  return <PageLayout data={item} />;

  // When a guest clicks on the add button, they will be prompted to either select
  // an existing journey or create a new one. Once they have compleded the create
  // journey flow, the experience will be added automatically.
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   // get the curation id from the api
//   return {
//     paths: [
//       {
//         params: {
//           id: "X01H1YGY1YM1EF1VZCGNS3856BB",
//         },
//       }, // See the "paths" section below
//       {
//         params: {
//           id: "X01H1YGY1YM1EF1VZCGNS3856BC",
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   };
// };

//   // const res = await fetch("/api/curator");
//   // const curation = await res.json();
// };

// /**
//  * when the guest decides to add an experience to a journey launch the modal
//  *  - display the journeys
//  *  - if no journeys exist, prompt the guest to create one
//  *  - else the guest will choose a journey from the list
//  *  - once the guest has selected a journey, the experience will be added to the journey
//  *
//  *  - after creating journey the experience that triggered the creation will be added to the journey.
//  *  - the guest will be navigated back to the triggering experience where the add button will indicate
//  *    the the experience was added to the journey (added vs add)
//  *
//  *
//  *
//  * */

/**
 *
 *
 */
