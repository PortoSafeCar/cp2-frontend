import Image from "next/image";
import calculo from "../../assets/calculo.jpg";

export default function Teorias() {
  return (
    <>
      <h2 className="text-2xl font-bold">Teorias Principais</h2>
      <Image
        src="http://localhost:3000/api/apod/2024-09-29"
        width={400}
        height={400}
        alt="Imagem da NASA do dia"
      />
      <p>
        Velikovsky sugere que Vênus foi ejetado como um cometa de Júpiter e que,
        ao passar perto da Terra, causou uma série de catástrofes. Ele conecta
        esses eventos a relatos mitológicos e históricos de várias culturas,
        propondo que antigas civilizações testemunharam e registraram essas
        perturbações. Por exemplo, ele relaciona os eventos descritos na Bíblia,
        como as pragas do Egito e a travessia do Mar Vermelho, com os efeitos da
        aproximação de Vênus à Terra. A narrativa continua ao propor que, após
        sua interação com a Terra, Vênus se estabilizou em sua atual órbita
        planetária. Em outro ponto da história, Velikovsky afirma que Marte
        também desempenhou um papel importante em causar distúrbios planetários,
        contribuindo para novas catástrofes.
      </p>
      <p>
        Se você estiver buscando cálculos de mecânica orbital que teriam sido
        necessários para validar teorias como a de Velikovsky, esses envolveriam
        o uso de fórmulas da gravitação universal, que ele não aplicou
        diretamente em suas obras. Por exemplo, para modelar a interação entre
        dois corpos celestes (como Vênus e a Terra), ele teria precisado
        utilizar a Lei da Gravitação Universal de Newton:
      </p>
      <Image
        src={calculo}
        width={200}
        height={200}
        alt="Imagem de calculo usado na teoria"
      />
    </>
  );
}
