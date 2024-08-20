import { DownloadSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Coder from "../../../../public/coder.svg";

export function Main() {
  return (
    <div className="flex justify-center items-center h-screen p-5">

      <div className="flex items-center gap-5 max-sm:flex-col-reverse">

        <div className="flex flex-col gap-10 sm:max-w-[350px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[800px]">

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Prazer, <strong>João Omar.</strong>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                <strong>Engenheiro</strong> de <strong>Software</strong>
              </h2>
            </div>
            <h3 className="text-base xl:text-xl 2xl:text-3xl text-neutral">
              Com um ano de experiência, concentrado principalmente no desenvolvimento
              backend. Tenho experiência significativa com os ambientes
              NodeJS e .NET.
            </h3>
          </div>
          
          <nav className="flex items-center gap-5 -ml-1">
            <a href="https://linkedin.com/in/devjomar" target="_blank">
              <LinkedinLogo size={48} weight="fill" className="hover:text-neutral" />
            </a>
            <a href="https://github.com/devjomar" target="_blank">
              <GithubLogo size={48} weight="fill" className="hover:text-neutral" />
            </a>
            <a href="/curriculo.pdf" download="João Omar - Curriculo.pdf" className="flex items-center gap-2 py-2 px-3 font-bold rounded-md bg-black text-white duration-300 hover:bg-neutral">
              <span>Curriculo</span>
              <DownloadSimple weight="bold" />
            </a>
          </nav>
        </div>

        <picture className="-ml-10 sm:-ml-16 xl:-ml-24 max-w-max">
          <Image
            src={Coder}
            alt="Coder Icon"
          />
        </picture>

      </div>

    </div>
  );
}
