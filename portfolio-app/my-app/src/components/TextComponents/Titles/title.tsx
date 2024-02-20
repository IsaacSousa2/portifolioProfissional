

type Props = {

    text : string;

}

export const Title = ({text} : Props) => {

    return(

        <div className="text-white text-4xl ">
            <h1 className="">{text}</h1>
        </div>

    )

}