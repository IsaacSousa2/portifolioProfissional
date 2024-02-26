import Image, { StaticImageData } from "next/image";
import { Tag } from "@/components/projects/Box/tag";

type Props = {

    title: string;
    text: string;
    img: StaticImageData;
    

}

export const ProjectBox = ({title, text, img}: Props) => {

    return(

        <div className="text-white">
            <div className="">
                <Image src={img} alt="Imagem do projeto" />
            </div>
            <div>
                <div>
                    {title}
                </div>
                <div>
                    {text}
                </div>
            </div>
        </div>

    )

}