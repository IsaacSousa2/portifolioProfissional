import { Box } from "../Box/box"
import ImagemSade from "@/../../public/ProjectImages/ImagemProjeto.png"


export const List = () => {

    return(

        <div className="bg-black h-[1400px]">
        
            <div>

                <div>
                    <Box title="Sade" text="A SADE é uma empresa que oferece uma solução inovadora de software para gerenciamento de atendimento integrado a equipamentos de imagem. Sua plataforma proporciona uma integração perfeita entre os processos de atendimento e o uso de tecnologias de imagem, como scanners, impressoras e câmeras. Isso significa que os profissionais de saúde podem acessar e gerenciar facilmente informações visuais relevantes durante os atendimentos, melhorando a eficiência e a qualidade dos cuidados prestados aos pacientes." img={ImagemSade} />
                </div>

            </div>

        </div>

    )

}