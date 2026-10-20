import { AiAutomation } from "@/components/ai-automation";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Skills } from "@/components/skills";
import { VendoorCaseStudy } from "@/components/vendoor-case-study";
import { WebProjects } from "@/components/web-projects";
import { WhoIHelp } from "@/components/who-i-help";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoIHelp />
        <VendoorCaseStudy />
        <AiAutomation />
        <WebProjects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
