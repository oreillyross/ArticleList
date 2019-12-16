import React from "react";
import ReactDOM from "react-dom";
import ArticleListContainer from "./ArticleListContainer";
import './styles.css'

const inArticles = [
  {title: 'This is first article'},
  {title: 'This is second article'},
  {title: 'This is third article'},
  {title: 'This is fourth article'},
  ]

function ArticlesList({articles}) {
  return (
    <div>
      <h1>Articles</h1>
      <div>
        Place navigation bar here to include jumping from recent articles to
        unread articles, read articles
      </div>

      <ArticleListContainer articles={articles}/>

      <h4>Status bar here</h4>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ArticlesList articles={inArticles}/>, rootElement);
