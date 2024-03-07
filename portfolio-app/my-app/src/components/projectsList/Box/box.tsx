import Image, { StaticImageData } from "next/image"
import { RiLink } from "react-icons/ri";

type Props = {

    img : StaticImageData;
    title : string;
    text: string;

}

export const Box = ({img, text, title} : Props) => {

    return(

        <div className="text-lightGray bg-darkBlue h-[320px] w-full max-w-[1840px] rounded-md mx-auto flex items-center justify-center">
            <div className="text-white font-bold flex absolute">
                <RiLink className='text-lightBlue text-[21px]'/>
                {title}
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center gap-x-40">
                    <div className="">
                        <Image src={img} draggable="false" alt="Imagem de projeto" height={300} width={300} />
                    </div>
                    <div className="w-full max-w-[800px]">
                        {text}
                    </div>
                </div>
            </div>
        </div>

    )

}