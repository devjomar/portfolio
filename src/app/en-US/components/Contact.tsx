import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  return (
    <div className="flex justify-center h-screen p-5">

        <div className="flex flex-col h-full justify-evenly">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <strong>Learn</strong> more <strong>&</strong>
            <br />
            Contact <strong>Us !</strong>
          </h1>
          <nav className="flex flex-col gap-4 xl:gap-8 text-neutral">
            <a href="http://linkedin.com/in/devjomar" target="_blank" className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl underline max-w-max hover:text-black">
              <LinkedinLogo weight="bold" />
              /in/devjomar
            </a>
            <a href="http://github.com/devjomar" target="_blank" className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl underline max-w-max hover:text-black">
              <GithubLogo weight="bold" />
              github@devjomar
            </a>
            <a href="mailto:devjomar.jobs@gmail.com" className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-max hover:text-black">
              <EnvelopeSimple weight="bold" />
              devjomar.jobs@gmail.com
            </a>
          </nav>

      </div>
    </div>
  );
}