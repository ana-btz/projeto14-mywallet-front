import styled from "styled-components";

export default function NewTransaction() {
  const type = "entrada"; // o tipo de transação vem do BD

  return (
    <Container>
      <h1>{`Nova ${type}`}</h1>
      <form>
        <input placeholder="Valor" type="text" />
        <input placeholder="Descrição" type="text" />
        <button>{`Salvar ${type}`}</button>
      </form>
    </Container>
  );
}

const Container = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 25px;
  background-color: #8c11be;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`;
