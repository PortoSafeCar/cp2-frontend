import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/teorias">Teorias Principais</Link>
        </li>
        <li>
          <Link href="/consequencias">Principais Consequências e Impactos</Link>
        </li>
        <li>
          <Link href="/recepcao">Recepção e Controvérsia</Link>
        </li>
      </ul>
    </nav>
  );
}
