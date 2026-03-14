import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="logo font-bold">6.7Zip.D.R.I.L.L.Game</div>
      <nav className="flex gap-2">
        <button className="text-xs md:text-sm lg:text-base px-2 py-1">
          Головна
        </button>
        <button className="text-xs md:text-sm lg:text-base px-2 py-1">
          Про гру
        </button>
      </nav>
    </header>
  );
}