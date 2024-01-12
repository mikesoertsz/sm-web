"use client";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import FAQ from "../(shared)/FAQ";
import Hero from "../(home)/Hero";
import Expertise from "../(home)/Expertise";
import { homepage } from "@/public/content/en";
import CaseStudy from "../(home)/CaseStudy";
import Mission from "./Mission";
import Approach from "./Approach";
import { Toaster } from "@/components/ui/toaster";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CTA from "../(shared)/CTA";
import Testimonial from "./Testimonial";
import Agitation from "./Agitation";
import AboutMike from "./AboutMike";
import Pricing from "./Pricing";
import IsThisYou from "./IsThisYou";

export default function HomePage() {
  return (
    <main className="flex-grow min-h-screen ">
      <Hero />
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

export function ToastWithAction() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}
