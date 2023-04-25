import styled from "styled-components";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/apiAuth";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ThreeDots } from "react-loader-spinner";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleInput({ name, value }) {
    setForm({ ...form, [name]: value }); // sintaxe de colchetes para acessar a prop do obj, pois o nome varia
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    signIn(form)
      .then((res) => {
        console.log(res.data);
        const { id, nome, token } = res.data;
        setIsLoading(false);
        setAuth(token);
        // localStorage.setItem("user", JSON.stringify({ id, nome, token }));
        navigate("/home");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data);
      });
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots width={60} height={24} color="#fff" />
          ) : (
            "Entrar"
          )}
        </button>
      </form>

      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
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
