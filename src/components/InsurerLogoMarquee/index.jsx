import marqueeModule from "react-fast-marquee";
import { HeadingSmall } from "@/components/UI/Typography";
import { cn } from "@/lib/utils";
import insurerLogos from "./logos";

const Marquee =
  typeof marqueeModule === "function" ? marqueeModule : marqueeModule.default;

function renderLogos() {
  return insurerLogos.map((logo) => (
    <div
      key={logo.src}
      className="mx-4 flex h-max shrink-0 items-center justify-center bg-white md:mx-12"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className="h-10 w-auto object-contain"
      />
    </div>
  ));
}

export default function InsurerLogoMarquee({ className = "" }) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-white py-2.5 md:py-8",
        className,
      )}
    >
      <HeadingSmall
        className="mb-4 text-center text-neutral-1100 md:mb-8"
        weight="medium"
      >
        Bringing You India's Most Trusted Insurers
      </HeadingSmall>
      <div className="hidden md:block">
        <Marquee speed={100} gradient gradientWidth={200}>
          {renderLogos()}
        </Marquee>
      </div>
      <div className="md:hidden">
        <Marquee speed={100} gradient gradientWidth={100}>
          {renderLogos()}
        </Marquee>
      </div>
    </section>
  );
}
