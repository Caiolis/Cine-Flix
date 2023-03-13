import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      {/* Routes Container */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:idFilme" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
