import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Login/Logo.svg";
import { Container } from "./styles";

function Home() {
  const clear = () => {
    localStorage.clear();
  };

  return (
    <Container>
      <nav>
        <div>
          <img src={Logo} alt="KenzieHub" />
          <Link onClick={clear} to="/" className="return">
            Sair
          </Link>
        </div>
      </nav>
      <header>
        <h1>Ola, Samuel</h1>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </header>
      <main>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <h3>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades!!
        </h3>
      </main>
    </Container>
  );
}

export default Home;
