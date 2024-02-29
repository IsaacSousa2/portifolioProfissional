import { IBM_Plex_Mono, Poppins } from "next/font/google";
import { FaHeart } from "react-icons/fa";
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight:['300', '500', '700'] })

export const Footer = () => {

    return(

        <div className="flex items-center text-lightGray gap-2 bg-black h-10 font-thin text-center justify-center cursor-default">
            <p className={plex.className}>Made with </p>
            <FaHeart className="text-lightBlue" />
            <p className={plex.className}>by Cicero Isaac</p>
        </div>

    )

}