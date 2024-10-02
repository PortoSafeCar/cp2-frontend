import Image from "next/image";

export default function Recepcao() {
  return (
    <>
      <h2 className="text-2xl font-bold">Recepção e Controvérsia</h2>
      <Image
        src="http://localhost:3000/api/apod/2024-09-28"
        width={400}
        height={400}
        alt="Imagem da NASA do dia"
      />
      <p>
        O lançamento de Worlds in Collision gerou intensa controvérsia,
        especialmente dentro da comunidade científica. Astrônomos e físicos
        criticaram ferozmente as ideias de Velikovsky, considerando-as
        pseudociência por falta de evidências empíricas sólidas. Mesmo assim, o
        livro foi um sucesso de vendas, capturando a imaginação do público com
        sua mistura intrigante de ciência, mitologia e história. Apesar das
        críticas, Worlds in Collision teve um impacto duradouro, inspirando
        debates sobre a natureza dos cataclismos antigos e influenciando
        movimentos alternativos na ciência e na arqueologia. As ideias de
        Velikovsky também estimularam a criação de outras teorias catastrofistas
        e continuam a ser estudadas e debatidas em círculos acadêmicos e
        amadores.
      </p>
    </>
  );
}
