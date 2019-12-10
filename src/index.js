import React from "react";
import ReactDOM from "react-dom";
import ArticleListContainer from "./ArticleListContainer";
import './styles.css'

function ArticlesList() {
  return (
    <div>
      <h1>Articles</h1>
      <div>
        Place navigation bar here to include jumping from recent articles to
        unread articles, read articles
      </div>

      <ArticleListContainer />

      <h4>Status bar here</h4>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ArticlesList />, rootElement);
