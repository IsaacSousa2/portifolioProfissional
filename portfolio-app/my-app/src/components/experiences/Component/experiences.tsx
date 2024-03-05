import Image from "next/image"
import ExpImage from "@/../../public/Images/ExpImages/Linha.png"
import { Title } from "@/components/TextComponents/Titles/title"
import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { ExpBox } from "../Box/expbox"
import  LogoSade  from "@/../../public/Images/LogoImages/Logo Sade 2.png"

export const Exp = () => {

    return(

        <div className="flex xl:flex-col justify-between h-full w-full pr-[200px] md:items-center md:justify-center max-w-[2400px]">
            <div className="">
                <Comments text="experiencia" />
                <Title text="Experiências profissionais" />
                <SubTitle text="Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos!" />
            </div>
            <div className="flex xl:hidden">
                <Image src={ExpImage} alt="Imagem de linha" />
            </div>
            <div className="md:flex md:flex-col md:gap-y-32">
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