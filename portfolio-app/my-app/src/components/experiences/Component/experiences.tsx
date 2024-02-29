import Image from "next/image"
import ExpImage from "@/../../public/Images/ExpImages/Linha.png"
import { Title } from "@/components/TextComponents/Titles/title"
import { Comments } from "@/components/TextComponents/Comments/comments"
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle"
import { ExpBox } from "../Box/expbox"

export const Exp = () => {

    return(

        <div className="">
            <div>
                <Comments text="experiencia" />
                <Title text="Experiências profissionais" />
                <SubTitle text="Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa!" />
            </div>
            <div>
                <Image src={ExpImage} alt="Imagem de linha" />
            </div>
            <div>
                <ExpBox
                title=""
                text="" 
                tag="" 
                img="" 
                framework="" 
                library="" 
                language=""
                />
            </div>
        </div>

    )

}