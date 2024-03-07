import { Contact } from "@/components/contact/contact"
import { Footer } from "@/components/footerComponents/footer"
import { HeaderProjects } from "@/components/headerComponents/headerprojects"
import { HeroProjects } from "@/components/projectsHero/HeroProjects"
import { List } from "@/components/projectsList/Component/List"


export default function ProjectsPage() {

    return(

        <div className="">

            <HeaderProjects />
            <HeroProjects />
            <List />
            <Contact />
            <Footer />

        </div>

    )

}