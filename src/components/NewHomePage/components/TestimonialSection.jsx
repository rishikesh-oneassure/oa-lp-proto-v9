import SectionContainerLarge from "@/components/globals/SectionContainerLarge";
import SectionContainerMedium from "@/components/globals/SectionContainerMedium";
import { BodySmall, HeadingXLarge } from "@/components/UI/Typography";
import { useEffect, useRef, useState } from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

const SLOT_HEIGHT = 78;

const PILL_TYPE = "text-[0.625rem]/[0.875rem] md:text-[1rem]/[1.5rem]";

function positionStyles(position) {
  const base =
    "transition-[opacity,transform,color,background-color] duration-1000 ease-in-out";

  switch (position) {
    case 1:
      return `${base} scale-[0.97] text-primary-50 font-medium opacity-60 ${PILL_TYPE}`;
    case 2:
      return `${base} scale-100 bg-secondary-400 font-medium text-white opacity-100 ${PILL_TYPE}`;
    case 3:
      return `${base} scale-[0.97] text-primary-50 font-medium opacity-60 ${PILL_TYPE}`;
    default:
      return `${base} opacity-0 ${PILL_TYPE}`;
  }
}

const TestimonialSection = ({ story }) => {
  const storyPoints = story.points;
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % storyPoints.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [storyPoints.length]);

  useEffect(() => {
    previousIndex.current = currentIndex;
  }, [currentIndex]);

  return (
    <div className="ml-[calc(50%-50vw)]! mr-[calc(50%-50vw)]! py-12 md:py-32 w-screen bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/family-bg-img.jpg')] bg-cover bg-top mb-12 md:mb-20">
      <div className="mb-0 w-full overflow-hidden md:mb-0">
        <SectionContainerMedium className="flex flex-col !mb-0 !px-0">
          <div className="flex flex-col items-center text-center">
            <BodySmall
              className={"uppercase tracking-widest text-primary-300"}
              weight="semibold"
            >
              &mdash; Testimonials
            </BodySmall>
            <HeadingXLarge
              className="flex w-full items-center justify-center gap-6 text-center text-neutral-100"
              weight="medium"
            >
              {story.title}
            </HeadingXLarge>
          </div>

          <SectionContainerLarge className="overflow-hidden !mb-0 !px-0">
            <div
              className="relative"
              style={{ height: SLOT_HEIGHT * storyPoints.length }}
            >
              {storyPoints.map((point, index) => {
                const relativePosition =
                  (index - currentIndex + storyPoints.length) %
                  storyPoints.length;
                const position = relativePosition + 1;
                const wrapped =
                  previousIndex.current !== currentIndex &&
                  relativePosition === storyPoints.length - 1;

                return (
                  <div
                    key={index}
                    className={`absolute right-0 left-0 flex items-center justify-center ${wrapped ? "" : "transition-transform duration-1000 ease-in-out"}`}
                    style={{
                      height: SLOT_HEIGHT,
                      transform: `translateY(${relativePosition * SLOT_HEIGHT}px)`,
                    }}
                  >
                    <div
                      className={`${positionStyles(position)} flex w-full items-center gap-3 rounded-full px-4 py-3 text-center md:gap-4 md:px-6`}
                    >
                      <span
                        className={`flex aspect-square w-8 shrink-0 items-center justify-center rounded-full bg-white/70 transition-opacity duration-1000 md:w-12 ${
                          position === 2 ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden={position !== 2}
                      >
                        <BiSolidQuoteRight className="h-4 w-4 text-secondary-400 md:h-5 md:w-5" />
                      </span>
                      <span className="min-w-0 flex-1">{point}</span>
                      <span
                        className="aspect-square w-8 shrink-0 md:w-12"
                        aria-hidden
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionContainerLarge>
        </SectionContainerMedium>
      </div>
    </div>
  );
};

export default TestimonialSection;
