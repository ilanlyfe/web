"use client";
import { FC, useState } from "react";

import Button, { ButtonVariant } from "@/components/core/button";
import Type, { TypeVariant, TypePricingType } from "@/components/core/type";
import { ItemData, ExperienceData } from "@/interfaces";
import Modal from "@/components/groups/modal";
import Map from "@/components/elements/map";
import Media from "@/components/elements/media";
import JourneyFlowForm from "@/components/groups/forms/journey_flow";

interface ItemPageProps {
  data: ItemData;
}
const ItemPageLayout: FC<ItemPageProps> = ({ data }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  let images = data.experience?.images;
  let title = data.experience?.title;

  return (
    <div className="hello">
      {data === undefined ? <div>loading...</div> : null}
      {/* header */}
      {/* <div className="h-16 ">header</div> */}
      <section className="h-auto pt-16">
        {images === undefined || images.length < 1 ? (
          <div>loading...</div>
        ) : (
          <Media media={data.experience!.images} />
        )}
      </section>
      <section className="mx-2 pt-2 h-auto">
        {title === undefined ? (
          <div>loading...</div>
        ) : (
          <Type variant={TypeVariant.TITLE} text={title} />
        )}
        <Type
          variant={TypeVariant.LIGHT}
          text={`${data.experience?.property?.guestSize} guests 
            ${data.experience?.property?.roomCount} beds 
            ${data.experience?.property?.roomCount} baths `}
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
          <Button
            onClick={toggleModal}
            variant={ButtonVariant.PRIMARY}
            text="Add"
          />
        </div>
      </div>

      <Modal
        title={"Add your experience to a journey"}
        isActive={isModalActive}
        toggleFn={toggleModal}
      >
        <JourneyFlowForm
          experience={data.experience!}
          toggleModal={toggleModal}
        />
      </Modal>
    </div>
  );

  function toggleModal() {
    setIsModalActive(!isModalActive);
  }
};

export default ItemPageLayout;
