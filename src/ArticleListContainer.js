import React from 'react'
import ArticleList from './ArticleList'
import styled from 'styled-components'

const inArticles = [
  {title: 'This is first article'},
  {title: 'This is second article'},
  {title: 'This is third article'},
  {title: 'This is fourth article'},
  ]

const StyledDiv = styled.div`
  min-height: 200px
  
`

export default function ArticleListContainer() {
  return <StyledDiv>
    <ArticleList articles={inArticles}/>
  </StyledDiv>
}