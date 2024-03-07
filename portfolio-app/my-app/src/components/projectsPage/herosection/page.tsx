import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { Title } from "@/components/TextComponents/Titles/title"

export const HeroProjects = () => {

    return(

        <div className="">

            <div className="flex items-center justify-center ">
                <div>
                    <Comments text="projetos" />
                </div>
                <div>
                    <Title text="Meus projetos" />
                </div>
                <div>
                    <SubTitle text="Aqui você poderá ver alguns dos meus projetos que foram desenvolvidos por mim, Navegue a vontade e veja os projetos como eles foram criados, as tecnologias ultilizadas e funcionalidades implementadas." />
                </div>
            </div>

        </div>
        
    )

}