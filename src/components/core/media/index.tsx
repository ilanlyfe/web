import { FC, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { Media } from "@/interfaces";

export interface CarouselOptions {
  loop?: boolean;
  loopMin?: number;
  loopMax?: number;
  spacing?: boolean;
  arrows?: boolean;
}
interface MediaProps {
  media: Media[];
  carouselOptions?: CarouselOptions;
}

const Media: FC<MediaProps> = ({ media, carouselOptions: co }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  if (co === undefined) {
    // Sets default options
    co = {
      loop: true,
      loopMin: 0,
      loopMax: 0,
      spacing: false,
      arrows: false,
    };
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: co.loop,
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider h-64">
          {media.map((m, idx) => (
            <div key={idx} className="keen-slider__slide">
              <div className="rounded-md mx-2 h-full">
                <Image src={m.srcUri} width={500} height={500} alt={m.alt!} />
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => {
                e.preventDefault();
                e.stopPropagation() || instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0 && !co.loop}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                  instanceRef.current.track.details.slides.length - 1 &&
                !co.loop
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots -mt-14 ">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot z-0" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <button onClick={props.onClick} className="testing-button">
      <svg
        className={`arrow ${
          props.left ? "arrow--left ml-2" : "arrow--right mr-2"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </button>
  );
}

export default Media;
