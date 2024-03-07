'use client'

import { LinkComponent } from "./Link"; 
import { LuMenu } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image"
import Logo from "@/../../public/Images/HeaderImages/Logo.png"
import { useState } from "react";

export const HeaderProjects = () => {

    const [ openMenu, setOpenMenu ] = useState(false)

    function abrirMenu() {

        openMenu ? setOpenMenu(false) : setOpenMenu(true);

    }

    return(

        <header>

            <div className="w-full h-14">

                <div className="flex  justify-center items-center">

                    <div className={`flex absolute right-2 md:top-1`}>
                        <Image src={Logo} alt="Logo" height={90} width={90} />
                    </div>

                    <div className="">

                        <div onClick={abrirMenu} className={`text-white hidden md:flex absolute z-50 left-2 top-4 text-2xl`}>
                            <LuMenu className={`${openMenu? 'hidden' : 'flex'}`} />
                            <IoIosCloseCircleOutline className={`${openMenu? 'relative ml-28 flex' : 'hidden'}`} />
                        </div>

                        {openMenu? <div className="w-screen h-screen bg-black/20 fixed"></div> : <></>}

                        <div className={`flex gap-x-4 md:flex-col md:bg-darkBlue md:h-screen md:gap-y-3 md:w-64 md:justify-center ${openMenu? 'md:absolute md:left-0':'md:ml-[-12000px]'}`}>
                        

                            <div>
                                <LinkComponent texto="Home" link={"/"} />
                            </div>

                            <div>
                                <LinkComponent texto="Projetos" link={"#projects"} />
                            </div>

                            <div className={`flex absolute left-20 md:bottom-1 ${openMenu? 'flex' : 'hidden'}`}>
                                <Image src={Logo} alt="Logo" height={90} width={90} />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </header>

    )

}