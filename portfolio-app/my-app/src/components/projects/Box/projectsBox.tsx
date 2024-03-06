import Image, { StaticImageData } from "next/image";

type Props = {

    title: string;
    framework: string;
    library: string;
    language: string;
    share: string;
    tag: string;
    text: string;
    img: StaticImageData;
    

}

export const ProjectBox = ({title, text, tag, img, framework, library, language, share}: Props) => {

    return(

        <div className="text-white bg-darkBlue py-6 w-[390px] md:w-[300px] h-[600px] flex flex-col items-center justify-center rounded-md">
            <div className="w-[370px] h-[220px] md:mb-3 bg-lightBlue flex rounded-md md:w-[260px]">
                <Image src={img} alt="Imagem do projeto" />
            </div>
            <div className=" h-8 font-light my-3 w-full flex items-center justify-center">
                <div className="flex gap-2 text-xs md:flex-wrap md:px-3">
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{framework}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{library}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{language}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{share}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{tag}</h3>
                </div>
            </div>
            <div>
                <div className="w-full font-light text-4xl my-3 mx-3">
                    {title}
                </div>
            </div>
            <div className="w-full max-w-[380px] mt-3 px-4 text-lightGray">
                {text}
            </div>

        </div>

    )

}