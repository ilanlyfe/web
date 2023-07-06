import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { useState, useEffect } from "react";
import Modal from "@/components/groups/modal";
import Type, { TypeVariant, TypePricingType } from "@/components/core/type";
import {
  ExperienceData,
  JourneyData,
  Curation,
  ItemDataType,
} from "@/interfaces";
import { getJourneys } from "@/context/journeys";
import Map from "@/components/core/map";
import Media from "@/components/core/media";
import { getCuration } from "../api/curator/helper";
import JourneyFlowForm from "@/components/groups/forms/journey_flow";

export default function ItemPage({
  curation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isModalActive, setIsModalActive] = useState(false);
  const [journeys, setJourneys] = useState<JourneyData[]>([]);
  const [experience, setExperience] = useState<ExperienceData>(
    {} as ExperienceData,
  );

  const handleCurationLoad = async () => {
    try {
      let curation = await getCuration();
      for (const itemData of curation.items!) {
        if (itemData.type === ItemDataType.EXPERIENCE) {
          let data = itemData.instance as ExperienceData;
          console.log("setting experinece state");
          setExperience({
            id: itemData.id,
            description: data.description,
            media: data.media,
            rate: data.rate,
            title: data.title,
            reviews: data.reviews,
          });
        }
      }
    } catch (error) {
      console.error("error getting curation", error);
      return { props: { curation: {} as Curation } };
    }
  };

  handleCurationLoad();

  // const router = useRouter();
  // const id = router.query.id as string;

  // console.log("curation data from curator api", curation);
  // if (error) console.error("error from curator api", error);

  // TODO: this should come from the context of the current user
  console.log("right before useEffect hookk..... ");
  useEffect(() => {
    console.log("running useEffect hook.... ", curation);
    // if (curation && curation.items) {
    // }
  }, []);
  console.log("experience data: ", experience);
  return (
    <>
      {experience === undefined ? (
        <div>loading...</div>
      ) : (
        <div>
          {/* header */}
          {/* <div className="h-16 ">header</div> */}
          <div className="h-auto pt-16">
            {/* <Media media={experience.media} loading={true} /> */}
          </div>
          <div></div>
          <section className="mx-2 pt-2 h-auto">
            <Type variant={TypeVariant.TITLE} text="Amazing Villa" />
            <Type
              variant={TypeVariant.LIGHT}
              text="8 guests, 4 beds, 2 baths"
            />
            <Type
              variant={TypeVariant.LIGHT}
              text="426"
              pricingType={TypePricingType.PER_NIGHT}
            />
            4.5
            {/* rating: guest can open up for more details that will allow guests to view other guest activities */}
          </section>
          {/* amenities w/ show all modal (add safety stuff here) */}
          <section className="mx-2 pt-2 h-auto">
            <Type variant={TypeVariant.TITLE} text="Amenities" />
            This is some amenities that this property boasts.
          </section>

          {/* description w/ show more (modal?)*/}

          {/* loction/map */}
          {/* <Map center={locations[0]} locations={locations} /> */}
          {/* calendar:  */}
          {/* footer: call to action */}
          {/* reviews */}
          {/* policies (cancelation, checkin/out) */}
          {/* safety */}
          {/* similar items (experiences) */}
          <div className="flex justitfy-end fixed bottom-20  right-0 z-30 h-16 w-32 ">
            <div className="flex items-center box-border w-full mr-2">
              <button
                onClick={toggleModal}
                className="flex items-center justify-center rounded-lg py-3 px-8 h-auto w-full text-center bg-cyan-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal
        title={"Add to Journey"}
        isActive={isModalActive}
        toggleFn={toggleModal}
      >
        <JourneyFlowForm experience={experience} toggleModal={toggleModal} />
      </Modal>
    </>
  );

  // When a guest clicks on the add button, they will be prompted to either select
  // an existing journey or create a new one. Once they have compleded the create
  // journey flow, the experience will be added automatically.

  function toggleModal() {
    setIsModalActive(!isModalActive);
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get the curation id from the api
  return {
    paths: [
      {
        params: {
          name: "X01H1YGY1YM1EF1VZCGNS3856BB",
          cuat: "some-context",
        },
      }, // See the "paths" section below
      {
        params: {
          name: "X01H1YGY1YM1EF1VZCGNS3856BC",
          cuat: "some-context",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps<{
  curation: Curation;
}> = async (props) => {
  console.log("props from getStaticProps", props);
  try {
    let curation = await getCuration();
    return { props: { curation } };
  } catch (error) {
    console.error("error getting curation", error);
    return { props: { curation: {} as Curation } };
  }

  // const res = await fetch("/api/curator");
  // const curation = await res.json();
};

/**
 * when the guest decides to add an experience to a journey launch the modal
 *  - display the journeys
 *  - if no journeys exist, prompt the guest to create one
 *  - else the guest will choose a journey from the list
 *  - once the guest has selected a journey, the experience will be added to the journey
 *
 *  - after creating journey the experience that triggered the creation will be added to the journey.
 *  - the guest will be navigated back to the triggering experience where the add button will indicate
 *    the the experience was added to the journey (added vs add)
 *
 *
 *
 * */
