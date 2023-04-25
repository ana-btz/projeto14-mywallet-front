import styled from "styled-components";
import Logo from "../../components/Logo";

export default function SignIn() {
  return (
    <Container>
      <Logo />
      <form>
        <input placeholder="E-mail" />
        <input placeholder="Senha" />
        <button>Entrar</button>
      </form>

      <a>Primeira vez? Cadastre-se!</a>
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
