import { RiLink } from "react-icons/ri"; 

type Props = {

    link: any;
    texto: string;

}

export const Link = ({link, texto}: Props) => {

    return(

        <div className="flex items-center justify-center text-center cursor-pointer py-3 opacity-65 hover:opacity-100 transition-all duration-[0.4s]">
            <RiLink className='text-lightBlue text-[21px]'/>
            <a href={`${link}`} className="text-white text-[14px] p-1">{texto}</a>
        </div>

    )

}