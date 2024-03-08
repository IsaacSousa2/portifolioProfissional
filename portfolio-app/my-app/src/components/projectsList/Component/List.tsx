import { Box } from "../Box/box"
import ImagemSade from "@/../../public/ProjectImages/ImagemProjeto.png"
import ImagemAfro from "@/../../public/ProjectImages/Afroraizes.png"
import ImagemBio from "@/../../public/ProjectImages/Biologia.png"
import ImagemEdith from "@/../../public/ProjectImages/EDITH.png"
import ImagemLP from "@/../../public/ProjectImages/LandingPage.png"


export const List = () => {

    return(

        <div className=" h-[2000px] lg:h-[3900px] md:h-[4500px] mm:h-[5200px]">
        
            <div>

                <div className="px-6 py-10">
                    <Box title="Sade" text="A SADE é uma empresa que oferece uma solução inovadora de software para gerenciamento de atendimento integrado a equipamentos de imagem. Sua plataforma proporciona uma integração perfeita entre os processos de atendimento e o uso de tecnologias de imagem, como scanners, impressoras e câmeras. Isso significa que os profissionais de saúde podem acessar e gerenciar facilmente informações visuais relevantes durante os atendimentos, melhorando a eficiência e a qualidade dos cuidados prestados aos pacientes." img={ImagemSade} link="https://sade-delta.vercel.app/" />
                </div>

                <div className="px-6 py-10">
                    <Box title="Biologia consciente" text="'Biologia Consciente' é um projeto que visa fornecer educação e conscientização sobre métodos contraceptivos e saúde reprodutiva. Este projeto aborda uma variedade de tópicos relacionados à biologia humana, especialmente focando na prevenção da gravidez indesejada e na promoção da saúde sexual e reprodutiva. O objetivo principal do projeto é capacitar indivíduos de todas as idades com conhecimento sobre suas opções contraceptivas e direitos reprodutivos, permitindo-lhes tomar decisões informadas e responsáveis sobre sua saúde sexual e reprodutiva." img={ImagemBio} link="https://biologia-consciente.vercel.app/" />
                </div>
                
                <div className="px-6 py-10">
                    <Box title="AfroRaízes" text="O projeto Raízes Afro tem como objetivo principal dar visibilidade às comunidades quilombolas, que são descendentes de africanos escravizados que fugiram das fazendas durante o período colonial e formaram assentamentos livres conhecidos como quilombos. Essas comunidades, muitas vezes localizadas em áreas rurais remotas, enfrentam uma série de desafios, incluindo acesso limitado a serviços básicos, discriminação, falta de reconhecimento legal e pressões externas sobre seu território e modos de vida tradicionais." img={ImagemAfro} link="https://afro-raizes.vercel.app/" />
                </div>

                <div className="px-6 py-10">
                    <Box title="E.D.I.T.H" text="Imagine um projeto de inteligência artificial baseado no ChatGPT, similar à E.D.I.T.H. (Even Dead, I'm The Hero) do universo Iron Man. Esse projeto seria uma IA avançada, capaz de interagir com os usuários de maneira natural e fornecer assistência em diversas áreas, assim como E.D.I.T.H. ajudava Tony Stark." img={ImagemEdith} link="https://edith-psi.vercel.app/" />
                </div>

                <div className="px-6 py-10">
                    <Box title="Landing page do Banco Itaú" text="Bem-vindo à landing page do Banco Itaú, onde suas aspirações financeiras ganham vida. No Itaú, estamos comprometidos em ajudar você a alcançar seus objetivos financeiros, fornecendo soluções inovadoras e serviços excepcionais. Explore nossas ofertas abaixo e comece sua jornada para uma vida financeira mais sólida e próspera." img={ImagemLP} link="https://landing-page-drab-xi.vercel.app/" />
                </div>

            </div>

        </div>

    )

}