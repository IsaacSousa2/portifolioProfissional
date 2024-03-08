import { Contact } from "@/components/contact/contact"
import { Footer } from "@/components/footerComponents/footer"
import { HeaderProjects } from "@/components/headerComponents/headerprojects"
import { HeroProjects1 } from "@/components/projectsHero/HeroProjects"
import { List } from "@/components/projectsList/Component/List"


export default function ProjectsPage() {

    return(

        <div className="bg-gradient-to-t from-lightBlue to-darkBlue">

            <HeaderProjects />
            <HeroProjects1 />
            <List />
            <Contact />
            <Footer />

        </div>

    )

}