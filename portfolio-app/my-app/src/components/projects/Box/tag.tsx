type Props = {

    text: string;

}

export const Tag = ({text} : Props) => {

    return(

        <div className="bg-mediumBlue rounded-md px-2 max-w-28 flex justify-center items-center h-8 font-light my-3 mx-4">

            <h3 className="text-lightBlue">{text}</h3>

        </div>

    )

}