import SectionContainer from "@/components/globals/SectionContainer";
import SectionContainerMedium from "@/components/globals/SectionContainerMedium";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  HeadingXLarge,
} from "@/components/UI/Typography";

function FounderParagraphs({ html }) {
  const text = String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return null;

  return (
    <BodyLarge className="text-neutral-800" weight="regular">
      {text}
    </BodyLarge>
  );
}

const Founder = ({ title, desc, name, designation, company, image }) => {
  const separatedParagraphs = desc.split("<p><br></p>");
  const descriptionPartOne = separatedParagraphs.slice(0, 2);
  const descriptionPartTwo = separatedParagraphs.slice(2);

  return (
    <SectionContainer className="flex flex-col items-center gap-4 md:gap-6 md:!mb-20">
      <div>
        <BodySmall
          className={
            "uppercase text-primary-800 tracking-widest text-center mb-0.5"
          }
          weight="semibold"
        >
          &mdash; Founder's Note
        </BodySmall>
        <HeadingXLarge className="block text-center" weight="medium">
          {title}
        </HeadingXLarge>
      </div>
      <SectionContainerMedium className="relative !pt-11 md:!pt-16 md:!mx-auto !mb-0 rounded-5xl overflow-clip">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-5xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/pro-hero-background.jpg)",
              filter: "blur(24px)",
              transform: "scale(1.06)",
            }}
          />
        </div>
        <div className="relative z-1 md:px-20 flex flex-col gap-5 mb-5 text-center">
          {descriptionPartOne.map((para, index) => (
            <FounderParagraphs key={index} html={para} />
          ))}
        </div>

        <div className="relative z-1 flex flex-col-reverse md:flex-row md:pr-20 text-center md:pl-4">
          <img
            src={image}
            alt={
              name
                ? `Portrait of ${name}, ${designation} at OneAssure`
                : "Porttrait of OneAssure founder"
            }
            height={260}
            width={220}
            className="mx-auto md:pl-4 -translate-x-10 md:translate-x-0 -mt-10 md:mt-auto"
          />

          <div className="flex flex-col gap-5">
            {descriptionPartTwo.map((para, index) => (
              <FounderParagraphs key={index} html={para} />
            ))}

            <div className="self-end md:self-stretch flex flex-col w-fit items-end md:items-start md:pl-10 translate-y-2 md:translate-y-6">
              <HeadingXLarge className="font-corinthia text-primary-800 !leading-none self-stretch">
                {name}
              </HeadingXLarge>
              <BodyMedium className="text-primary-800" weight="regular" as="p">
                {designation} -{" "}
                <BodyMedium as="span" weight="semibold">
                  {company}
                </BodyMedium>
              </BodyMedium>
            </div>
          </div>
        </div>
      </SectionContainerMedium>
    </SectionContainer>
  );
};

export default Founder;
