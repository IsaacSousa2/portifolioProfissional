import { Comments } from "../../TextComponents/Comments/comments"
import { SubTitle } from "../../TextComponents/SubTitle/subTitle"
import { Title } from "../../TextComponents/Titles/title"
import { Box } from "../skillBox/skillBox"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

export const ProfissionalSkills = () => {

    return(

        <div className="">

        <div className="" id="skills">
            <div className="">
                <Comments text="conhecimentos" />
            </div>
            <div className="">
                <Title text="Competências profissionais" />
            </div>
            <div className="">
                <SubTitle text="Aqui estão algumas das habilidades nas quais tenho trabalhado nos últimos 3 anos." />
            </div>

        </div>
        
        <div className="items-center justify-center flex mt-16">

            <div className="items-center grid grid-cols-4 justify-center gap-9 xl:grid-cols-3 lg:flex lg:flex-wrap">

                <Box title="HTML5" time="2 anos de experiência" icon={<FaHtml5 />} />
                <Box title="CSS3" time="2 anos de experiência" icon={<IoLogoCss3 />} />
                <Box title="JavaScript" time="1 ano de experiência" icon={<IoLogoJavascript />} />
                <Box title="TypeScript" time="1 ano de experiência" icon={<SiTypescript />} />
                <Box title="NextJS" time="1 ano de experiência" icon={<SiNextdotjs />} />
                <Box title="Vite" time="1 ano de experiência" icon={<SiVite />} />
                <Box title="Python" time="1 ano de experiência" icon={<FaPython />} />
                <Box title="Figma" time="1 ano de experiência" icon={<IoLogoFigma />} />
                <Box title="Git" time="2 anos de experiência" icon={<FaGitAlt />} />
                <Box title="Github" time="2 anos de experiência" icon={<FaGithub />} />
                <Box title="MySQL" time="6 meses de experiência" icon={<TbBrandMysql />} />
                <Box title="TailwindCSS" time="1 ano de experiência" icon={<SiTailwindcss />} />
                <Box title="React" time="1 ano de experiência" icon={<IoLogoReact />} />
                <Box title="ReactNative" time="4 meses de experiência" icon={<TbBrandReactNative />} />
                <Box title="Photoshop" time="2 meses de experiência" icon={<SiAdobephotoshop />} />
                <Box title="Firebase" time="6 meses de experiência" icon={<SiFirebase />} />

            </div>

        </div>

        </div>

    )

}