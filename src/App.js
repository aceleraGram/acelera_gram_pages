import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global/globalStyled";
import Home from "./pages/home";
import Header from "./components/header/header";
import Instagram from "./pages/instagram";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<Instagram />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
