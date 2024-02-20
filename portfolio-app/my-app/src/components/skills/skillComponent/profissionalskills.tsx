import { Comments } from "../../TextComponents/Comments/comments"
import { SubTitle } from "../../TextComponents/SubTitle/subTitle"
import { Title } from "../../TextComponents/Titles/title"
import { Box } from "../skillBox/skillBox"
import { FaHtml5 } from "react-icons/fa";

export const ProfissionalSkills = () => {

    return(

        <div className="">

        <div className="px-12">
            <div className="pb-2">
                <Comments text="conhecimentos" />
            </div>
            <div className="pb-2">
                <Title text="Competências profissionais" />
            </div>
            <div className="pb-2">
                <SubTitle text="Aqui estão algumas das habilidades nas quais tenho trabalhado nos últimos 2 anos." />
            </div>

        </div>
        <div className="">

            <Box title="HTML5" time="+2 anos de experiência" icon={<FaHtml5 />} />

        </div>

        </div>

    )

}