export const Publicacoes = () => {
  const noticias = [
    {
      titulo:
        "Sandbox regulatório: instrumento experimentalista à disposição da Administração Pública local como suporte ao desenvolvimento econômico 1",
      urlNoticia:
        "https://www.academia.edu/110657660/Sandbox_regulat%C3%B3rio_instrumento_experimentalista_%C3%A0_disposi%C3%A7%C3%A3o_da_Administra%C3%A7%C3%A3o_P%C3%BAblica_local_como_suporte_ao_desenvolvimento_econ%C3%B4mico_1",
      data: "02/10/2023 ",
      urlFoto: "",
    },
    {
      titulo: "IA, sandbox regulatório e cooperação interinstitucional",
      urlNoticia:
        "https://www.jota.info/opiniao-e-analise/artigos/ia-sandbox-regulatorio-e-cooperacao-interinstitucional-10092023",
      data: "10/09/2023 ",
      urlFoto:
        "https://images.jota.info/wp-content/uploads/2023/05/chatgpt-inteligencia-artificial-1024x747.jpg",
    },
    {
      titulo: "As múltiplas facetas conceituais do sandbox",
      urlNoticia:
        "https://www.jota.info/opiniao-e-analise/artigos/as-multiplas-facetas-conceituais-do-sandbox-26032023",
      data: "26/03/2023 ",
      urlFoto:
        "https://images.jota.info/wp-content/uploads/2021/03/whatsapp-image-2021-03-26-at-11-42-12.jpeg",
    },
  ];
  return (
    <section>
      <div className="titulo-texto">
        <div className="decoracao-titulo-chamadas"></div>
        <h1>Publicações</h1>
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
            <img src="https://images.jota.info/wp-content/uploads/2021/10/childhood-gfdd3b81e6-1280-1024x682.jpg.webp" />
          </div>
          <div className="noticia-card-conteudo">
            <h3 className="noticia-titulo">
              A importância do sandbox regulatório para municípios
            </h3>
            <a
              href="https://www.jota.info/opiniao-e-analise/artigos/a-importancia-do-sandbox-regulatorio-para-municipios-16102021"
              className="noticia-ler-mais"
            >
              <span className="noticia-dia"> 16/01/2022 </span>
              <p>Ler mais</p>
            </a>
          </div>
        </div>
        <div className="noticia-card">
          <div className="noticia-card-imagem">
            <img src="https://images.jota.info/wp-content/uploads/2022/05/pexels-digital-buggu-171198-1024x575.jpg.webp" />
          </div>
          <div className="noticia-card-conteudo">
            <h3 className="noticia-titulo">
              Sandbox regulatório em prol do desenvolvimento econômico local
            </h3>
            <a
              href="https://www.jota.info/opiniao-e-analise/artigos/sandbox-regulatorio-em-prol-do-desenvolvimento-economico-local-14052022"
              className="noticia-ler-mais"
            >
              <span className="noticia-dia"> 14/05/2022 </span>
              <p>Ler mais</p>
            </a>
          </div>
        </div>
        <div className="noticia-card">
          <div className="noticia-card-imagem">
            <img src="https://s1.static.brasilescola.uol.com.br/be/2021/11/bandeira-unesco-logomarca.jpg" />
          </div>
          <div className="noticia-card-conteudo">
            <h5
              className="noticia-titulo"
              style={{ textAlign: "left", margin: "0" }}
            >
              Sandbox regulatório: instrumento experimentalista à disposição da
              administração pública local como suporte ao desenvolvimento
              econômico. Conferência Internacional da Cátedra UNESCO em Economia
              Criativa e Políticas Públicas (ICCEPP)
            </h5>
            <a
              href="/anexos/SANDBOX REGULATÓRIO - Resumo Expandido (ICCEPP).pdf"
              className="noticia-ler-mais"
            >
              <span className="noticia-dia"> 31/10/2022 </span>
              <p>Ler mais</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
