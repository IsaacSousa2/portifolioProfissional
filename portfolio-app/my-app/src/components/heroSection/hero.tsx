import { Comments } from "../TextComponents/Comments/comments"
import { Title } from "../TextComponents/Titles/title"
import { BlueButton } from "../buttons/blueButton"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import HeroFoto from "@/../../public/Images/HeroImages/Foto.png"

export const Hero = () => {

    return(

        <div className="py-16 px-8 md:px-4 flex items-center justify-between md:flex-col">

            <div className="px-4 md:px-6 ">

                <div className="py-2">
                    <Comments text="Olá, meu nome é" />
                </div>

                <div className="pb-2">
                    <Title text="Cicero Isaac" />
                </div>

                <div className="">
                    <h1 className="text-white">Eu sou um <span className="text-lightBlue">programador</span></h1>
                </div>
                
                <div className="py-2"> 
                    <p className="text-lightGray max-w-[600px] md:max-w-[400px]">Sou uma pessoa impulsionada pela motivação e flexibilidade, pronta para abraçar <span className="text-white">desafios</span> que enriqueçam minha jornada. Nutro uma paixão genuína pelo <span className="text-white">aprendizado</span> constante e me esforço para entregar resultados excepcionais. Com uma atitude positiva e uma <span className="text-white">mentalidade</span> construtiva, estou preparado para deixar uma marca significativa, contribuindo de maneira notável e conquistando feitos <span className="text-white">extraordinários</span>.</p>
                </div>

                <div className="flex items-center gap-x-12 py-2 md:flex-col">

                    <BlueButton text="Entre em contato" />

                    <div className="text-white flex text-2xl gap-4 cursor-pointer md:pt-7">


                        <FaInstagram className="opacity-60 hover:opacity-100" href="www.google" />

                        <CiLinkedin className="opacity-60 hover:opacity-100" href="www.google" />

                        <FaGithub className="opacity-60 hover:opacity-100" href="www.google" />

                    </div>

                </div>

            </div>
            
            <div className="md:h-80 md:w-80 py-7 mm:w-64 mm:w-64">
                <Image src={ HeroFoto } alt="Foto de portfolio" />
            </div>

        </div>

    )

}