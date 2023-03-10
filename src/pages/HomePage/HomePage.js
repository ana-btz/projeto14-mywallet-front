import { Link } from "react-router-dom";
import Record from "../../components/Record/Record";
import StyledScreen from "../../components/StyledScreen";
import StyledTextTop from "../../components/StyledTextTop";
import { Container, FieldWithoutContent, FieldWithContent, RecordsContainer, TotalContainer, ButtonsContainer } from "./styles";

export default function HomePage() {
    return (
        <StyledScreen>
            <Container>
                <StyledTextTop>
                    <p>Olá, Fulano</p>
                    <ion-icon name="exit"></ion-icon>
                </StyledTextTop>
                <FieldWithoutContent>
                    Não há registros de entrada ou saída
                </FieldWithoutContent>
                {/* <FieldWithContent>
                    <RecordsContainer>
                        <Record />
                        <Record />
                        <Record />
                        <Record />
                        <Record />
                    </RecordsContainer>
                    <TotalContainer>
                        SALDO
                        <span>2849,96</span>
                    </TotalContainer>
                </FieldWithContent> */}
                <ButtonsContainer>
                    <Link to="/nova-entrada">
                        <button>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Nova entrada</p>
                        </button>
                    </Link>
                    <Link to="/nova-saida">
                        <button>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <p>Nova saída</p>
                        </button>
                    </Link>
                </ButtonsContainer>
            </Container>
        </StyledScreen>
    );
}
