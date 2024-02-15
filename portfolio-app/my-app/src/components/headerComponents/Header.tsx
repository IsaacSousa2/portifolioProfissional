import { LinkHeader } from "./Link"
import Image from "next/image"
import Logo from "@/../../public/Images/HeaderImages/Logo.png"

export const Header = () => {

    return(

        <header>

            <div className="w-full ">

                <div className="">

                    <div className="absolute">
                        <Image width={100} height={100} src={Logo} alt="Logo" />
                    </div>

                    <div className="flex items-center justify-center gap-x-4">
                        <LinkHeader texto="Sobre" link={"/"} />
                        <LinkHeader texto="Conhecimentos" link={"/"} />
                        <LinkHeader texto="Projetos" link={"/"} />
                        <LinkHeader texto="Contato" link={"/"} />
                        <LinkHeader texto="Experiência" link={"/"} />
                    </div>

                </div>

            </div>

        </header>

    )

}