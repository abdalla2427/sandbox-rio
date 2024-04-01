import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/home.tsx";
import { EmBreve } from "./pages/em-breve/em-breve.tsx";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <EmBreve />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
    errorElement: <EmBreve />,
  },
  {
    path: "/chamadas",
    element: <Chamadas />,
    errorElement: <EmBreve />,
  },
  {
    path: "/transparencia",
    element: <Transparencia />,
    errorElement: <EmBreve />,
  },
  {
    path: "/publicacoes",
    element: <Publicacoes />,
    errorElement: <EmBreve />,
  },
  {
    path: "/em-andamento",
    element: <EmAndamento />,
    errorElement: <EmBreve />,
  },
  {
    path: "/em-andamento/ambev",
    element: <Ambev />,
    errorElement: <EmBreve />,
  },
  {
    path: "/em-andamento/ez-volt",
    element: <EzVolt />,
    errorElement: <EmBreve />,
  },
  {
    path: "/em-andamento/eve",
    element: <EveDetalhes />,
    errorElement: <EmBreve />,
  },
  {
    path: "/em-andamento/my-view",
    element: <MyViewDetalhes />,
    errorElement: <EmBreve />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
