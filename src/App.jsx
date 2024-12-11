import React from "react";
import Header from "./components/Header";
import ArticlePage from "./pages/ArticlePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CreateArticle from "./components/CreateArticle";
import UpdateArticle from "./components/UpdateArticle";
import DetailArticlePage from "./pages/DetailArticlePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlePage />} />
          <Route path="/create" element={<CreateArticle />} />
          <Route path="/update" element={<UpdateArticle />} />
           <Route path="/detail" element={<DetailArticlePage />} />
        {/* <Route path="/photos/:id" element={<PhotoDetailPage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
