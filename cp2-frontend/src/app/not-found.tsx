import Image from "next/image";
import Link from "next/link";
import img404 from "../assets/404.jpg";

export default function NotFound() {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <Image
        src={img404}
        width={750}
        height={600}
        alt="Imagem de erro 404"
      />
      <Link href="/">Returnar a Home</Link>
    </div>
  );
}
