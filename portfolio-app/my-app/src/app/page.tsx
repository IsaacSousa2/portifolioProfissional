import { Contact } from "@/components/contact/contact";
import { Header } from "@/components/headerComponents/header";
import { Hero } from "@/components/heroSection/hero";
import { Projects } from "@/components/projects/projects";
import { ProfissionalSkills } from "@/components/skills/skillComponent/profissionalskills";

export default function Home() {
  return (
    <div className="">
        
          <Header />
          <Hero />
          <ProfissionalSkills />
          <Contact />

    </div>
  );
}
