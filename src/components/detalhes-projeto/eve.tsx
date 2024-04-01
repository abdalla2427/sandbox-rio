import { DetalhesProjeto } from "./detalhes-projeto";
import eveImage from "./eve.jpeg";

export const EveDetalhes = () => {
  const descricao = (
    <>
      <p>
        A Eve Air Mobility, subsidiária de aeronaves elétricas da Embraer, se
        dedica a acelerar o ecossistema de mobilidade aérea urbana (UAM), com um
        projeto eVTOL (veículo elétrico de decolagem e pouso vertical) avançado,
        e está preparando os documentos legais para trabalhar junto da
        Prefeitura do Rio para participar do Sandbox e assim estudar a futura
        operação dos eVTOLS na cidade do Rio de Janeiro. O objetivo é o
        transporte de pessoas partindo e indo de/para aeroportos, voos
        panorâmicos – fomentando ainda mais o turismo –, como também o
        transporte de pessoas entre pontos estratégicos dentro da cidade do Rio.
        Por ser um veículo totalmente elétrico, esta iniciativa se alinha as
        ações do município em neutralizar as emissões de gases estufas próximas
        décadas.
      </p>
    </>
  );

  return <DetalhesProjeto descricao={descricao} urlImagemFundo={eveImage} />;
};
