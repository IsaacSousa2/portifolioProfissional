import { Header } from "@/components/headerComponents/Header";
import { Title } from "@/components/TextComponents/Titles/title"; 
import { SubTitle } from "@/components/TextComponents/SubTitle/subTitle";
import { Comments } from "@/components/TextComponents/Comments/comments"; 

export default function Home() {
  return (
    <div className="">
        <Title 
        text="Teste de Titulo"
        />
        <Comments 
        text="Teste de comentário"
        />
        <SubTitle 
        text="Teste de subtitulo"
        />
    </div>
  );
}
