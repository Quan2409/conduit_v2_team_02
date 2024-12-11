import Header from "../components/Header";
import UpdateArticle from "../components/UpdateArticle/UpdateArticle";
import CreateArticle from "../components/CreateArticle/CreateArticle";
import DetailArticlePage from "../page/DetailArticlePage";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/update" element={<UpdateArticle />} />
        <Route path="/detail" element={<DetailArticlePage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
