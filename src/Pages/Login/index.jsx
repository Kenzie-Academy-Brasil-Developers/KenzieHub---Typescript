import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "./Logo.svg";

import { AuthContext } from "../../contexts/AuthContext";

import { Container, Form } from "./styles";

function Login() {
  const { onSubmit } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
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
  );
}

export default Login;
