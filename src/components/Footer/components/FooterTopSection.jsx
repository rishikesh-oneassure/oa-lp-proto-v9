import { BodyMedium, BodySmall } from "@/components/UI/Typography";
import CustomLink from "@/components/globals/CustomLink";
import { footerBrand, footerNav } from "@/components/Footer/footer.config";
import FooterAbout from "./FooterBottom";
import SectionContainerSmall from "@/components/globals/SectionContainerSmall";

const FooterTopSection = ({ utm }) => {
  const policyGroup = footerNav.find((group) => group.title === "Policy");

  return (
    <SectionContainerSmall className="!px-0 !mb-0">
      <div className="w-full flex flex-col items-center md:items-stretch content-center md:flex-row md:justify-between gap-10 md:gap-32 px-6 md:px-0">
        <div className="w-min flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col gap-2 md:gap-1 items-center md:items-start">
            <span className="w-48">
              <img src={footerBrand.logo} alt="" className="w-full" />
            </span>
            <BodyMedium className={"text-neutral-900"}>
              {footerBrand.description}
            </BodyMedium>
          </div>

          <div className="flex items-center gap-2">
            {footerBrand.social.map((item) => (
              <CustomLink key={item.name} href={item.href} utm={utm}>
                <img
                  src={item.icon}
                  alt={item.name}
                  className="cursor-pointer w-8 md:w-16 invert-50 hover:invert-75"
                />
              </CustomLink>
            ))}
          </div>

          <div className="flex gap-4 h-16 mt-4">
            {footerBrand.badges.map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                className="h-full w-auto"
              />
            ))}
          </div>
        </div>

        <div className="md:w-48 self-center">
          <FooterAbout />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2 items-center">
          {policyGroup.links.map((link) => (
            <CustomLink key={link.label} href={link.href} utm={utm}>
              <BodySmall
                as="p"
                weight="regular"
                className="text-neutral-1100 underline hover:text-primary-800 text-center md:text-left"
              >
                {link.label}
              </BodySmall>
            </CustomLink>
          ))}
        </div>
      </div>
    </SectionContainerSmall>
  );
};

export default FooterTopSection;
