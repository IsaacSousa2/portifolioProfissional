import { Contact } from "@/components/contact/contact";
import { Exp } from "@/components/experiences/Component/experiences";
import { Footer } from "@/components/footerComponents/footer";
import { Header } from "@/components/headerComponents/header";
import { Hero } from "@/components/heroSection/hero";
import { Projects } from "@/components/projects/Component/projects";
import { ProfissionalSkills } from "@/components/skills/skillComponent/profissionalskills";

export default function Home() {
  return (
    <div className="">
        
          <Header />
          <Hero />
          <ProfissionalSkills />
          <Projects />
          <Exp />
          <Contact />
          <Footer />

    </div>
  );
}
