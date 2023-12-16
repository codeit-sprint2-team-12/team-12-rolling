import GlobalStyle from './components/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing';
import List from './pages/ListPage/List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <p>Not Found</p>,
  },
  {
    path: '/List',
    element: <List />,
    errorElement: <p>Not Found</p>,
  },
]);
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
