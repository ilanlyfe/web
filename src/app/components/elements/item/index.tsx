// The Curation component is the main component that will be used to display the
// content on the screen. It will be responsible for fetching the content from
// from the server and parsing it out accross individual components Curation
// components.

import { FC } from "react";
import { ItemData } from "@/interfaces";
import Story from "./story";
import Experience from "./experience";

export interface ItemProps {
  // data: ItemData;
  data: ItemData;
  expanded?: boolean;
  toggleModalFn?: () => void;
}

const Item: FC<ItemProps> = ({ data, expanded, toggleModalFn }) => {
  // const [loading, setLoading] = useState(true);
  // const [itemState, setItemState] = useState();

  const EXPANDED_ITEM_CLASSES = "w-full h-full";

  // useEffect(() => {
  //   if (data !== undefined) {
  //     setItemState(undefined);
  //     setLoading(false);
  //   }
  // }, [expanded]);

  return (
    <div
      // onClick={toggleModalFn} // this is for the modal that opens outside of this componenent.
      // may re-implement when the flow of the curator and history has been finalized.
      // TODO: create loading view
      className={`mx-auto w-full rounded-md mb-4 ${
        expanded ? EXPANDED_ITEM_CLASSES : ""
      }`}
    >
      {renderItem(data, expanded)}
    </div>
  );
};

export default Item;

function renderItem(data: ItemData, expanded: boolean | undefined) {
  if (data.experience !== undefined) {
    return <Experience data={data.experience} />;
  } else if (data.story !== undefined) {
    return <Story data={data.story} />;
  } else {
    return (
      <>
        <p className="for-debugging">-- No data returned --</p>
      </>
    );
  }

  // case ItemDataType.GEM:
  //   console.log("rendering gem");
  //   return <Gem data={data} expanded={expanded} />;
  // case ItemDataType.STORY:
  //   return <Story data={data} expanded={expanded} />;
  // case ItemDataType.JOURNEY:
  //   return <Journey data={data} />;
  // case ItemDataType.GUEST:
  //   return <Guest data={data} />;
}
