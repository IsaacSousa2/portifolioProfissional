import Image, { StaticImageData } from "next/image";

type Props = {

    title: string;
    tag: string;
    text: string;
    img: StaticImageData;
    

}

export const ProjectBox = ({title, text, tag, img}: Props) => {

    return(

        <div className="text-white">
            <div className="">
                <Image src={img} alt="Imagem do projeto" />
            </div>
            <div>
                <div>
                    {title}
                </div>
                <div className="bg-mediumBlue rounded-md px-2 w-20 flex justify-center items-center h-8 font-light my-3 mx-4">
                    <h3 className="text-lightBlue">{tag}</h3>
                </div>
                <div>
                    {text}
                </div>
            </div>
        </div>

    )

}