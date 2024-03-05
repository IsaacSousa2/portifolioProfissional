import Image, { StaticImageData } from "next/image";

type Props = {

    work: string;
    date: string;
    nameProject: string;
    subTitle: string;
    text: string;
    worked: string;
    framework: string;
    library: string;
    language: string;
    tag: string;
    design:string
    img: StaticImageData;

}
//framework, library, language, tag, design

export const ExpBox = ({ text, subTitle, work, date, nameProject, worked, framework, library, language, tag, design, img}: Props) => {

    return(

        <div className="flex text-white flex-col w-full max-w-[450px] h-full">

            <div className="absolute pl-96">
                <Image src={img} alt="Imagem da logo da empresa" />
            </div>
            <div className="text-lightGray">
                {nameProject}
            </div>
            <div className="">
                {work}
            </div>
            <div className="text-lightGray">
                {date}
            </div>
            <div className="">
                {text}
            </div>
            <div className="text-lightGray">
                {worked}
            </div>
            <div className="text-lightGray">
                <ul>
                    <li className="">
                        {subTitle}
                    </li>
                </ul>
            </div>
            <div className="h-8 font-light w-full flex items-center justify-center">
                <div className="flex gap-2 text-xs md:flex-wrap">
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{framework}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{library}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{language}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{design}</h3>
                    <h3 className="text-lightBlue bg-mediumBlue rounded-lg px-3 py-1">{tag}</h3>
                </div>
            </div>

        </div>

    )

}