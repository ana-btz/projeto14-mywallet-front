import styled from "styled-components";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit}>
        <input placeholder="E-mail" />
        <input placeholder="Senha" />
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
