import "./article.css";

const ArticlePage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Welcome to Our Article Hub</h1>
          <p>Discover insightful articles on various topics</p>
        </div>
      </header>

      {/* Articles Section */}
      <section className="articles">
        <div className="container">
          <h2>Feed Articles</h2>
          <div className="article-list">
            <ArticleCard
              title="The Importance of Mental Health"
              description="Learn why mental health matters and how to nurture it."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
            <ArticleCard
              title="10 Tips for Healthy Living"
              description="Adopt habits for a healthier and happier life."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
            <ArticleCard
              title="Understanding Climate Change"
              description="Explore the impact of climate change and what you can do."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
            <ArticleCard
              title="Understanding Climate Change"
              description="Explore the impact of climate change and what you can do."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
            <ArticleCard
              title="Understanding Climate Change"
              description="Explore the impact of climate change and what you can do."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
            <ArticleCard
              title="Understanding Climate Change"
              description="Explore the impact of climate change and what you can do."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
            <ArticleCard
              title="Understanding Climate Change"
              description="Explore the impact of climate change and what you can do."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
            <ArticleCard
              title="Understanding Climate Change"
              description="Explore the impact of climate change and what you can do."
              image="https://s2.coinmarketcap.com/static/img/coins/200x200/33892.png"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Article Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ArticleCard = ({ title, description, image }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="read-more">Read More</button>
    </div>
  );
};

export default ArticlePage;
