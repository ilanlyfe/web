// The curator component handles the display of curations provieded
// by the curation_service. Curations may be a collection
// of stories, guides, and experiences. The curator fetches content form the 
// service... 

import { useEffect, useState } from "react";
import { Persona, Curation } from "../../entities";
import { utils } from "@/utils";
import { GetCuration } from "../../../pages/api/internal/juvae";
import ItemComponent from "@/components/molecules/item";
import Loading from "@/components/molecules/loading";

export default function Curator() {
  // TODO: add context to this compenont that will house the history
  // of the user's behavior.
  const [loading, setLoading] = useState(true);
  const [curationHistory, setCurationHistory] = useState<Curation[]>([]);
  const [currentCuration, setCurrentCuration] = useState<Curation>();


  let persona: Persona = {
    limit: 20,
    // TODO: remove and import from current site actions
    // This will come from the react context of the 
    // current authenticated user.
  }
  
  async function fetchCuration() {
    try{
      const c = await GetCuration(persona);
      if (c !== undefined && c.items.length > 0) {
        setCurrentCuration(c); 
      }
    } catch(e) {
      console.log(e);
    }
  }

  // TODO: handle guests going back and forth between curations. 
  // If a guest goes back to a previous curation and clicks a different
  // item from the one that was previously clicked to create the current
  // curation history we will need to remove the curations that are
  // ahead of the current curation in the history list.
  function updateCurationHistory(curation: Curation) {
    let tempHistory = curationHistory;
    tempHistory.push(curation as Curation);
    setCurationHistory(tempHistory);
  }

  useEffect(() => {
    fetchCuration();
    if (currentCuration !== undefined)
      updateCurationHistory(currentCuration);
    
  }, [currentCuration, curationHistory]);

  return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                    Curations
                    {loading == false ? <Loading/> :
                     currentCuration !== undefined ? currentCuration.items.map((item) => (
                        <ItemComponent key={item.id} item={item} />
                    )) : 
                    null}
                </div>
            </div>
        </div>
    </div>
  );
};

function closeTheCuration() {
  utils.debugMsg("closing the curation...");
   // setActiveCuration([]);
 }

 function handleBack() {
   utils.debugMsg("back button clicked...");
   // setActiveCuration([]);
 }
 
 function handleNext() {
   utils.debugMsg("next button clicked...");
   // setActiveCuration([]);
 }
 
   // const maybeLoadMore = useInfiniteLoader(loader, {
  //   isItemLoaded: (index, items) => !!items[index],
  //   minimumBatchSize: limit,
  //   threshold: 3,
  // });