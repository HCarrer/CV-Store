import SeparatorBar from "../../common/SeparatorBar.tsx";

const AboutText = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center h-fit w-[650px] mx-auto">
      <span className="text-5xl">SOBRE O PROJETO</span>
      <SeparatorBar
        direction="horizontal"
        color="blue"
        width={1}
        margin={5}
        length="4/5"
      />
      <div className="px-20 flex flex-col items-center gap-y-3">
        <span className="text-center text-sm">
          QUAL A SEMELHANÇA ENTRE UM CURRÍCULO E UMA LOJA?
          <br />
          OS DOIS QUEREM CONVENCER ALGUÉM A ADQUIRIR UM PRODUTO
        </span>
        <span className="text-center text-sm">
          E SE O PRODUTO FOSSE MINHA EXPERIÊNCIA PROFISSIONAL?
          <br />
          NESSE CASO MEU CURRÍCULO NÃO SERIA TAMBÉM UMA LOJA?
        </span>
        <span className="text-center text-sm">
          COM ESSA PROPOSTA EM MENTE, TE CONVIDO A CONHECER UM POUCO SOBRE MIM E
          MINHAS EXPERIÊNCIAS NAS MAIS DIVERSAS ÁREAS DE UMA MANEIRA INTERATIVA
          E PRÁTICA... AFINAL, TEM JEITO MELHOR DE CONHECER O TRABALHO DE ALGUÉM
          QUE VÊ-LO COM SEUS PRÓPRIOS OLHOS?
        </span>
      </div>
    </div>
  );
};

export default AboutText;
