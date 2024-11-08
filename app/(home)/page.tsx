"use client";

import { homepage } from "@/public/content/en";
import CaseStudy from "../(home)/CaseStudy";
import Expertise from "../(home)/Expertise";
import Hero from "../(home)/Hero";
import FAQ from "../(shared)/FAQ";
import Approach from "./Approach";
import Mission from "./Mission";

import CTA from "../(shared)/CTA";
import AboutMike from "./AboutMike";
import Agitation from "./Agitation";
import IsThisYou from "./IsThisYou";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import AttentionWhatIDo from "./attention-whatido";

export default function HomePage() {
  return (
    <main className="flex-grow min-h-screen">
      <Hero {...homepage.attention} />
      <AttentionWhatIDo />
      <Agitation />
      <IsThisYou />
      <AboutMike />
      <Expertise />
      <Mission />
      <CaseStudy />
      <Approach />
      <Pricing />
      <Testimonial />
      <FAQ {...homepage.desire} />
      <CTA />
    </main>
  );
}
