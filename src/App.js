import { useEffect, useState } from 'react';
import GlobalStyle from './components/GlobalStyle';

function App() {
  const [deletePage, setDeletePage] = useState(true);
  const [add, setAdd] = useState(true);

  const isDelete = () => {
    setDeletePage((prev) => !prev);
  };

  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;
