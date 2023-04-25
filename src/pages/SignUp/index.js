import styled from "styled-components";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { signUp } from "../../services/apiAuth";

export default function SignUp() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState("");
  const navigate = useNavigate();

  function handleInput({ name, value, confirmPassword }) {
    setForm({ ...form, [name]: value }); // sintaxe de colchetes para acessar a prop do obj, pois o nome varia
    setVerifyPassword(confirmPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (form.senha !== verifyPassword) {
      setIsLoading(false);
      return alert("Senhas não correspondem, por favor digite novamente");
    }

    signUp(form)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        const { status } = err.response;

        if (status === 422) {
          return alert("A senha deve possuir no mínimo três caracteres");
        }
        if (status === 409) {
          return alert("E-mail já cadastrado");
        }
      });
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          name="nome"
          type="text"
          required
          value={form.nome}
          disabled={isLoading}
          onChange={(e) =>
            handleInput({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input
          placeholder="E-mail"
          name="email"
          type="email"
          required
          value={form.email}
          disabled={isLoading}
          onChange={(e) =>
            handleInput({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          required
          value={form.senha}
          disabled={isLoading}
          onChange={(e) =>
            handleInput({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input
          placeholder="Confirme a senha"
          name="confirmarSenha"
          type="password"
          required
          value={verifyPassword}
          disabled={isLoading}
          onChange={(e) => handleInput({ confirmPassword: e.target.value })}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots width={60} height={24} color="#fff" />
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>

      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 25px;
  background-color: #8c11be;
`;
