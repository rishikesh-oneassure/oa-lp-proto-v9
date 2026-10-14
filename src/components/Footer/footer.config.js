const badgeBase = "https://cdn.oneassure.in/static_assets/oneassure_site";
const baseUrl = "https://www.oneassure.in";

export const footerBrand = {
  logo: "https://cdn.oasr.in/oa-site/cms-uploads/media/Logo_File_7th_August_4ea73a2feb.svg",
  description: "OneAssure is a full-stack digital Insurance Platform",
  badges: [
    {
      src: `${badgeBase}/irdai.svg`,
      alt: "IRDAI",
      width: 64,
      height: 64,
    },
    {
      src: "https://cdn.oasr.in/oa-site/cms-uploads/media/ISO_27001_9d22b24184.png",
      alt: "ISO 27001",
      width: 72,
      height: 72,
    },
    {
      src: "https://cdn.oasr.in/oa-site/cms-uploads/media/SOC_2_facf1e938d.png",
      alt: "SOC 2",
      width: 72,
      height: 72,
    },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://x.com/OneAssure?s=20",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_twitter.svg-1698751099",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/oneassure/",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_facebook.svg-1698751122",
    },
    {
      name: "LinkedIn",
      href: "https://in.linkedin.com/company/oneassure",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_linked.svg-1698751149",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/oneassureindia/",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Gloab_solid_instagram.svg-1698751177",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@oneassure8897?si=0iVX41Bhs_cR-AIS",
      icon: "https://d1wamg5uas0pit.cloudfront.net/Global_solid_youtube.svg-1698751200",
    },
  ],
};

export const footerNav = [
  {
    title: "Policy",
    links: [
      { label: "Privacy Policy", href: `${baseUrl}/documents/privacy-policy` },
      {
        label: "Payments Terms",
        href: `${baseUrl}/documents/cancellation-and-refund`,
      },
      {
        label: "Terms & Conditions",
        href: `${baseUrl}/documents/terms-and-conditions`,
      },
      {
        label: "License Information",
        href: `${baseUrl}/documents/license-information`,
      },
      {
        label: "Code of Conduct",
        href: `${baseUrl}/documents/code-of-conduct`,
      },
      {
        label: "Grievance Redressal",
        href: `${baseUrl}/documents/grievance-redressal`,
      },
    ],
  },
];

export const complianceNote =
  "Prost Insurance Brokers Pvt. Ltd.(OneAssure), 1st floor, 91springboard, MG Road, Gopala Krishna Complex 45/3, Residency Road, Mahatma Gandhi Rd, Bengaluru, Karnataka 560025.License No. 756, Direct Broker (Life & General), Valid from: 22/07/2024 to 21/07/2027";
