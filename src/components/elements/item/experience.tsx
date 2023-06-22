import { FC, useState, useEffect } from "react";
import Media from "@/components/core/media";
import { ExperienceData } from "@/interfaces";
import Type, { TypeVariant, TypePricingType } from "@/components/core/type";
// import useSWR from "swr";
// import { fetcher } from "@/utils/misc";
interface ExperienceProps {
  data: ExperienceData;
}
const Experience: FC<ExperienceProps> = ({ data }) => {
  // const [experience, setExperience] = useState<ExperienceData>();
  // const { data: curation, error } = useSWR<Curation>("/api/curator", fetcher);

  // console.log("curation data from curator api", curation);
  // if (error) console.error("error from curator api", error);

  // TODO: this should come from the context of the current user
  useEffect(() => {
    // if (curation && curation.items) {
    //   for (const itemData of curation.items) {
    //     switch (itemData.item) {
    //       case itemData as ExperienceType:
    //       case itemData as StoryType:
    //       default:
    //         console.log("doing nothing with this item");
    //     }
    //   }
    // }
  }, []);
  console.log("experience data: ", data);
  return (
    <div>
      <div className="h-auto pt-16">
        <Media media={data.media} />
      </div>
      <section className="mx-2 pt-2 h-auto">
        <Type variant={TypeVariant.TITLE} text={data.title} />
        <Type variant={TypeVariant.LIGHT} text="8 guests, 4 beds, 2 baths" />
        <Type
          variant={TypeVariant.LIGHT}
          text="426"
          pricingType={TypePricingType.PER_NIGHT}
        />
        4.5
        {/* rating: guest can open up for more details that will allow guests to view other guest activities */}
      </section>
    </div>
  );
};

export default Experience;
