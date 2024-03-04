import Image from "next/image"
import ExpImage from "@/../../public/Images/ExpImages/Linha.png"
import { Title } from "@/components/TextComponents/Titles/title"
import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { ExpBox } from "../Box/expbox"

export const Exp = () => {

    return(

        <div className="flex md:flex-col justify-between h-[1100px]">
            <div className="">
                <Comments text="experiencia" />
                <Title text="Experiências profissionais" />
                <SubTitle text="Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos!" />
            </div>
            <div className="md:hidden absolute right-[50%]">
                <Image src={ExpImage} alt="Imagem de linha" />
            </div>
            <div className="pr-[220px] pl-[100px]">
                <ExpBox
                nameProject="@SADE"
                work="Desenvolvedor Front-End"
                date="../Julho../5meses"
                text="Desenvolvimento e manutenção de interfaces usando React, Next, Tailwind, Typescript, e Figma." 
                worked="Desenvolvimento e manutenção de interface e design"
                subTitle="Competências usadas"
                framework="NextJS"
                library="TailwindCSS"
                language="Typescript"
                design="GIT"
                tag="Figma" 
                />
            </div>
        </div>

    )

}