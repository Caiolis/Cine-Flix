import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SucessPage from "./pages/SucessPage/SucessPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  const [sucessInformation, setSucessInformation] = useState();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      {/* Routes Container */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:idFilme" element={<BookingPage />} />
        <Route path="/assentos/:idSessao" element={<SeatsPage sucessInformation={sucessInformation} setSucessInformation={setSucessInformation}/>} />
        <Route path="/sucesso" element={<SucessPage sucessInformation={sucessInformation}/>} />
      </Routes>
    </BrowserRouter>
  );
}
