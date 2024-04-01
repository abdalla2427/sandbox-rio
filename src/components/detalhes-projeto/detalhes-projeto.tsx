interface DetalhesProjetoProps {
  descricao: React.ReactNode;
  urlImagemFundo: string;
}

export const DetalhesProjeto = ({
  descricao,
  urlImagemFundo,
}: DetalhesProjetoProps) => {
  return (
    <section id="bg-sobre">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div id="o-que-eh-bg">
        <div
          style={{ backgroundImage: `url(${urlImagemFundo})` }}
          className="parallax"
        ></div>
      </div>
      <div className="bloco-texto" style={{ width: "100%" }}>
        <div className="navegacao-externa" id="o-que-eh-section" />
        <div style={{ marginTop: 20, width: "100%" }}>
          <div className="titulo-texto-sobre">
            <div className="decoracao-titulo-sobre" />
            <h1> SOBRE </h1>
          </div>
          <div style={{ padding: "0vh 22vw 6vh 8vw" }}>
            <p>{descricao}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
