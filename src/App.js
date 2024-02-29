import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global/globalStyled";
import Home from "./pages/home";
import Instagram from "./pages/instagram";
import FollowerIgBr from "./pages/instagram/FollowerIgBr";
import FollowerIgWorld from "./pages/instagram/FollowerWorld";
import ViewsIg from "./pages/instagram/viewsIg";
import LikesIgBr from "./pages/instagram/likesIgBr";
import LikesIgWorld from "./pages/instagram/likesIgWorld";

import TikTok from "./pages/tiktok";
import FollowerBr from "./pages/tiktok/FollowerBr";
import FollowerWorld from "./pages/tiktok/FollowerWorld";
import Views from "./pages/tiktok/views";
import LikesBr from "./pages/tiktok/likesBr";
import LikesWorld from "./pages/tiktok/likesWorld";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/tiktok" element={<TikTok />} />
          <Route path="/instagram/seguidoresBr" element={<FollowerIgBr />} />
          <Route path="/instagram/seguidoresMd" element={<FollowerIgWorld />} />
          <Route path="/instagram/visualizações" element={<ViewsIg />} />
          <Route path="/instagram/curtidasBr" element={<LikesIgBr />} />
          <Route path="/instagram/curtidasMd" element={<LikesIgWorld />} />
          //tiktok
          <Route path="/tiktok/seguidoresBr" element={<FollowerBr />} />
          <Route path="/tiktok/seguidoresMd" element={<FollowerWorld />} />
          <Route path="/tiktok/visualizações" element={<Views />} />
          <Route path="/tiktok/curtidasBr" element={<LikesBr />} />
          <Route path="/tiktok/curtidasMd" element={<LikesWorld />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
