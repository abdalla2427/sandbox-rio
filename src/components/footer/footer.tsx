import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="itens-footer">
        <div className="contato-footer" />
        <div
          className="email-footer footer-item"
          style={{ display: "flex", alignSelf: "center" }}
        >
          <h4>sandbox.rio@rio.rj.gov.br</h4>
        </div>
        <div
          className="email-footer footer-item"
          style={{ display: "flex", alignSelf: "center" }}
        >
          <h4>sandboxrio.rj@gmail.com</h4>
        </div>
        <div
          className="endereco-footer footer-item"
          style={{ display: "flex" }}
        >
          <h4>
            Centro Administrativo São Sebastião - R. Afonso Cavalcanti, 455, 11°
            andar - Cidade Nova, Rio de Janeiro - RJ, 20211-110
          </h4>
        </div>
      </div>
    </footer>
  );
};
