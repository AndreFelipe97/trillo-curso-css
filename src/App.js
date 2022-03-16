import GlobalStyle from "./styles/global";
import {
  Container,
  Header,
  Content,
  Navigation,
  HotelView,
} from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Content>
          <Navigation />
          <HotelView />
        </Content>
      </Container>
    </>
  );
}

export default App;
