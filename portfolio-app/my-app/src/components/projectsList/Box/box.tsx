import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RiLink } from "react-icons/ri";

type Props = {

    img : StaticImageData;
    title : string;
    text: string;
    link: string;

}

export const Box = ({img, text, title, link} : Props) => {

    return(

        <div className="text-lightGray bg-darkBlue h-[320px] lg:h-[650px] w-full max-w-[1900px] flex mx-auto Md:flex-col md:h-[800px] mm:h-[920px]">
            <div className=" w-full max-w-[1880px] rounded-md mx-auto flex items-center justify-center">
                <div className="text-white font-bold flex absolute mb-56 mr-64 xl:left-8 Md:hidden">
                    <RiLink className='text-lightBlue text-[21px] mx-1'/>
                    {title}
                </div>
                <div className="flex items-center justify-center text-center">
                    <div className="flex items-center gap-x-40 ml-5 Md:flex-col md:ml-1">
                        <div className="py-14">
                            <Image src={img} draggable="false" alt="Imagem de projeto" height={300} width={300} />
                        </div>
                        <div className="w-full max-w-[800px] Md:max-w-[1200px]">
                            {text}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-end lg:absolute lg:mt-[540px] md:mt-[720px] lg:right-[45%] md:right-[10%] mm:mt-[840px] w-[250px] px-4">
                        <Link href={link}>
                            <div className="text-white flex gap-2 font-medium text-center items-center cursor-pointer py-7 justify-start opacity-70 hover:opacity-100 duration-200">
                                <h2 className="text-white">Ver o projeto</h2> 
                                <FaArrowRight className="" /> 
                            </div>
                        </Link>
                </div>
        </div>

    )

}