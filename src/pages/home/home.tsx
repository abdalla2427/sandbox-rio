import "./index.css";
import logoSandbox from "./sandbox-logo.png";
import logoSMDUE from "./smdue.png";
import videoHome from "./pagina-principal.mp4";

export const Home = () => {
  return (
    <>
      <section>
        <video id="video" playsInline autoPlay muted loop>
          <source src={videoHome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="logos">
          <img id="logo-smdeis" className="logo-video" src={logoSMDUE} />
          <img id="logo-sandbox" className="logo-video" src={logoSandbox} />
        </div>
      </section>
    </>
  );
};
