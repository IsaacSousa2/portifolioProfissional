type Props = {

    title : string;
    time : string;
    icon: any;

}

export const Box = ({ title, time, icon } : Props) => {

    return(

        <div className="bg-darkBlue flex flex-col">

            <div className="flex">
                <div className="">
                    <h1 className=""> { title } </h1>
                </div>
                <div className="">
                    <p className=""> { icon } </p>
                </div>
            </div>

            <div className="">
                <p className=""> { time } </p>
            </div>

        </div>

    )

}