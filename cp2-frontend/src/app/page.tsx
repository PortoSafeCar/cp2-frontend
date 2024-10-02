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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio iure
        sapiente, eaque sed eius suscipit quod sit molestiae tenetur quis
        eligendi voluptatum dolore, unde quae minus perferendis doloribus odit,
        nobis in ea illo amet incidunt. Natus assumenda debitis libero
        voluptatum! Unde dolore cum, consectetur reiciendis quibusdam culpa,
        officia tempore quasi, magnam voluptatem facere. Laboriosam, quas
        magnam? Dignissimos distinctio, tempora dicta ad porro dolores facilis
        quos ipsam dolore excepturi, minus error tempore perferendis obcaecati
        nemo deleniti labore ipsa ex expedita nisi ipsum at odit fuga? Et
        distinctio, fuga, esse totam nam earum debitis veniam impedit, odio
        obcaecati inventore ipsa quas!
      </p>
    </>
  );
}
