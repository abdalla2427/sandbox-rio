import { DetalhesProjeto } from "./detalhes-projeto";
import urlAmbev from "./ambev.jpeg";

export const Ambev = () => {
  const descricao = (
    <>
      <p>
        Entrega de bebidas por veículos não tripulados (drones) é uma das
        soluções inovadoras selecionadas no Sandbox.Rio. A AMBEV vai trazer para
        a cidade do Rio drones que vão transportar bebidas para consumidores e
        Pontos de Vendas (PDVs) em locais controlados, a partir de uma parceria
        com a SpeedBird, que é a primeira empresa a obter o certificado de
        autorização de voo experimental (CAVE), expedido pela Agência Nacional
        de Aviação Civil (ANAC), para a realização de entregas, por meio de um
        de seus modelos de drone, o DLV1.
      </p>
      <p>
        No Sandbox.Rio, as empresas vão realizar o delivery de bebidas com o
        DLV2, que já conta com autorização do Departamento de Controle do Espaço
        Aéreo (DECEA) para acesso ao Espaço Aéreo brasileiro. A partir dos
        droneports, os drones vão operar com texto máximo de voo para 120
        metros, no período de 8 horas da manhã até 6 horas da tarde,
        transportando cargas de até 6,5 kg em velocidade média de 50 km/h. A
        previsão é que ocorram até 25 voos por dia, todos em áreas sem presença
        populacional.
      </p>

      <p>
        A iniciativa busca melhorar a malha logística do Município,
        possibilitando economia de tempo na entrega de consumíveis como bebidas,
        bem como reduzir poluentes pelo uso elétrico de transporte. Além disso,
        a SMDEIS vai estar em diálogo constante com a ANAC e o DECEA para
        compartilhar dados obtidos ao longo da experimentação e contribuir para
        a construção de um quadro regulatório alinhado à inovação experimentada
        no âmbito do Sandbox.Rio.
      </p>
    </>
  );

  return <DetalhesProjeto descricao={descricao} urlImagemFundo={urlAmbev} />;
};
