import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { Title } from "@/components/TextComponents/Titles/title"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export const HeroProjects1 = () => {

    return(

        <div className="items-center justify-center text-center flex flex-col h-[450px] bg-gradient-to-tr from-darkBlue to-blue-600/20">

            <div className="flex flex-col w-full max-w-[630px]">
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

            <div>
                <a href="/">
                    <div className="text-white flex gap-2 font-medium text-center items-center cursor-pointer py-7 justify-start">
                        <FaArrowLeft className="" />
                        <h2 className="text-white">Voltar para a home</h2>  
                    </div>
                </a>
            </div>

        </div>
        
    )

}