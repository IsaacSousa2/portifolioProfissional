import { FaArrowRight } from "react-icons/fa";

type Props = {

    text : string;

}

export const BlueButton = ({text}: Props) => {

    return(

    <div className="text-white flex gap-2 text-center items-center justify-center w-52 h-14 rounded-md bg-lightBlue hover:bg-lightBlue/75 transition-all duration-300 cursor-pointer">
        <h2>{text}</h2>
        <FaArrowRight />
    </div>

    )

}