import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <>
      <section className="flex flex-col bg-white text-black">
        <Main />
        <About />
        <Contact />
      </section>
      <Footer />
    </>
  );
}
