import styled from "styled-components";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Senha" />
        <input placeholder="Confirme a senha" />
        <button>Cadastrar</button>
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
