export function Footer() {
  return (
    <footer className="flex justify-end h-full p-5 bg-black text-white">
      <div className="flex flex-col items-end">
        <span className="italic">devjomar © {new Date().getFullYear()}</span>
        <span>Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}