type Props = {

    text : string;

}

export const Title = ({text} : Props) => {

    return(

        <div className="px-12 py-[8px] text-white text-4xl md:text-3xl">
            <h1 className="">{text}</h1>
        </div>

    )

}