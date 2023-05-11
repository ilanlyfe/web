/*The Item comoponent diplays content based on that data passed to it. I.e. stories, bookable items, events and other 
objects */
import Link from "next/link";
import moment from "moment";
import { useEffect } from "react";
// import Media from "../../Bits/Carousel";
import Image from "next/image"
import clsx from "clsx";

// const { _item_img_wrap, _item_media_section } = styles;
export default function OpenStory({ story, close }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    let parent = document.querySelector(".x123").parentElement;

    while (parent) {
      const hasOverflow = getComputedStyle(parent).overflow;
      if (hasOverflow !== "visible") {
        console.log(hasOverflow, parent);
      }
      parent = parent.parentElement;
    }
  });
  if (1)
    return (
      <div>
        This is a story
        </ div>
    );

  return (
    <a data-key="key" onClick={(e) => console.log(e)} >
      click the link
    </a>
  );
}
