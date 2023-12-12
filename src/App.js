import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header/Header';
import HeaderBottom from './components/Header/HeaderBottom';
import HeaderTop from './components/Header/HeaderTop';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <HeaderTop />
      </Header>
      <Header>
        <HeaderBottom>To. gkk</HeaderBottom>
      </Header>

      <Card />
    </div>
  );
}

export default App;
