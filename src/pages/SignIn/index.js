import styled from "styled-components";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/apiAuth";
import { useState } from "react";

export default function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function handleInput({ name, value }) {
    setForm({ ...form, [name]: value }); // sintaxe de colchetes para acessar a prop do obj, pois o nome varia
  }

  function handleSubmit(e) {
    e.preventDefault();

    signIn(form)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
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
          value={form.email}
          required
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
          value={form.senha}
          required
          onChange={(e) =>
            handleInput({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <button>Entrar</button>
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
