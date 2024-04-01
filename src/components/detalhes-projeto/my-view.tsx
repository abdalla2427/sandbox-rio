import { DetalhesProjeto } from "./detalhes-projeto";
import myView from "./my_view.jpeg";

export const MyViewDetalhes = () => {
  const descricao = (
    <>
      <p>
        A empresa MyView, que já presta serviços para empresas e rede de
        supermercados, vai poder testar sua solução de delivery para comércios
        locais (restaurantes, mercados e outros) por drones terrestres
        teleoperados, chamados de robôs D4 (Door-to-Door Drone Delivery), que
        vão se locomover nas calçadas da cidade, em vias e horários previamente
        delimitados pela SMDEIS e demais órgãos competentes. Por meio de
        parcerias com comerciantes e dos Hubs D4 - locais de espera e
        carregamento dos robôs - a empresa pretende otimizar a logística do
        delivery de curta distância, reduzindo custos e tempo nas entregas, que
        são realizadas sem emissão de CO2.
      </p>
    </>
  );

  return <DetalhesProjeto descricao={descricao} urlImagemFundo={myView} />;
};
