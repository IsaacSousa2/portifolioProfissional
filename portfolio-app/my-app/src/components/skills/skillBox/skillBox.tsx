import { ReactNode } from "react";

type Props = {

    title : string;
    time : string;
    icon: ReactNode;

}

export const Box = ({ title, time, icon } : Props) => {

    return(

        <div className="bg-black flex flex-col px-4 w-64 h-[95px] py-3 text-lightGray rounded-md font-light">

            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className=""> { title } </h1>
                </div>
                <div className="">
                    <p className=""> { icon } </p>
                </div>
            </div>
            <div className="pt-5">
                <p className=""> { time } </p>
            </div>

        </div>

    )

}