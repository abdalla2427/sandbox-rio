import "./sobre.css";
import cicloComoFuncionava from "./ciclo-como-funciona.svg";
import ariane from "./equipe/arianecaxias.jpeg";
import helena from "./equipe/helenahocayen.jpeg";
import carina from "./equipe/carina.jpeg";
import katia from "./equipe/katia.jpeg";
import rachel from "./equipe/rachelmilito2.jpeg";
import rafael from "./equipe/rafaelwanderley.jpeg";
import linkedin from "./equipe/icon-linkedin.webp";
import videoSandbox from "./video-sandbox.mp4";

export const Sobre = () => {
  return (
    <section id="bg-sobre">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div id="o-que-eh-bg">
        <div id="o-que-eh-foto" className="parallax"></div>
      </div>
      <div className="bloco-texto">
        <div className="navegacao-externa" id="o-que-eh-section" />
        <div style={{ marginTop: 20 }}>
          <div className="titulo-texto-sobre">
            <div className="decoracao-titulo-sobre" />
            <h1> O QUE É?</h1>
          </div>
          <div style={{ padding: "0vh 22vw 6vh 8vw" }}>
            <p>
              O Sandbox.Rio é uma iniciativa da Secretaria de Desenvolvimento
              Econômico, Inovação e Simplificação da Prefeitura do Rio de
              Janeiro. Através dele, produtos, serviços ou processos que não se
              enquadram no cenário regulatório pré-existente poderão ser
              testados em um ambiente controlado, através de autorização
              temporária concedida pelo Município.
            </p>
            <p>
              A partir dos testes realizados, são coletadas informações que
              auxiliam a Prefeitura na compreensão das inovações, garantindo um
              arcabouço regulatório receptivo e aderente às novas tecnologias.
              Além disso, a base de dados gerada no período de testes ajuda os
              gestores públicos na concepção de políticas públicas de interesse
              do Município.
            </p>
          </div>
        </div>
      </div>
      <div id="vantagens-bg">
        <div id="vantagens-foto" className="parallax"></div>
      </div>
      <div className="bloco-texto">
        <div className="navegacao-externa" id="vantagens-section" />
        <div style={{ marginTop: 20 }}>
          <div className="titulo-texto-sobre">
            <div className="decoracao-titulo-sobre" />
            <h1> QUAIS AS VANTAGENS?</h1>
          </div>
          <ul
            id="lista-vantagens"
            style={{ padding: "0vh 8vw 6vh 8vw", display: "flex" }}
          >
            <li>
              <h5 className="font_5" style={{ fontSize: 24 }}>
                <span className="color_23">
                  <span
                    style={{
                      fontFamily:
                        "helvetica-w01-light,helvetica-w02-light,sans-serif",
                      color: "#9E72B0",
                    }}
                  >
                    01 /
                  </span>
                </span>
              </h5>
              <p>
                Redução dos custos e do tempo de entrada de ideias inovadoras no
                mercado
              </p>
            </li>
            <li>
              <h5 className="font_5" style={{ fontSize: 24 }}>
                <span className="color_23">
                  <span
                    style={{
                      fontFamily:
                        "helvetica-w01-light,helvetica-w02-light,sans-serif",
                      color: "#9E72B0",
                    }}
                  >
                    02 /
                  </span>
                </span>
              </h5>
              <p>
                Maior facilidade na obtenção de financiamento para projetos
                inovadores, em razão da maior segurança jurídica
              </p>
            </li>
            <li>
              <h5 className="font_5" style={{ fontSize: 24 }}>
                <span className="color_23">
                  <span
                    style={{
                      fontFamily:
                        "helvetica-w01-light,helvetica-w02-light,sans-serif",
                      color: "#9E72B0",
                    }}
                  >
                    03 /
                  </span>
                </span>
              </h5>
              <p>
                Interlocução com órgãos governamentais essenciais para o
                desenvolvimento da atividade em âmbito municipal
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="participar-bg">
        <div id="participar-foto" className="parallax"></div>
      </div>
      <div className="bloco-texto">
        <div className="navegacao-externa" id="quem-pode-participar-section" />
        <div style={{ marginTop: 20 }}>
          <div className="titulo-texto-sobre">
            <div className="decoracao-titulo-sobre" />
            <h1> QUEM PODE PARTICIPAR?</h1>
          </div>
          <div style={{ padding: "0vh 22vw 6vh 8vw" }}>
            <p>
              Qualquer pessoa jurídica com capacidade técnica e financeira para
              executar os projetos elegíveis ao sandbox, como empresas,
              institutos de pesquisa e outras entidades voltadas à promoção de
              inovações tecnológicas.
            </p>
          </div>
        </div>
      </div>
      <div id="participar-bg">
        <div id="participar-foto" className="parallax"></div>
      </div>
      <div className="bloco-texto">
        <div className="navegacao-externa" id="como-funciona-section" />
        <div style={{ marginTop: 20 }}>
          <div className="titulo-texto-sobre">
            <div className="decoracao-titulo-sobre" />
            <h1> COMO FUNCIONA O SANDBOX?</h1>
          </div>
          <div id="div-ciclo-como-funciona">
            <img src={cicloComoFuncionava} />
          </div>
          <div style={{ padding: "0vh 22vw 6vh 8vw" }}>
            <p>
              O Sandbox.Rio pretende selecionar projetos que auxiliem, de algum
              modo, o desenvolvimento econômico da cidade do Rio de Janeiro por
              meio de soluções inovadoras. Para isso, é necessário que os
              projetos estejam alinhados às competências de atuação dos
              municípios. São exemplos de projetos elegíveis ao Sandbox.Rio:
            </p>
            <ul id="lista-ciclo-como-funciona">
              <li>
                <p>
                  Simplificações na forma de licenciar projetos urbanísticos
                </p>
              </li>
              <li>
                <p>
                  Tecnologias que promovam a digitalização dos serviços públicos
                  municipais
                  <br />
                </p>
              </li>
              <li>
                <p>
                  Utilização segura de drones para a atuação de entidades
                  públicas e privadas
                  <br />
                </p>
              </li>
              <li>
                <p>
                  Instalação de estruturas nas vias públicas municipais para a
                  promoção de iniciativas sustentáveis
                </p>
              </li>
              <li>
                <p>Soluções de Smart City e Mobility as a Service (MaaS)</p>
              </li>
            </ul>
          </div>
        </div>
        <div id="venha-participar-do-sandbox-bg">
          <div id="venha-participar-do-sandbox" className="parallax"></div>
        </div>
        <div className="bloco-texto">
          <div
            id="equipe-section"
            style={{ marginTop: 20, marginBottom: "5vh" }}
          >
            <div className="titulo-texto-sobre">
              <div className="decoracao-titulo-sobre" />
              <h1> EQUIPE</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div id="equipe-container">
                <div className="card-membro">
                  <img className="foto-membro" src={carina} />
                  <span className="nome-membro">Carina Quirino</span>
                  <a
                    className="contato-membro"
                    target="_blank"
                    href="https://www.linkedin.com/in/carinacquirino/"
                  >
                    <img src={linkedin} />
                  </a>
                  <div className="descricao-membro">
                    Subsecretária de Regulação e Ambiente de Negócios
                  </div>
                </div>
                <div className="card-membro">
                  <img className="foto-membro" src={rafael} alt="" />
                  <span className="nome-membro">Rafael Wanderley</span>
                  <a
                    className="contato-membro"
                    target="_blank"
                    href="https://www.linkedin.com/in/rafaelnwanderley/"
                  >
                    <img src={linkedin} />
                  </a>
                  <div className="descricao-membro">
                    Bacharel em Direito pela UFRJ
                  </div>
                </div>
                <div className="card-membro">
                  <img className="foto-membro" src={ariane} />
                  <span className="nome-membro">Ariane Caxias</span>
                  <a
                    className="contato-membro"
                    target="_blank"
                    href="https://www.linkedin.com/in/ariane-caxias/"
                  >
                    <img src={linkedin} />
                  </a>
                  <div className="descricao-membro">
                    Mestranda em Direito Constitucional na PUC-Rio
                  </div>
                </div>
                <div className="card-membro">
                  <img className="foto-membro" src={helena} />
                  <span className="nome-membro">Helena Hocayen</span>
                  <a
                    className="contato-membro"
                    target="_blank"
                    href="https://www.linkedin.com/in/carinacquirino/"
                  >
                    <img src={linkedin} />
                  </a>
                  <div className="descricao-membro">
                    Mestra em Políticas Públicas pela University of Bristol
                  </div>
                </div>
                <div className="card-membro">
                  <img className="foto-membro" src={katia} />
                  <span className="nome-membro">Kátia Alves</span>
                  <a
                    className="contato-membro"
                    target="_blank"
                    href="https://www.linkedin.com/in/katia-aiko-nishiyama-alves-b1583472/"
                  >
                    <img src={linkedin} />
                  </a>
                  <div className="descricao-membro">
                    Doutora em Economia (FGV)
                  </div>
                </div>
                <div className="card-membro">
                  <img className="foto-membro" src={rachel} alt="" />
                  <span className="nome-membro">Rachel Milito</span>
                  <a className="contato-membro" target="_blank" href="">
                    <img src={linkedin} />
                  </a>
                  <div className="descricao-membro">
                    Bacharel em Direito pela UNIRIO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="venha-participar-do-sandbox-bg">
          <div id="venha-participar-do-sandbox" className="parallax"></div>
        </div>
        <div className="bloco-texto">
          <div style={{ marginTop: 20, marginBottom: "5vh" }}>
            <div className="titulo-texto-sobre">
              <div className="decoracao-titulo-sobre" />
              <h1> VENHA PARCTIPAR DO SANBOX.RIO</h1>
            </div>
            <div
              style={{
                paddingTop: "10vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video
                className="video-sandbox"
                playsInline
                autoPlay
                loop
                controls
                style={{ margin: 0 }}
              >
                <source src={videoSandbox} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
