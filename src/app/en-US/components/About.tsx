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
            About <strong>me</strong>
          </h1>
          <article className="flex flex-col gap-5 text-base xl:text-xl 2xl:text-2xl text-neutral">
            <p>
              My name is João Omar, I&apos;m 21 years old, and I&apos;m a Systems Information student.
              My focus is on creating efficient and scalable applications, both on the front-end
              and back-end, using the best development practices.
            </p>
            <p>
              In addition to JavaScript, I have delved deeply into languages like Python, C#, and
              Golang for different solutions. Furthermore, I have been studying DevOps and UI/UX
              Design to understand how best practices in quality are applied, both in software
              development and in user experience, as well as in the precise definition of project
              requirements.
            </p>
            <p>
              My motivation comes from seeing the positive impact that technology can have on our
              daily lives. I aim to contribute my ideas to enhance and optimize people&apos;s daily
              routines.
            </p>
          </article>
        </div>

      </div>

    </div>
  );
}