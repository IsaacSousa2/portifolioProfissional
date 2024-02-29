import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { Title } from "@/components/TextComponents/Titles/title"
import PImage from "@/../../public/Images/HeroImages/Foto.png"
import { ProjectBox } from "../Box/projectsBox"
import { FaArrowRight } from "react-icons/fa"

export const Projects = () => {

    return(

        <div>

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

                <div className="flex items-center justify-center gap-7 xl:flex-col">

                    <ProjectBox
                    img={PImage}
                    framework="vite"
                    library="TailwindCSS"
                    language="Typescript"
                    share="GIT"
                    tag="Figma" 
                    title="Biolgia Consciente"
                    text="Imagine uma jornada fascinante pelo universo da saúde sexual, onde a ciência encontra a educação de maneira cativante. Bem-vindo ao nosso projeto destinado à Feira de Ciências, onde desvendaremos os mistérios dos métodos contraceptivos de uma maneira informativa e envolvente!"
                    />

                    <ProjectBox
                    img={PImage}
                    framework="NextJS"
                    library="TailwindCSS"
                    language="Typescript"
                    share="GIT"
                    tag="Figma" 
                    title="Afroraízes"
                    text="Esteja pronto para uma celebração inesquecível, onde honramos a cultura, resiliência e consciência. Não deixe de participar conosco em AfroRaízes - uma homenagem apaixonada que ressalta a incrível riqueza e vitalidade das comunidades quilombolas. Venha se juntar a nós."
                    />

                    <ProjectBox
                    img={PImage}
                    framework="NextJS"
                    library="TailwindCSS"
                    language="Typescript"
                    share="GIT"
                    tag="Figma" 
                    title="Sade"
                    text="Explore o Futuro com SADE - Onde cada interação é uma oportunidade de transformar vidas. Clique agora e comece sua jornada para um Software para gestão de atendimento Integrado a equipamentos de  imagem extraordinário! Venha fazer parte de família SADE com apenas um clique"
                    />

                </div>

            </div>

            <div className="text-white flex gap-2 font-light text-center items-center cursor-pointer py-7 justify-start pl-32">
                <h2 className="text-lightGray">Se interessou? <span className="text-white ">Ver todos </span></h2>
                <FaArrowRight className="" />
            </div>

        </div>

    )

}