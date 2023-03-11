import GlobalStyle from './GlobalStyles';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomePage />
    </>
  );
}