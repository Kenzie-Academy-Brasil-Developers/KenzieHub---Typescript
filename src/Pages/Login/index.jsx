import React, { useState } from "react";

import Logo from "./Logo.svg";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import api from "../../services/api";

function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    setLoading(true);
    api
      .post("/sessions", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(user);
          localStorage.setItem("@kenzie-hub:token", res.data.token);
          localStorage.setItem("@kenzie-hub:id", res.data.user.id);
          setUser(res.data.user);
          navigate("/home", { replace: true });
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <span>Carregando ...</span>
      ) : (
        <Container>
          <img src={Logo} alt="KenzieHub" />
          <h2>Login</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label className="email" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            <h5 className="errorEmail">{errors.email?.message}</h5>

            <label className="senha" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <h5 className="errorPassword">{errors.password?.message}</h5>

            <button type="submit" className="entrar">
              Entrar
            </button>

            <span>Ainda não possui uma conta?</span>

            <Link to="/register" className="cadastro">
              Cadastre-se
            </Link>
          </Form>
        </Container>
      )}
    </>
  );
}

export default Login;
