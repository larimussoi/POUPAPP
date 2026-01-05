import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { SearchInput } from "./components/SearchInput";
import { Main } from "./components/Main";
import { Typography } from "./components/Typography";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">Olá, Larissa!</Typography>
          <Typography variant="p">
            Veja como estão suas finanças hoje
          </Typography>
        </div>
      </Main>
    </Container>
  );
}

export default App;
