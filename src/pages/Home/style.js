import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 25px 16px 25px;
  box-sizing: border-box;

  background-color: #8c11be;
  font-family: "Raleway", sans-serif;
  font-style: normal;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }

  ion-icon {
    color: #fff;
    font-size: 30px;
  }
`;

const TransactionsTable = styled.article`
  width: 100%;
  height: 100%;
  margin-top: 22px;
  padding: 23px 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 5px;

  section {
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
  }
`;

const ButtonsContainer = styled.section`
  margin-top: 13px;
  display: flex;
  gap: 15px;

  button {
    width: 50%;
    height: 115px;
    line-height: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 80px;
    p {
      width: 100%;
      font-size: 18px;
      background-color: transparent;
    }
    ion-icon {
      font-size: 25px;
      background-color: transparent;
    }
  }
`;

const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #000000;
  span {
    color: #c6c6c6;
    margin-right: 10px;
  }
  div {
    display: flex;
  }
`;

const Value = styled.div`
  color: ${(props) => (props.color === "entrada" ? "green" : "red")};
`;

export {
  Container,
  Header,
  TransactionsTable,
  ButtonsContainer,
  StyledList,
  Value,
};
