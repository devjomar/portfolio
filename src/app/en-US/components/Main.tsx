import { DownloadSimple, GithubLogo, LinkedinLogo, Translate } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import Coder from "../../../../public/coder.svg";

export function Main() {
  return (
    <div className="flex justify-center items-center h-screen p-5">

      <div className="flex items-center gap-5 max-sm:flex-col-reverse">

        <div className="flex flex-col gap-10 sm:max-w-[350px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[800px]">

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Pleasure, <strong>João Omar.</strong>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                <strong>Web</strong> Developer
              </h2>
            </div>
            <h3 className="text-base xl:text-xl 2xl:text-3xl text-neutral">
              With one year of experience, mainly focused on JavaScript development.
              I have significant experience with the Node.js environment and frameworks
              like Next.js and Nest.js.
            </h3>
          </div>
          
          <nav className="flex items-center gap-5 -ml-1">
            <nav className="flex items-center gap-5">
              <a href="https://linkedin.com/in/devjomar" target="_blank">
                <LinkedinLogo size={48} weight="fill" className="hover:text-neutral" />
              </a>
              <a href="https://github.com/devjomar" target="_blank">
                <GithubLogo size={48} weight="fill" className="hover:text-neutral" />
              </a>
            </nav>

            <nav className="flex items-center gap-5">
              <div className="border-r border-black pr-5">
                <Link href="/pt-BR" className="flex items-center duration-300 hover:text-neutral">
                  <Translate weight="bold" size={30} />
                </Link>
              </div>
              <a href="/resume.pdf" download="João Omar - Resume.pdf" className="flex items-center gap-2 py-2 px-3 font-bold rounded-md bg-black text-white duration-300 hover:bg-neutral">
                <span>Resume</span>
                <DownloadSimple weight="bold" />
              </a>
            </nav>
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
