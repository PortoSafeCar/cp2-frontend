import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold">Home</h2>
      <Image
        src="http://localhost:3000/api/apod/2024-09-30"
        width={400}
        height={400}
        alt="Imagem da NASA do dia"
      />
      <p>
      Worlds in Collision é uma obra revolucionária escrita pelo psicanalista e cientista russo Immanuel Velikovsky, publicada em 1950. O livro desafia as concepções tradicionais sobre história, astronomia e geologia, propondo uma série de eventos cósmicos que teriam moldado a história da Terra e da humanidade. A premissa central de Velikovsky é que catástrofes de magnitude planetária ocorreram na antiguidade devido a interações violentas entre planetas, principalmente Vênus e Marte, o que teria causado profundas mudanças na Terra.

      </p>
      <p>
        
      </p>
    </>
  );
}
