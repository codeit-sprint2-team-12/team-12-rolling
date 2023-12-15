import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateRecipientPage from './pages/CreateRecipientPage/CreateRecipientPage';

import GlobalStyle from './components/GlobalStyle';
import UsersRollingPage from './pages/UsersRollingPage/UsersRollingPage';

function App() {
  return (
    <div className="App">
      <UsersRollingPage />
    </div>
  );
}

export default App;
