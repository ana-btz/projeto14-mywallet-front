import styled from "styled-components";
import Logo from "../../components/Logo";

export default function SignUp() {
  return (
    <Container>
      <Logo />
      <form>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Senha" />
        <input placeholder="Confirme a senha" />
        <button>Cadastrar</button>
      </form>

      <a>Já tem uma conta? Entre agora!</a>
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
