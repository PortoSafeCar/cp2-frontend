import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-8">
        <li>
          <Link
            className="text-blue-500 visited:text-blue-700"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link className="text-blue-500 visited:text-blue-700" href="/teorias">
            Teorias Principais
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 visited:text-blue-700"
            href="/consequencias"
          >
            Principais Consequências e Impactos
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-500 visited:text-blue-700"
            href="/recepcao"
          >
            Recepção e Controvérsia
          </Link>
        </li>
      </ul>
    </nav>
  );
}
