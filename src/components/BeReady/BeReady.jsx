import InsurerLogoMarquee from "../InsurerLogoMarquee";
import { BodyLarge, BodySmall, HeadingXLarge } from "../UI/Typography";

export default function BeReady() {
  return (
    <>
      <InsurerLogoMarquee className="relative z-1 mt-8 border-y border-primary-300 md:mt-14" />
      <div className="ml-[calc(50%-50vw)]! mr-[calc(50%-50vw)]! w-screen! px-6 md:px-0 flex flex-col items-center gap-2 bg-primary-800 py-12 md:py-20 text-white text-center mb-0!">
        <BodySmall className={"uppercase text-center tracking-widest"}>
          &mdash; Be Ready Before You Need it
        </BodySmall>

        <HeadingXLarge weight="regular">
          Emergencies don't wait. Neither should your cover.
        </HeadingXLarge>

        <BodyLarge weight="regular">
          Talk to someone who has handled real claims. Not a chatbot, not a
          salesperson.
        </BodyLarge>

        <button className="w-full md:w-1/2 max-w-sm bg-neutral-50 text-primary-800 px-6 py-3 rounded-lg mt-6 md:mt-10 font-semibold hover:bg-primary-100 transition-all duration-100 cursor-pointer">
          Book a free call
        </button>
      </div>
    </>
  );
}
