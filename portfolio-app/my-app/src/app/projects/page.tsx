import { Contact } from "@/components/contact/contact"
import { Footer } from "@/components/footerComponents/footer"
import { HeaderProjects } from "@/components/headerComponents/headerprojects"
import { List } from "@/components/projectsList/Component/List"
import { HeroProjects } from "@/components/projectsPage/herosection/page"


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