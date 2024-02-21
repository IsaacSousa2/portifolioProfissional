type Props = {

    text : string;

}

export const SubTitle = ({text} : Props) => {

    return(

        <div className="px-12 text-sm text-lightGray ">
            <p className="">{text}</p>
        </div>

    )

}