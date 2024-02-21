import { Comments } from "../TextComponents/Comments/comments"
import { SubTitle } from "../TextComponents/SubTitle/subTitle"
import { Title } from "../TextComponents/Titles/title"

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
        </div>

    )

}