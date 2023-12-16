
import GlobalStyle from './components/GlobalStyle';
import Landing from './pages/LandingPage/Landing';
import List from './pages/ListPage/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateRecipientPage from './pages/CreateRecipientPage/CreateRecipientPage';
import UsersRollingPage from './pages/UsersRollingPage/UsersRollingPage';
import GlobalStyle from './components/GlobalStyle';
import CreateMessagePage from './pages/CreateMessagePage/CreateMessagePage';



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/post">
            <Route index element={<CreateRecipientPage />} />
            <Route path=":createdId" element={<UsersRollingPage />} />
            <Route path=":createdId/message" element={<CreateMessagePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
