type Props = {

    text : string;

}

export const SubTitle = ({text} : Props) => {

    return(

        <div className="px-12 py-[8px] text-sm text-lightGray w-full">
            <p className="">{text}</p>
        </div>

    )

}