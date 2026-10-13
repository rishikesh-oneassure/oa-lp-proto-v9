import { CiBoxList, CiCalendar, CiCircleCheck, CiPhone } from "react-icons/ci";
import SectionContainerLarge from "../globals/SectionContainerLarge";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  HeadingSmall,
  HeadingXLarge,
} from "../UI/Typography";

export default function WhatToExpect() {
  return (
    <SectionContainerLarge className="flex flex-col items-center gap-2 text-center mb-12 md:mb-20">
      <div className="flex flex-col items-center gap-0.5">
        <BodySmall
          className={"uppercase text-primary-800 text-center tracking-widest"}
          weight="semibold"
        >
          &mdash; We Deliver
        </BodySmall>
        <HeadingXLarge className={"text-neutral-1100"} weight="medium">
          What to Expect
        </HeadingXLarge>
      </div>
      <BodyLarge className={"text-neutral-900"}>
        Making the process simple and straightforward for you. We do the heavy
        lifting
      </BodyLarge>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 md:justify-between mt-4">
        <div className="flex flex-col gap-2 items-center border-y border-neutral-300 py-4">
          <span className="flex items-center justify-center w-14 aspect-square rounded-full bg-primary-200">
            <CiCalendar className="w-8 h-8 text-primary-800" />
          </span>
          <HeadingSmall className={"text-neutral-900"} weight="semibold">
            Book a Slot
          </HeadingSmall>
          <BodyMedium className={"text-neutral-900"}>
            It only takes a minute
          </BodyMedium>
        </div>

        <div className="flex flex-col gap-2 items-center border-y border-neutral-300 py-4 px-4">
          <span className="flex items-center justify-center w-14 aspect-square rounded-full bg-primary-200">
            <CiPhone className="w-8 h-8 text-primary-800" />
          </span>
          <HeadingSmall className={"text-neutral-900"} weight="semibold">
            Talk to an Expert
          </HeadingSmall>
          <BodyMedium className={"text-neutral-900"}>
            A short, free, and insightful call
          </BodyMedium>
        </div>

        <div className="flex flex-col gap-2 items-center border-y border-neutral-300 py-4 px-4">
          <span className="flex items-center justify-center w-14 aspect-square rounded-full bg-primary-200">
            <CiBoxList className="w-8 h-8 text-primary-800" />
          </span>
          <HeadingSmall className={"text-neutral-900"} weight="semibold">
            Get Shortlisted Plans
          </HeadingSmall>
          <BodyMedium className={"text-neutral-900"}>
            Find plans tailored for you
          </BodyMedium>
        </div>

        <div className="flex flex-col gap-2 items-center border-y border-neutral-300 py-4 px-4">
          <span className="flex items-center justify-center w-14 aspect-square rounded-full bg-primary-200">
            <CiCircleCheck className="w-8 h-8 text-primary-800" />
          </span>
          <HeadingSmall className={"text-neutral-900"} weight="semibold">
            Choose With Confidence
          </HeadingSmall>
          <BodyMedium className={"text-neutral-900"}>
            We proactively help with claims
          </BodyMedium>
        </div>
      </div>
    </SectionContainerLarge>
  );
}
