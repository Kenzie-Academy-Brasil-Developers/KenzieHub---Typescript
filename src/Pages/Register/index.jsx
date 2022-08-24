import React, { useContext } from "react";
import Logo from "../Login/Logo.svg";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form, Header } from "./styles";

import api from "../../services/api";
import { useState } from "react";
import { ToastContext } from "../../contexts/ToastContext";

function Register() {
  const { addToast } = useContext(ToastContext);

  let navigate = useNavigate();

  const [setUserLogin] = useState([]);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
    bio: yup.string().required("Bio obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        if (res.status === 201) {
          addToast({
            type: "sucess",
            title: "Conta criada com sucesso",
            description: "Você será redirecionado...",
          });

          setTimeout(() => {
            if (res.status === 201) {
              navigate("/", { replace: true });
            }
            setUserLogin(res.status);
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error.response.status);
        setUserLogin(error.response.status);
      });
  };

  return (
    <>
      <Header>
        <img src={Logo} alt="KenzieHub" />
        <Link to="/" className="return">
          Voltar
        </Link>
      </Header>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Crie sua conta</h1>
            <h2>Rápido e grátis, vamos nessa</h2>
          </div>
          <label id="name" htmlFor="name">
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />

          <label id="email" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />

          <label id="bio" htmlFor="bio">
            Bio
          </label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />

          <label id="contato" htmlFor="contato">
            Contato
          </label>
          <input
            type="text"
            id="contato"
            placeholder="Opção de contato"
            {...register("contact")}
          />

          <label id="modulo" htmlFor="modulo">
            Selecionar módulo
          </label>
          <select name="modulo" {...register("course_module")}>
            <option value="Primeiro Módulo" defaultValue>
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo Módulo">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro Módulo">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto Módulo">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <button type="submit">Cadastrar</button>
        </Form>
        <div>
          <h5 className="errorName">{errors.name?.message}</h5>
          <h5 className="errorEmail">{errors.email?.message}</h5>
          <h5 className="errorPassword">{errors.password?.message}</h5>
          <h5 className="errorConfirmPassword">
            {errors.confirmPassword?.message}
          </h5>
          <h5 className="errorBio">{errors.bio?.message}</h5>
          <h5 className="errorContact">{errors.contact?.message}</h5>
        </div>
      </Container>
    </>
  );
}

export default Register;
