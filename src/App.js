import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global/globalStyled";
import Home from "./pages/home";
import Instagram from "./pages/instagram";
import FollowerIgBr from "./pages/FollowerIgBr";
import FollowerIgWorld from "./pages/FollowerWorld";
import ViewsIg from "./pages/viewsIg";
import LikesIgBr from "./pages/likesIgBr";
import LikesIgWorld from "./pages/likesIgWorld";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/instagram/seguidoresBr" element={<FollowerIgBr />} />
          <Route path="/instagram/seguidoresMd" element={<FollowerIgWorld />} />
          <Route path="/instagram/visualizações" element={<ViewsIg />} />
          <Route path="/instagram/curtidasBr" element={<LikesIgBr />} />
          <Route path="/instagram/curtidasMd" element={<LikesIgWorld />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
