import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";



const ArticleList = ({articles}) => {
  
  const Row = ({ index, style}) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {articles[index].title}
    </div>
  );
  
  return (
 
  <AutoSizer className='ArticleContainer'>
{ ({height, width}) => { return (
  <List
  className={List}
  height={height}
  itemCount={articles.length}
  itemSize={35}
  width={width}
>
  {Row}
  
</List>
)}}
     
      </AutoSizer>
);}

export default ArticleList

