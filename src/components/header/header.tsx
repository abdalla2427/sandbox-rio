import { Link } from "react-router-dom";
import "./header.css";
import sandboxLogo from "./sandbox-logo.png";

export const Header = () => {
  return (
    <header>
      <Link to="/" id="home">
        <img src={sandboxLogo} />
      </Link>
      <nav>
        <button id="menu-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="lista-navegacao">
          <li id="sobre" className="dropdown">
            <Link to="/sobre">sobre o sandbox</Link>
            <div className="dropdown-content">
              <Link className="dropdown-link" to="sobre#o-que-eh-section">
                o que é?
              </Link>
              <Link className="dropdown-link" to="sobre#vantagens-section">
                vantagens
              </Link>
              <Link
                className="dropdown-link"
                to="/sobre#quem-pode-participar-section"
              >
                quem pode participar?
              </Link>
              <Link className="dropdown-link" to="sobre#como-funciona-section">
                como funciona?
              </Link>
              <Link className="dropdown-link" to="sobre#equipe-section">
                equipe
              </Link>
            </div>
          </li>
          <li id="chamadas" className="dropdown">
            <Link to="/chamadas">chamadas</Link>
            <div className="dropdown-content">
              <Link className="dropdown-link" to="chamadas">
                ciclo de seleção
              </Link>
              <Link
                className="dropdown-link"
                to="/chamadas#edital-e-anexos-section"
              >
                edital e anexos
              </Link>
              <Link className="dropdown-link" to="chamadas#faq-section">
                FAQ
              </Link>
            </div>
          </li>
          <li id="transparencia">
            <Link to="/transparencia">transparência</Link>
          </li>
          <li id="publicacoes">
            <Link to="/publicacoes">publicações</Link>
          </li>
          <li id="projetos-em-andamento">
            <Link to="/em-andamento">projetos em andamento</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
