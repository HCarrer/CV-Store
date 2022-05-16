export const About = {
  url: "about",
  header: "SOBRE",
  data: [
    {
      name: "REACT",
      level: 3.5,
    },
  ],
};

interface IMainPage {
  [section: string]: JSX.Element;
}

export const MainPage: IMainPage = {
  header: <>SOBRE O PROJETO</>,
  firstSection: (
    <>
      QUAL A SEMELHANÇA ENTRE UM CURRÍCULO E UMA LOJA?
      <br />
      OS DOIS QUEREM CONVENCER ALGUÉM A ADQUIRIR UM PRODUTO
    </>
  ),
  secondSection: (
    <>
      E SE O PRODUTO FOSSE MINHA EXPERIÊNCIA PROFISSIONAL?
      <br />
      NESSE CASO MEU CURRÍCULO NÃO SERIA TAMBÉM UMA LOJA?
    </>
  ),
  thirdSection: (
    <>
      COM ESSA PROPOSTA EM MENTE, TE CONVIDO A CONHECER UM POUCO SOBRE MIM E
      MINHAS EXPERIÊNCIAS NAS MAIS DIVERSAS ÁREAS DE UMA MANEIRA INTERATIVA E
      PRÁTICA... AFINAL, TEM JEITO MELHOR DE CONHECER O TRABALHO DE ALGUÉM QUE
      VÊ-LO COM SEUS PRÓPRIOS OLHOS?
    </>
  ),
};
