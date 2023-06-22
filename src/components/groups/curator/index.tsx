// The curator component handles the display of curations provieded
// by the curation_service. Curations may be a collection
// of stories, guides, and experiences. The curator fetches content form the
// service...
import Link from "next/link";
import { useEffect, useState } from "react";
import { Persona, Curation } from "@/interfaces";
import { debugMsg } from "@/utils/misc";
import { getCuration } from "@/pages/api/curator/helper";
import Item from "@/components/elements/item";
import Loading from "@/components/groups/loading";
import Modal from "../modal";
import QueryComponent from "@/components/elements/query";

export default function Curator() {
  const [loading, setLoading] = useState(false); // TODO:
  const [modalActive, setModalActive] = useState(false);
  const [curationHistory, setCurationHistory] = useState<Curation[]>([]);
  const [currentCuration, setCurrentCuration] = useState<Curation>();

  let persona: Persona = {
    limit: 20,
    // TODO: remove and import from current site actions
    // This will come from the react context of the
    // current authenticated user.
  };

  async function handleSetCurrentCuration() {
    try {
      let curation = await getCuration();
      if (curation !== undefined) {
        setCurrentCuration(curation);
      }
    } catch (e) {
      console.error(e);
    }
  }

  function updateCurationHistory(curation: Curation) {
    let tempHistory = curationHistory;
    tempHistory.push(curation as Curation);
    setCurationHistory(tempHistory);
  }

  useEffect(() => {
    if (currentCuration === undefined) handleSetCurrentCuration();

    // updateCurationHistory(currentCuration);
  }, []);

  function onClick() {
    debugMsg("clicked to expand");
    setModalActive(!modalActive);
  }
  function toggleModalFn() {
    debugMsg("clicked to expand");
    setModalActive(!modalActive);
  }
  if (currentCuration != undefined) console.log(currentCuration!.items);
  return (
    <div className="mx-auto max-w-xl">
      {loading == true ? (
        <Loading />
      ) : (
        <div className="mx-auto max-w-xl lg:max-w-4x">
          <QueryComponent />
          <div className="space-y-20 lg:space-y-20">
            <ul className="">
              {currentCuration !== undefined &&
              currentCuration.items !== undefined
                ? currentCuration.items.map((data, idx) => (
                    <li key={idx} className="col-span-1 flex flex-col divide-y">
                      <Link href={`/item/${data.id}`}>
                        {/* need to handle pages for different types of itmes */}
                        <Item
                          key={idx}
                          data={data}
                          // toggleModalFn={toggleModalFn}
                        />
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      )}
      {/* this may have to go into the item component so that it can lazy load data below the fold.  */}
      <Modal
        // isActive={currentCuration !== undefined}
        isActive={modalActive}
        toggleFn={toggleModalFn}
      >
        {/* profile options  */}
        <div className="h-full">hello this is a modal</div>
      </Modal>
    </div>
  );
}
function closeTheCuration() {
  debugMsg("closing the curation...");
  // setActiveCuration([]);
}

function handleBack() {
  debugMsg("back button clicked...");
  // setActiveCuration([]);
}

function handleNext() {
  debugMsg("next button clicked...");
  // setActiveCuration([]);
}

// const maybeLoadMore = useInfiniteLoader(loader, {
//   isItemLoaded: (index, items) => !!items[index],
//   minimumBatchSize: limit,
//   threshold: 3,
// });
