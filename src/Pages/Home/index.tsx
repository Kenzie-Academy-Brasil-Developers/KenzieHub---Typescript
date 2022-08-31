import { useState, useContext, useEffect, useRef, MouseEvent } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { GrTrash } from "react-icons/gr";

import { AuthContext } from "../../contexts/AuthContext";

import Logo from "../Login/Logo.svg";
import { Container, Loanding, Modal } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAddTech, TechContext } from "../../contexts/TechContext";
import { ToastContext } from "../../contexts/ToastContext";

function Home() {
  const { addToast } = useContext(ToastContext);
  const { user, loading } = useContext(AuthContext);
  const { addTech, removeTech } = useContext(TechContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  function adicionarToast() {
    addToast({
      type: "sucess",
      title: "Tecnologia adicionada com sucesso!",
    });
  }

  function removerToast() {
    addToast({
      type: "error",
      title: "Tecnologia removida com sucesso!",
    });
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    function handleOutClick(event: MouseEvent) {
      if (!modalRef?.current?.contains(event.currentTarget)) {
        setModalIsOpen(false);
      }
    }

    document.addEventListener("mousedown", () => handleOutClick);

    return () => {
      document.removeEventListener("mousedown", () => handleOutClick);
    };
  }, []);

  const clear = () => {
    localStorage.clear();
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnológia obrigatória"),
    status: yup.string(),
  });
  const { register, handleSubmit } = useForm<IAddTech>({
    resolver: yupResolver(formSchema),
  });

  if (loading)
    return <Loanding data-text="Carregando...">Carregando...</Loanding>;

  return (
    <>
      {user ? (
        <Container>
          <nav>
            <div>
              <img src={Logo} alt="KenzieHub" />
              <Link onClick={() => clear} to="/" className="return">
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
              <button onClick={openModal}>
                <IoIosAdd className="add" />
              </button>
            </div>
            <ul>
              {user.techs?.map((tech) => (
                <li key={tech.id}>
                  <h3 className="title">{tech.title}</h3>
                  <h3 className="status">{tech.status}</h3>
                  <button onClick={() => removeTech(tech.id)}>
                    <GrTrash className="trash" onClick={() => removerToast()} />
                  </button>
                </li>
              ))}
            </ul>
          </main>
          {modalIsOpen ? (
            <Modal ref={modalRef}>
              <div className="modal-header">
                <h2>Cadastrar Tecnologia</h2>
                <button className="closeModal" onClick={closeModal}>
                  X
                </button>
              </div>
              <form onSubmit={handleSubmit(addTech)}>
                <label htmlFor="title">Nome</label>
                <input
                  type="text"
                  placeholder="Tecnológia"
                  id="title"
                  {...register("title")}
                />

                <label htmlFor="status">Selecionar status</label>
                <select id="status" {...register("status")}>
                  <option value="iniciante">Iniciante</option>
                  <option value="intermediário">Intermediário</option>
                  <option value="avançado">Avançado</option>
                </select>
                {/* <h5 className="errorTitle">{errors.title?.message}</h5> */}
                <button onClick={() => adicionarToast()}>
                  Cadastrar Tecnologia
                </button>
              </form>
            </Modal>
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
}

export default Home;
