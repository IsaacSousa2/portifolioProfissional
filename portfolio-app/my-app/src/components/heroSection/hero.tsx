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

        <div className="py-16 flex items-center justify-between md:flex-col" id="hero">

            <div className="">

                <div className="">
                    <Comments text="Olá, meu nome é" />
                </div>

                <div className="">
                    <Title text="Cicero Isaac" />
                </div>

                <div className="px-12 ">
                    <h1 className="text-3xl md:text-xl text-white">Eu sou um <span className="text-lightBlue">programador</span></h1>
                </div>
                
                <div className="px-12 py-[8px]"> 
                    <p className="text-lightGray max-w-[600px] md:max-w-[400px]">Sou uma pessoa impulsionada pela motivação e flexibilidade, pronta para abraçar <span className="text-white">desafios</span> que enriqueçam minha jornada. Nutro uma paixão genuína pelo <span className="text-white">aprendizado</span> constante e me esforço para entregar resultados excepcionais. Com uma atitude positiva e uma <span className="text-white">mentalidade</span> construtiva, estou preparado para deixar uma marca significativa, contribuindo de maneira notável e conquistando feitos <span className="text-white">extraordinários</span>.</p>
                </div>

                <div className="px-12 md:px-6 flex items-center gap-x-12 py-2 md:flex-col">

                    <BlueButton text="Entre em contato" />

                    <div className="text-white flex text-2xl md:-z-20 gap-4 cursor-pointer md:pt-7">


                        <FaInstagram className="opacity-60 hover:opacity-100" href="www.google" />

                        <CiLinkedin className="opacity-60 hover:opacity-100" href="www.google" />

                        <FaGithub className="opacity-60 hover:opacity-100" href="www.google" />

                    </div>

                </div>

            </div>
            
            <div className="md:h-80 md:w-80 py-7 mm:w-64 px-12">
                <Image src={ HeroFoto } alt="Foto de portfolio" />
            </div>

        </div>

    )

}