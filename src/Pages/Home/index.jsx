import React from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { IoIosAdd } from "react-icons/io";

import { AuthContext } from "../../contexts/AuthContext";

import Logo from "../Login/Logo.svg";
import { Container } from "./styles";

function Home() {
  const clear = () => {
    localStorage.clear();
  };

  const { user, loading } = useContext(AuthContext);

  console.log(user);

  if (loading) return <span>Carregando ...</span>;

  return (
    <>
      {user ? (
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
            <h1>Ola, {user.name}</h1>
            <span>{user.course_module}</span>
          </header>
          <main>
            <div className="tech">
              <h2>Tecnologias</h2>
              <button>
                <IoIosAdd className="add" />
              </button>
            </div>
          </main>
        </Container>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
}

export default Home;
