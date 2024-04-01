import { DetalhesProjeto } from "./detalhes-projeto";
import ezVolt from "./ez_volt.jpeg";

export const EzVolt = () => {
  const descricao = (
    <>
      <p>
        A Ezvolt Brasil, presente até então em condomínios e pontos comerciais,
        vai poder implantar o “Projeto Eletroposto Carioca”, que consiste em uma
        rede de eletropostos com recarga rápida para veículos híbridos e
        elétricos - inclusive táxis - em pontos previamente definidos. Além do
        seu potencial para contribuir na melhoria da infraestrutura adequada
        para os carros elétricos, este será o primeiro projeto de geração de
        créditos de carbono por meio da recarga de veículos elétricos da América
        Latina, o que se alinha com o Bolsa Verde e o Plano de Desenvolvimento
        Sustentável e Ação Climática do Município, cujo compromisso é construir
        uma cidade neutra em emissões de gases de efeito estufa até 2050.
      </p>
    </>
  );

  return <DetalhesProjeto descricao={descricao} urlImagemFundo={ezVolt} />;
};
