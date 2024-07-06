import { Translate } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-end p-3 bg-white text-black">
      <Link href="/en-US" className="flex items-center gap-2 text-xl duration-300 hover:text-neutral">
        <Translate weight="bold" />
        <span>English</span>
      </Link>
    </header>
  );
}