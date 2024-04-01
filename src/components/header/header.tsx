import "./header.css";
import sandboxLogo from "./sandbox-logo.png";

export const Header = () => {
  return (
    <header>
      <a href="/" id="home">
        <img src={sandboxLogo} />
      </a>
      <nav>
        <button id="menu-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="lista-navegacao">
          <li id="sobre" className="dropdown">
            <a href="/sobre">sobre o sandbox</a>
            <div className="dropdown-content">
              <a className="dropdown-link" href="sobre#o-que-eh-section">
                o que é?
              </a>
              <a className="dropdown-link" href="sobre#vantagens-section">
                vantagens
              </a>
              <a
                className="dropdown-link"
                href="/sobre#quem-pode-participar-section"
              >
                quem pode participar?
              </a>
              <a className="dropdown-link" href="sobre#como-funciona-section">
                como funciona?
              </a>
              <a className="dropdown-link" href="sobre#equipe-section">
                equipe
              </a>
            </div>
          </li>
          <li id="chamadas" className="dropdown">
            <a href="/chamadas">chamadas</a>
            <div className="dropdown-content">
              <a className="dropdown-link" href="chamadas">
                ciclo de seleção
              </a>
              <a
                className="dropdown-link"
                href="/chamadas#edital-e-anexos-section"
              >
                edital e anexos
              </a>
              <a className="dropdown-link" href="chamadas#faq-section">
                FAQ
              </a>
            </div>
          </li>
          <li id="transparencia">
            <a href="/transparencia">transparência</a>
          </li>
          <li id="publicacoes">
            <a href="/publicacoes">publicações</a>
          </li>
          <li id="projetos-em-andamento">
            <a href="/em-andamento">projetos em andamento</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
