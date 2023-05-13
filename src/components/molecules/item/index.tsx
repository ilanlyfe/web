// The Curation component is the main component that will be used to display the 
// content on the screen. It will be responsible for fetching the content from
// from the server and parsing it out accross individual components Curation 
// components. 

import { useEffect, useState, FC } from "react";
import { ItemType, ItemProps, Item } from "../../../interfaces";
import Story from "./story";
import Experience from "./experience";
import Gem from "./gem";
import Guest from "./guest";
import Journey from "./journey";

const Item: FC<ItemProps> = ({item}) => {
  const [loading, setLoading] = useState(true);
  const [itemState, setItemState] = useState();
  useEffect(() => {
    if (item !== undefined) {
      setItemState(undefined);
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {renderItem(item)}
    </div>
    )

  
  
};

export default Item;

function renderItem(item: Item) {
  switch (item.type) {
    case ItemType.EXPERIENCE:
      return (
         <Experience data={item} />
         );
    case ItemType.GEM:
      return (
         <Gem data={item} />
         );
    case ItemType.STORY:
      return (
         <Story data={item} />
         );
    case ItemType.JOURNEY:
      return (
         <Journey data={item} />
         );
    case ItemType.GUEST:
      return (
         <Guest data={item} />
         );
    default: 
      return (
          <>
          <p className="for-debugging">
            -- No data returned -- 
          </p>
          </>

      );
  }
}
