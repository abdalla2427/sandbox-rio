import "./chamadas.css";
import editalPdf from "/anexos/segundo-ciclo/Edital.pdf";
import anexo1SegundoCiclo from "/anexos/segundo-ciclo/ANEXO I.pdf";
import anexo2SegundoCiclo from "/anexos/segundo-ciclo/ANEXO II.pdf";
import anexo3SegundoCiclo from "/anexos/segundo-ciclo/ANEXO III.pdf";
import anexo4SegundoCiclo from "/anexos/segundo-ciclo/ANEXO IV.pdf";
import anexo5SegundoCiclo from "/anexos/segundo-ciclo/ANEXO V.pdf";
import anexo1PrimeiroCiclo from "/anexos/primeiro-ciclo/ANEXO I.pdf";

export const Chamadas = () => {
  const clickCard = (elemento: any) => {
    const el =
      elemento.currentTarget.getElementsByClassName("conteudo-card-faq")[0];
    el.classList.toggle("active");
  };

  return (
    <section>
      <div className="anexos">
        <div className="navegacao-externa" id="como-funciona-section"></div>
        <div className="titulo-texto-chamadas">
          <div className="decoracao-titulo-chamadas"></div>
          <h1>Edital e Anexos</h1>
          <h1> 2° Ciclo</h1>
        </div>
        <ul>
          <li>
            <a href="anexos/segundo-ciclo/Edital.pdf" target="blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao"> campaign </span>
                <span className="texto-botao"> Edital de Chamada Pública </span>
              </button>
            </a>
          </li>
          <li>
            <a href={anexo1SegundoCiclo} target="_blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  ondemand_video
                </span>
                <span className="texto-botao">
                  Anexo I - Instruções para Apresentação e Vídeo
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href={anexo2SegundoCiclo} target="_blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  description
                </span>
                <span className="texto-botao">
                  Anexo II - Termo de Implantação de Solução Inovadora
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href={anexo3SegundoCiclo} target="_blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  badge
                </span>
                <span className="texto-botao">
                  Anexo III - Carta de Nomeação de Representante
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href={anexo4SegundoCiclo} target="_blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  border_color
                </span>
                <span className="texto-botao">
                  Anexo IV - Minuta de Resolução para Autorização Temporária
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href={anexo5SegundoCiclo} target="_blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  lock
                </span>
                <span className="texto-botao">
                  Anexo V - Termo de Confidencialidade
                </span>
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className="link-inscricao">
        <p>
          Para preencher o formulário de inscrição
          <a href="https://form.jotform.com/232645644952665" target="_blank">
            clique aqui
          </a>
        </p>
      </div>
      <div className="anexos">
        <div className="titulo-texto-chamadas">
          <div className="decoracao-titulo-chamadas"></div>
          <h1>2º Ciclo de Chamadas</h1>
        </div>
        <ul>
          <li>
            <p>
              Análise de Elegibilidade:
              <a
                href="anexos/segundo-ciclo/Resultados Analise Elegibilidade.pdf"
                target="_blank"
              >
                Resultados
              </a>
            </p>
          </li>
          <li>
            <p>Resultados pré-seleção das propostas:</p>
          </li>
          <li>
            <p>Propostas Selecionadas:</p>
          </li>
        </ul>
      </div>
      <div className="anexos">
        <div className="navegacao-externa" id="como-funciona-section"></div>
        <div className="titulo-texto-chamadas">
          <div className="decoracao-titulo-chamadas"></div>
          <h1>Edital e Anexos - 1° ciclo</h1>
        </div>
        <ul>
          <li>
            <a href={editalPdf} target="_blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao"> campaign </span>
                <span className="texto-botao"> Edital de Chamada Pública </span>
              </button>
            </a>
          </li>
          <li>
            <a href={anexo1PrimeiroCiclo} target="blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  ondemand_video
                </span>
                <span className="texto-botao">
                  Anexo I - Instruções para Apresentação e Vídeo
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href="anexos/primeiro-ciclo/ANEXO II.pdf" target="blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  description
                </span>
                <span className="texto-botao">
                  Anexo II - Termo de Implantação de Solução Inovadora
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href="anexos/primeiro-ciclo/ANEXO III.pdf" target="blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  badge
                </span>
                <span className="texto-botao">
                  Anexo III - Carta de Nomeação de Representante
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href="anexos/primeiro-ciclo/ANEXO IV.pdf" target="blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  border_color
                </span>
                <span className="texto-botao">
                  Anexo IV - Minuta de Resolução para Autorização Temporária
                </span>
              </button>
            </a>
          </li>
          <li>
            <a href="anexos/primeiro-ciclo/ANEXO V.pdf" target="blank">
              <button className="documentos-selecao">
                <span className="material-icons icone-botao important-40-font">
                  lock
                </span>
                <span className="texto-botao">
                  Anexo V - Termo de Confidencialidade
                </span>
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className="anexos">
        <div className="titulo-texto-chamadas">
          <div className="decoracao-titulo-chamadas"></div>
          <h1>1º Ciclo de Chamadas</h1>
        </div>
        <ul>
          <li>
            <p>
              Análise de Elegibilidade:
              <a
                href="anexos/primeiro-ciclo/Resultados Analise Elegibilidade.pdf"
                target="_blank"
              >
                Resultados
              </a>
            </p>
          </li>
          <li>
            <p>
              Resultados pré-seleção das propostas:
              <a
                href="anexos/primeiro-ciclo/Resultados Pre Selecao.pdf"
                target="_blank"
              >
                Resultados
              </a>
            </p>
          </li>
          <li>
            <p>
              Propostas Selecionadas:
              <a
                href="anexos/primeiro-ciclo/Propostas Selecionadas.pdf"
                target="_blank"
              >
                Resultados
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="faq">
        <div className="navegacao-externa" id="faq-section"></div>
        <div className="titulo-texto-chamadas">
          <div className="decoracao-titulo-chamadas"></div>
          <h1>FAQ</h1>
          <div id="lista-faq">
            <div className="card-faq" onClick={clickCard}>
              <div className="titulo-card-faq">
                <h3>Quem pode se inscrever?</h3>
                <span className="material-icons icone-expand-more">
                  expand_more
                </span>
              </div>
              <div className="conteudo-card-faq">
                <p>
                  Qualquer pessoa jurídica como empresas, institutos de pesquisa
                  e outras entidades voltadas à promoção de inovações
                  tecnológicas, om capacidade técnica e financeira e que
                  apresentem projetos elegíveis,
                </p>
              </div>
            </div>
            <div className="card-faq" onClick={clickCard}>
              <div className="titulo-card-faq">
                <h3>Meu Projeto é elegível?</h3>
                <span className="material-icons icone-expand-more">
                  expand_more
                </span>
              </div>
              <div className="conteudo-card-faq">
                <p>
                  São elegíveis ao Sandbox projetos que buscam desenvolver
                  soluções e/ou produtos inovadores com potencial impacto
                  positivo à sociedade e ao município. Para isso, a Proposta
                  deve conter os elementos presentes no item 5 do Edital e deve,
                  dentre outros fatores:
                </p>
                <ul>
                  <li>
                    <p>
                      Expor o problema a ser solucionado pelo produto e/ou
                      serviço proposto, incluindo descrição de ganhos e
                      benefícios ao Município e à coletividade;
                    </p>
                  </li>
                  <li>
                    <p>
                      Descrever as razões pelas quais o produto e/ou serviço é
                      considerado inovador;
                    </p>
                  </li>
                  <li>
                    <p>
                      Apresentar um comparativo entre o produto e/ou serviço
                      objeto do projeto e aqueles oferecidos atualmente no
                      segmento, ressaltando suas similaridades e diferenças;
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-faq" onClick={clickCard}>
              <div className="titulo-card-faq">
                <h3>Há limitação de tema?</h3>
                <span className="material-icons icone-expand-more">
                  expand_more
                </span>
              </div>
              <div className="conteudo-card-faq">
                <p>
                  Não. Projetos de matérias diversas são admitidos no Projeto,
                  desde que a regulação pretendida seja compatível com a
                  competência municipal. São exemplos de temas afetos ao
                  município as questões urbanísticas, de transporte local,
                  eficientização dos serviços públicos municipais,
                  desenvolvimento econômico da cidade, dentre outros.
                </p>
              </div>
            </div>
            <div className="card-faq" onClick={clickCard}>
              <div className="titulo-card-faq">
                <h3>Qual o prazo dos testes?</h3>
                <span className="material-icons icone-expand-more">
                  expand_more
                </span>
              </div>
              <div className="conteudo-card-faq">
                <p>
                  Ao se inscrever, a interessado deve optar pelo prazo de 6 ou
                  12 meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
