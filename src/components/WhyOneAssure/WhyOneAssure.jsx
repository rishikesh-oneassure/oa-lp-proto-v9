import {
  PiScales,
  PiSignature,
  PiUserGear,
  PiUserGearThin,
} from "react-icons/pi";
import SectionContainerLarge from "../globals/SectionContainerLarge";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  HeadingSmall,
  HeadingXLarge,
} from "../UI/Typography";
import { LiaHandshake } from "react-icons/lia";

// Because we don't just sell insurance. We walk with you, every step of the way.

export default function WhyOneAssure() {
  return (
    <SectionContainerLarge className="flex flex-col items-center text-center mb-12 md:mb-20">
      <div className="flex flex-col items-center gap-0.5">
        <BodySmall
          className={"uppercase text-primary-800 text-center tracking-widest"}
          weight="semibold"
        >
          &mdash; Why Us
        </BodySmall>
        <HeadingXLarge className={"text-neutral-1100"} weight="medium">
          Why OneAssure
        </HeadingXLarge>
      </div>
      <BodyLarge className={"text-neutral-900 mt-2"}>
        Because we don't just sell insurance. We walk with you, every step of
        the way
      </BodyLarge>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-center mt-6">
        <div className="col-span-1 flex flex-col items-center p-4 rounded-2xl border border-primary-300 shadow-lg">
          <span className="w-10 aspect-square flex items-center justify-center rounded-full bg-primary-200 mb-2">
            <PiScales className="w-6 h-6 text-primary-800" />
          </span>
          <HeadingSmall
            as="span"
            weight="semibold"
            className={"text-neutral-900"}
          >
            Independent
          </HeadingSmall>
          <BodyMedium>Plans compared across insurers</BodyMedium>
        </div>
        <div className="col-span-1 flex flex-col items-center p-4 rounded-2xl border border-primary-300 shadow-lg">
          <span className="w-10 aspect-square flex items-center justify-center rounded-full bg-primary-200 mb-2">
            <PiUserGear className="w-6 h-6 text-primary-800" />
          </span>
          <HeadingSmall
            as="span"
            weight="semibold"
            className={"text-neutral-900"}
          >
            Personalised
          </HeadingSmall>
          <BodyMedium>For your needs and budget</BodyMedium>
        </div>
        <div className="col-span-1 flex flex-col items-center p-4 rounded-2xl border border-primary-300 shadow-lg">
          <span className="w-10 aspect-square flex items-center justify-center rounded-full bg-primary-200 mb-2">
            <PiSignature className="w-6 h-6 text-primary-800" />
          </span>
          <HeadingSmall
            as="span"
            weight="semibold"
            className={"text-neutral-900"}
          >
            Claims Handled With You
          </HeadingSmall>
          <BodyMedium>Filing &mdash; follow-ups &mdash; settlement</BodyMedium>
        </div>
        <div className="col-span-1 flex flex-col items-center p-4 rounded-2xl border border-primary-300 shadow-lg">
          <span className="w-10 aspect-square flex items-center justify-center rounded-full bg-primary-200 mb-2">
            <LiaHandshake className="w-6 h-6 text-primary-800" />
          </span>
          <HeadingSmall
            as="span"
            weight="semibold"
            className={"text-neutral-900"}
          >
            Health & Life Specialists
          </HeadingSmall>
          <BodyMedium>Our dedicated claims team</BodyMedium>
        </div>
      </div>
    </SectionContainerLarge>
  );
}
