import Image from "next/image";

export default function Consequencias() {
  return (
    <>
      <h2 className="text-2xl font-bold">Principais Consequências e Impactos</h2>
      <Image
        src="http://localhost:3000/api/apod/2024-09-27"
        width={400}
        height={400}
        alt="Imagem da NASA do dia"
      />
      <p>
De acordo com Velikovsky, esses eventos cósmicos resultaram em várias mudanças geológicas, como o deslocamento de massas de água e o levantamento de montanhas. Ele também acredita que influenciaram o clima e até mesmo o comportamento das populações antigas, que teriam vivenciado dias de escuridão, terremotos devastadores e inundações catastróficas.

Uma das afirmações mais ousadas de Velikovsky é a ideia de que a história humana não é linear, mas pontuada por eventos de destruição em grande escala causados por forças extraterrestres. Ele sugere que muitas dessas histórias de destruição foram mitologizadas e incorporadas em textos religiosos e folclóricos ao redor do mundo.

      </p>
    </>
  );
}
