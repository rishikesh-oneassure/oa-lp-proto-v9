import Founder from "@/components/AboutNew/components/Founder";
import founderSection from "@/components/AboutNew/founder";
import TestimonialSection from "@/components/NewHomePage/components/TestimonialSection";
import testimonialStory from "@/components/NewHomePage/testimonialStory";
import ProLayout from "@/layouts/ProLayout";
import Hero from "./components/OneAssureProPage/components/Hero";
import Impact from "./components/Impact/Impact";
import WhyOneAssure from "./components/WhyOneAssure/WhyOneAssure";
import WhatToExpect from "./components/WhatToExpect/WhatToExpect";
import BeReady from "./components/BeReady/BeReady";

export default function App() {
  return (
    <ProLayout>
      <Hero />
      <TestimonialSection story={testimonialStory} />
      {/* <Impact /> */}
      <WhyOneAssure />
      <WhatToExpect />
      <Founder {...founderSection} />
      <BeReady />
    </ProLayout>
  );
}
