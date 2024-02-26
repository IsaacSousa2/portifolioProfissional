import { IBM_Plex_Mono, Poppins } from "next/font/google";
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight:['300', '500', '700'] })

type Props = {

    text : string;

}

export const Comments = ({text} : Props) => {

    return(

        <div className="px-12 py-[8px] text-lightBlue text-sm">
            <p className={plex.className}>//{text}</p>
        </div>

    )

}