//import GlobalStyle from './components/GlobalStyle';
//import { useEffect } from 'react';
import CardList from './pages/CreateRecipientPage/CardList';
import items from './pages/CreateRecipientPage/mock.json';

function App() {
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <CardList items={items} />
    </div>
  );
}

export default App;
