import "./transparencia.css";
import drone from "./drone.jpeg";

export const Transparencia = () => {
  const noticias = [
    {
      titulo:
        "Prefeitura abre novo edital do Sandbox.Rio e quer atrair empresas estrangeiras",
      urlNoticia:
        "https://oglobo.globo.com/blogs/capital/post/2023/08/prefeitura-abre-novo-edital-do-sandboxrio-e-quer-atrair-empresas-estrangeiras.ghtml",
      data: "04/08/2023 ",
      urlFoto:
        "https://s2-oglobo.glbimg.com/ncm-Nojk0qOlMw-yCmH7tC2-K4o=/0x0:1600x1066/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/z/r/6IkWNNTdiOZ9cL2vigIw/whatsapp-image-2023-07-03-at-18.36.43.jpeg",
    },
    {
      titulo: "SANBOX.RIO - O RIO É TECH - VIDEOCAST #12",
      urlNoticia: "https://img.youtube.com/vi/Z99aNO7D77o/sddefault.jpg",
      data: "25/07/2023 ",
      urlFoto: "https://img.youtube.com/vi/Z99aNO7D77o/sddefault.jpg",
    },
  ];

  return (
    <section id="bg-sobre">
      <div id="o-que-eh-bg">
        <div
          id="o-que-eh-foto"
          style={{
            backgroundImage: drone,
            width: "100vw",
            backgroundColor: "#9E72B0",
          }}
          className="parallax"
        ></div>
      </div>
      <div
        className="bloco-texto"
        style={{ width: "100vw", paddingTop: "6vh" }}
      >
        <div className="navegacao-externa" id="o-que-eh-section"></div>
        <div className="mt-20">
          <div className="titulo-texto-transparencia">
            <div className="decoracao-titulo-chamadas"></div>
            <h1>LEGISLAÇÃO APLICÁVEL</h1>
          </div>
          <div style={{ padding: "0vh 22vw 6vh 8vw" }}>
            <ul id="lista-editais">
              <li className="lista-link">
                <a
                  href="anexos/Diario Oficial do Município do Rio de Janeiro 27-04‐2022.pdf"
                  target="_blank"
                >
                  <p>Decreto Municipal nº 50.697/2022</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="participar-bg">
        <div
          id="participar-foto"
          style={{
            backgroundImage: drone,
            width: "100vw",
          }}
          className="parallax"
        ></div>
      </div>
      <div
        id="noticias-section"
        className="bloco-texto"
        style={{ paddingTop: "6vh" }}
      >
        <div
          className="navegacao-externa"
          id="quem-pode-participar-section"
        ></div>
        <div className="mt-20">
          <div className="titulo-texto-transparencia">
            <div className="decoracao-titulo-chamadas"></div>
            <h1>NOTÍCIAS</h1>
          </div>
          <div id="noticia-container">
            {noticias.map((noticia) => (
              <div className="noticia-card">
                <div className="noticia-card-imagem">
                  <img src={noticia.urlFoto} />
                </div>
                <div className="noticia-card-conteudo">
                  <h3 className="noticia-titulo">{noticia.titulo}</h3>
                  <a href={noticia.urlNoticia} className="noticia-ler-mais">
                    <span className="noticia-dia"> {noticia.data} </span>
                    <p>Ler mais</p>
                  </a>
                </div>
              </div>
            ))}
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="https://prefeitura.rio/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-27-at-15.59.46.jpeg" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Iniciativas em inovação da Prefeitura do Rio entram na
                  biblioteca de estudos de caso da OCDE
                </h3>
                <a
                  href="https://prefeitura.rio/desenvolvimento-economico-inovacao-simplificacao/iniciativas-em-inovacao-da-prefeitura-do-rio-entram-na-biblioteca-de-estudos-de-caso-da-ocde/"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 27/09/2023 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="https://mobilidade.estadao.com.br/wp-content/uploads/2023/07/Eletropostos-Rio-de-Janeiro.png" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Projeto de implantação de rede pública de eletropostos é
                  aprovado no Rio de Janeiro
                </h3>
                <a
                  href="https://mobilidade.estadao.com.br/planeta-eletrico/sandbox-eletropostos-rio-de-janeiro/"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 07/07/2023 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="https://prefeitura.rio/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-04-at-11.38.48.jpeg" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Prefeitura apresenta produtos do Sandbox.Rio, ambiente que
                  busca trazer soluções inovadoras para a cidade
                </h3>
                <a
                  href="https://prefeitura.rio/desenvolvimento-economico-inovacao-simplificacao/prefeitura-apresenta-produtos-do-sandbox-rio-ambiente-que-busca-trazer-solucoes-inovadoras-para-a-cidade/"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 04/07/2023 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="https://s2-oglobo.glbimg.com/ldT4XA8Na3wkLvqTIbCrcKCGWtk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/z/r/6IkWNNTdiOZ9cL2vigIw/whatsapp-image-2023-07-03-at-18.36.43.jpeg" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Programa de inovação regulatória da prefeitura do Rio terá
                  drones e robôs em testes pela cidade
                </h3>
                <a
                  href="https://oglobo.globo.com/blogs/capital/post/2023/07/programa-de-inovacao-regulatoria-da-prefeitura-do-rio-tera-drones-e-robos-em-testes-pela-cidade.ghtml"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 03/07/2023 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="https://s2.glbimg.com/8Ds3qtRKAieFZtzrOoEoo-aWanc=/645x388/i.glbimg.com/og/ig/infoglobo1/f/original/2022/01/13/96796442_ri_rio_de_janeiro_rj_27-12-2021_-_balanco_do_projeto_reviver_centro_tres_projetos_foram_li.jpg" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Rio Innovation Week: Capital fluminense lança ‘sandbox’
                  regulatório
                </h3>
                <a
                  href="https://blogs.oglobo.globo.com/pense-grande/post/rio-innovation-week-capital-fluminense-lanca-sandbox-regulatorio.html"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 14/01/2022 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="assets/transparencia/logo-prefeitura.png" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Secretaria Municipal de Desenvolvimento Econômico do Rio lança
                  programa para incentivar inovações no setor público
                </h3>
                <a
                  href="https://prefeitura.rio/desenvolvimento-economico-inovacao-simplificacao/secretaria-municipal-de-desenvolvimento-economico-do-rio-lanca-programa-para-incentivar-inovacoes-no-setor-publico/"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 14/01/2022 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="https://www.mobiletime.com.br/wp-content/uploads/2022/01/logo-mobile-time-10anos.png" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Rio de Janeiro publica edital para projetos em sandbox
                  regulatório
                </h3>
                <a
                  href="https://www.mobiletime.com.br/noticias/02/05/2022/rio-de-janeiro-publica-edital-para-projetos-em-sandbox-regulatorio/"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 2/05/2022 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
            <div className="noticia-card">
              <div className="noticia-card-imagem">
                <img src="https://ab2l.org.br/wp-content/uploads/2021/01/logo_ab2l_selo.svg" />
              </div>
              <div className="noticia-card-conteudo">
                <h3 className="noticia-titulo">
                  Sandbox.Rio: município vai testar produtos, serviços e
                  processos inovadores
                </h3>
                <a
                  href="https://ab2l.org.br/noticias/sandbox-rio-municipio-vai-testar-produtos-servicos-e-processos-inovadores/"
                  className="noticia-ler-mais"
                >
                  <span className="noticia-dia"> 2/05/2022 </span>
                  <p>Ler mais</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
