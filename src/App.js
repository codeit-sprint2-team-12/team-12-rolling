import { useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header/Header';
import HeaderTop from './components/Header/HeaderTop';
import HeaderBottom from './components/Header/HeaderBottom';
import Card from './components/Card/Card';
import Option from './components/Option/Option';
import CardList from './components/CardList/CardList';

function App() {
  const [deletePage, setDeletePage] = useState(true);
  const [add, setAdd] = useState(true);

  const isDelete = () => {
    setDeletePage((prev) => !prev);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <HeaderTop />
      </Header>
      <Header>
        <HeaderBottom />
      </Header>

      <Card></Card>
      <Card add={add}></Card>
      <Card deletePage={deletePage}></Card>

      <CardList></CardList>
    </div>
  );
}

export default App;
