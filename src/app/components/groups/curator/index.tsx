import { getCuration } from "@/handlers/apis";
import Item from "@/components/elements/item";
import Link from "next/link";

const items = [
  {
    id: 1,
    name: "item 1",
    type: "experience",
    title: "item 1 title",
    description: "item 1 description",
    rating: 4.5,
    rate: 100,
    period: "daily",
  },
  {
    id: 2,
    name: "item 2",
    type: "story",
    title: "item 1 title",
    description: "item 1 description",
    rating: 4.5,
    rate: 100,
    period: "daily",
  },
  {
    id: 3,
    name: "item 3",
    type: "experience",
    title: "item 1 title",
    description: "item 1 description",
    rating: 4.5,
    rate: 100,
    period: "daily",
  },
];

// const data = require("../../../../mockdata/index.json");
export default async function Curator() {
  // console.log("data from json file: ", data.experiences[0].title);
  // console.log("data from json file: ", data);
  const curation = await getCuration({ id: "01H447TYV7EF2MA7GAS2TYM71T" });

  return (
    <div className="m-auto mt-8 max-w-md">
      <ul className="">
        {curation.items !== undefined && curation.items.length > 0 ? (
          curation.items.map((data, idx) => {
            return (
              <li key={idx} className="col-span-1 flex flex-col divide-y">
                <Link href={`/e/${data.id}`}>
                  {/* need to handle pages for different types of itmes */}
                  <Item
                    key={idx}
                    data={data}
                    // toggleModalFn={toggleModalFn}
                  />
                </Link>
              </li>
              // <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6 mb-8">
              //   {item.id}
              // </li>
            );
          })
        ) : (
          <li>{curation.errMsg}</li>
        )}
      </ul>
    </div>
  );
}
