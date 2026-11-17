import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowIWork } from "@/components/sections/HowIWork";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowIWork />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
