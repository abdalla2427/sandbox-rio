import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home.tsx";
import { Header } from "./components/header/header.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { Sobre } from "./pages/sobre/sobre.tsx";
import { Chamadas } from "./pages/chamadas/chamadas.tsx";
import { Transparencia } from "./pages/transparencia/transparencia.tsx";
import { Publicacoes } from "./pages/publicacoes/publicacoes.tsx";
import { EmAndamento } from "./pages/em-andamento/em-andamento.tsx";
import { Ambev } from "./components/detalhes-projeto/ambev.tsx";
import { EzVolt } from "./components/detalhes-projeto/ez-volt.tsx";
import { MyViewDetalhes } from "./components/detalhes-projeto/my-view.tsx";
import { EveDetalhes } from "./components/detalhes-projeto/eve.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/chamadas" element={<Chamadas />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
        <Route path="/em-andamento" element={<EmAndamento />} />
        <Route path="/em-andamento/ambev" element={<Ambev />} />
        <Route path="/em-andamento/ez-volt" element={<EzVolt />} />
        <Route path="/em-andamento/eve" element={<EveDetalhes />} />
        <Route path="/em-andamento/my-view" element={<MyViewDetalhes />} />
        <Route path="/sandbox-rio/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
