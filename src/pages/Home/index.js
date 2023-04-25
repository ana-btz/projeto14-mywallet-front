import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  TransactionsTable,
  ButtonsContainer,
  StyledList,
  Value,
} from "./style";

export default function Home() {
  // # MOCK
  const transactions = [
    { date: "30/11", description: "Almoço mãe", value: "39.90", type: "saida" },
    { date: "27/11", description: "Mercado", value: "492.54", type: "saida" },
    {
      date: "26/11",
      description: "Ração pro doguinho",
      value: "30.55",
      type: "saida",
    },
    {
      date: "20/11",
      description: "Empréstimo Marcão",
      value: "666",
      type: "entrada",
    },
    {
      date: "15/11",
      description: "Salário",
      value: "3000.00",
      type: "entrada",
    },
  ];

  const navigate = useNavigate();

  function newTransaction(type) {
    navigate(`/nova-transacao/${type}`);
  }

  let total = 0;
  transactions.forEach((t) => {
    if (t.type === "entrada") {
      total += Number(t.value);
    } else {
      total -= Number(t.value);
    }
  });

  return (
    <Container>
      <Header>
        <h1>Olá Fulano</h1>
        <ion-icon name="exit"></ion-icon>
      </Header>

      <TransactionsTable>
        <ul>
          {transactions.map((t, i) => (
            <StyledList key={i}>
              <div>
                <span>{t.date}</span>
                <div>{t.description}</div>
              </div>
              <Value color={t.type}>R$ {t.value}</Value>
            </StyledList>
          ))}
        </ul>

        <section>
          <div>SALDO</div>
          <div>{total}</div>
        </section>
      </TransactionsTable>

      <ButtonsContainer>
        <button onClick={() => newTransaction("entrada")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </button>
        <button onClick={() => newTransaction("saida")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </button>
      </ButtonsContainer>
    </Container>
  );
}
