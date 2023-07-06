import { FC } from "react";
import Media from "@/components/elements/media";
import Section from "@/components/core/section";
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
  return (
    <div className="m-auto">
      <Section>
        {/* <Media media={data.images} /> */}
      </Section>
      <Section>
        <Type variant={TypeVariant.TITLE} text={data.title} />
        <Type
          variant={TypeVariant.LIGHT}
          text={`${data.property!.roomCount} rooms · ${
            data.property!.roomCount
          } guests`}
        />
        <Type
          variant={TypeVariant.LIGHT}
          text={`$423 a night · $1,200 total`}
          pricingType={TypePricingType.PER_NIGHT}
        />
        {/* rating: guest can open up for more details that will allow guests to view other guest activities */}
      </Section>
    </div>
  );
};

export default Experience;
