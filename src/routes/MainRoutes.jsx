import { Routes, Route } from "react-router-dom";

import Signin from "../page/Signin/Signin";
import Signup from "../page/Signup/Signup";
import Home from "../page/Home/Home";
import UpdateArticle from "../components/UpdateArticle/UpdateArticle";
import CreateArticle from "../components/CreateArticle/CreateArticle";
import DetailArticlePage from "../page/DetailArticlePage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/update" element={<UpdateArticle />} />
        <Route path="/detail" element={<DetailArticlePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
