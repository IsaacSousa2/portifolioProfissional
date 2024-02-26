import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { Title } from "@/components/TextComponents/Titles/title"
import PImage from "@/../../public/Images/HeroImages/Foto.png"
import { ProjectBox } from "../Box/projectsBox"

export const Projects = () => {

    return(

        <div>
            <div className="px-12 py-14">
                <div className="pb-2">
                    <Comments text="projetos" />
                </div>
                <div className="pb-2">
                    <Title text="Projetos desenvolvidos" />
                </div>
                <div className="pb-2">
                    <SubTitle text="Aqui estão alguns dos projetos nos quais tenho desenvolvido nos últimos 2 anos." />
                </div>
            </div>

            <div className="">

                <ProjectBox
                title="Teste"
                text="loremnvasjnvklsMNKLVWNVJIWAUVJWNVJHBAWJKVNJABSVBASJKLVBJHbkjbknfjkle svsjklncvjkwnvklwdvbhjwvnjkwd vwv bwivn wjkvwjk vjd"
                img={PImage}
                />

            </div>
        </div>

    )

}