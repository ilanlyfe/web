import { FC, useState, useEffect } from "react";
import useSWR from "swr";
import Media from "@/components/core/media";
import {
  ItemData,
  ItemDataType,
  Curation,
  ExperienceType,
  StoryType,
} from "@/interfaces";
import { fetcher } from "@/utils/misc";
import Type, { TypeVariant, TypePricingType } from "@/components/core/type";
interface ExperienceProps {
  data: ItemData;
}
const Experience: FC<ExperienceProps> = ({}) => {
  const [experience, setExperience] = useState<ItemData>();
  const [story, setStory] = useState<StoryType>();
  const { data: curation, error } = useSWR<Curation>("/api/curator", fetcher);

  // console.log("curation data from curator api", curation);
  // if (error) console.error("error from curator api", error);

  // TODO: this should come from the context of the current user
  useEffect(() => {
    if (curation && curation.items) {
      for (const itemData of curation.items) {
        switch (itemData.item) {
          case itemData as ExperienceType:
          case itemData as StoryType:
          default:
            console.log("doing nothing with this item");
        }

        if (itemData.type === ItemDataType.EXPERIENCE) {
          setExperience({
            id: itemData.id,
            description: itemData.description,
            type: itemData.type,
            media: itemData.media,
            rate: itemData.rate,
            title: itemData.title,
            reviews: itemData.reviews,
            createdAt: itemData.createdAt,
            creator: itemData.creator,
            item: {
              id: itemData.item.id,
            },
          });
        }
      }
    }
  }, []);
  return (
    <div>
      <div className="h-auto pt-16">
        {experience === undefined ? (
          <>loading media...</>
        ) : (
          <Media media={experience.media} />
        )}
      </div>
      <section className="mx-2 pt-2 h-auto">
        <Type variant={TypeVariant.TITLE} text="Amazing Villa" />
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
