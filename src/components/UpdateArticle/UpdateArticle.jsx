import React, { useState } from "react";
import "../css/update.css";

const UpdateArticle = ({ existingArticle, onUpdate }) => {
  const [article, setArticle] = useState(existingArticle);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: name === "tagList" ? value.split(",") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { article };
    console.log("Article updated:", payload);
    if (onUpdate) {
      onUpdate(payload);
    }
  };

  return (
    <div className="update-article">
      <h2>Update Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            // value={article.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            // value={article.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            // value={article.body}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tagList">Tags (comma-separated)</label>
          <input
            type="text"
            id="tagList"
            name="tagList"
            // value={article.tagList.join(",")}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default UpdateArticle;
