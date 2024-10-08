import Image from "next/image";
import Boy from "../../../../public/boy.svg";

export function About() {
  return (
    <div className="flex justify-center h-full p-5 lg:h-screen">

      <div className="flex items-center gap-5 max-md:flex-col">

        <picture className="max-w-full md:min-w-[40%]">
          <Image
            src={Boy}
            alt="Boy Icon"
            className="md:min-w-[50%]"
          />
        </picture>

        <div className="flex flex-col gap-10 lg:p-5 sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px]">

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Sobre <strong>mim</strong>
          </h1>
          <article className="flex flex-col gap-5 text-base xl:text-xl 2xl:text-2xl text-neutral">
            <p>
              Me chamo João Omar, tenho 21 anos, sou estudante de Sistemas de Informação.
              Meu foco está em criar aplicações eficientes e escaláveis, tanto no front-end quanto
              no back-end, utilizando as melhores práticas de desenvolvimento.
            </p>
            <p>
              Além do NodeJS, tenho explorado profundamente o ambiente .NET
              para diferentes soluções. Mais a fundo, venho estudando DevOps
              para compreender como são aplicadas as melhores práticas de
              qualidade no desenvolvimento de software e na
              definição precisa dos requisitos do projeto.
            </p>
            <p>
              Minha motivação vem do impacto positivo que a tecnologia pode trazer ao nosso cotidiano. 
              Além das habilidades técnicas, valorizo a colaboração e o trabalho em equipe. 
              Programação é um esforço coletivo e estou sempre disposto a compartilhar conhecimento 
              para contribuir num ambiente de trabalho produtivo.
            </p>
          </article>
        </div>

      </div>

    </div>
  );
}
