import { Comments } from "../TextComponents/Comments/comments"
import { SubTitle } from "../TextComponents/SubTitle/subTitle"
import { Title } from "../TextComponents/Titles/title"
import { BlueButton } from "../buttons/blueButton"


export const Contact = () => {

    return(

        <div className="bg-black flex flex-col py-20 justify-center items-center">

            <div className="text-center">

                 <div className="">
                    <Comments text="contato" />
                </div>

                <div className="">
                    <Title text="Entre contato comigo através de:" />
                </div>

                <div className="">
                    <SubTitle text="Sinta-se à vontade para entrar em contato comigo para qualquer dúvida ou oportunidade!" />
                </div>

            </div>

            <div className="">

                <div className="pb-3 pt-8">
                    <input type="text" required placeholder="Digite seu nome" alt="Espaço para digitar o nome" className="cursor-pointer md:max-w-[300px] mm:[200px] w-full max-w-[600px] pl-3 border-none h-12 text-lightGray rounded-md bg-darkBlue" />
                </div>

                <div className="py-3">
                    <input type="email" required placeholder="seuEmail@gmail.com" alt="Espaço para o seu email" className="cursor-pointer md:max-w-[300px] mm:[200px] w-[600px] pl-3 border-none h-12 text-lightGray rounded-md bg-darkBlue" />
                </div>

                <div className="py-3">
                    <input type="text" required placeholder="Assunto da mensagem" alt="Espaço para colocar o assunto da sua mensagem" className="cursor-pointer md:max-w-[300px] mm:[200px] w-[600px] pl-3 border-none h-12 text-lightGray rounded-md bg-darkBlue" />
                </div>

                <div className="py-3">
                    <input type="text" required placeholder="Mensagem..." alt="Espaço para digitar a mensagem" className="cursor-pointer md:max-w-[300px] mm:[200px] pb-36 w-[600px] pl-3 border-none h-48 text-lightGray rounded-md bg-darkBlue" />
                </div>

            </div>

            <div className="pt-10 pb-5">
                <BlueButton text="Enviar Mensagem" />
            </div>

        </div>

    )

}