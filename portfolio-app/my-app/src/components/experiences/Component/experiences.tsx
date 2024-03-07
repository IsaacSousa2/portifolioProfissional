import Image from "next/image"
import ExpImage from "@/../../public/Images/ExpImages/Linha.png"
import { Title } from "@/components/TextComponents/Titles/title"
import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { ExpBox } from "../Box/expbox"
import  LogoSade  from "@/../../public/Images/LogoImages/Logo Sade 2.png"

export const Exp = () => {

    return(

        <div className="flex xl:flex-col h-full w-full md:items-center justify-between max-w-[1800px] mx-auto" id="experiencias">

            <div className="">
                <Comments text="experiencia" />
                <Title text="Experiências profissionais" />
                <SubTitle text="Estou sempre aberto a novos desafios e projetos emocionantes." />
            </div>
            <div className="absolute right-[50%] xl:hidden">
                <Image src={ExpImage} alt="Imagem de linha" />
            </div>
            <div className="flex flex-col items-center md:px-8 pr-12">
                <div className="">
                    <ExpBox
                    img={LogoSade}
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
                <div className="">
                    <ExpBox
                    img={LogoSade}
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
                <div className="">
                    <ExpBox
                    img={LogoSade}
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
        </div>

    )

}