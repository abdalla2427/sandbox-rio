import "./em-andamento.css";
import "./efeito-overlay.css";
import ambev from "./ambev.jpeg";
import ezVolt from "./ez_volt.jpeg";
import myView from "./my_view.jpeg";
import eveEmbraer from "./eve.jpeg";
import { Link } from "react-router-dom";

export const EmAndamento = () => {
  return (
    <section>
      <div className="projetos-andamento">
        <div className="titulo-texto">
          <h1>Testes em Andamento</h1>
          <h3>
            Confira aqui os projetos que estão sendo testados na Cidade do Rio
            de Janeiro
          </h3>
        </div>
        <div className="secao-imagens">
          <div className="wrapper-imagem">
            <img className="image__img" src={ambev} />
            <div className="image__overlay image__overlay--primary overlay">
              <div className="image__title">AMBEV + SpeedBird</div>
              <p className="image__description"> Projeto Rio de Janeiro</p>
              <Link
                className="image__description image__link"
                to="em-andamento/ambev"
              >
                Ver mais
              </Link>
            </div>
          </div>
          <div className="wrapper-imagem">
            <img className="image__img" src={ezVolt} />
            <div className="image__overlay image__overlay--primary overlay">
              <div className="image__title">Ezvolt Brasil</div>
              <p className="image__description">Projeto Eletroposto Carioca</p>
              <Link
                className="image__description image__link"
                to="em-andamento/ez-volt"
              >
                Ver mais
              </Link>
            </div>
          </div>
          <div className="wrapper-imagem">
            <img className="image__img" src={myView} />
            <div className="image__overlay image__overlay--primary overlay">
              <div className="image__title">MyView</div>
              <p className="image__description">Robôs D4 in Rio</p>
              <Link
                className="image__description image__link"
                to="em-andamento/my-view"
              >
                Ver mais
              </Link>
            </div>
          </div>
          <div className="wrapper-imagem">
            <img className="image__img" src={eveEmbraer} />
            <div className="image__overlay image__overlay--primary overlay">
              <div className="image__title">Eve Air Mobility</div>
              <p className="image__description">Projeto eVTOL in Rio</p>
              <Link
                className="image__description image__link"
                to="em-andamento/eve"
              >
                Ver mais
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mapa-da-inovacao">
        <div className="titulo-texto">
          <h1>Mapa da Inovação</h1>
          <h3>
            Confira aqui onde estão sendo testados os produtos e serviços do
            Sandbox.Rio
          </h3>
        </div>
        <div id="map-section">
          <div id="map"></div>
        </div>
      </div> */}
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAUrTUnVOfujubfQEQ-w_fV3EWEsgnxLU0&callback=initMap&v=weekly"
        async
      ></script>
    </section>
  );
};
