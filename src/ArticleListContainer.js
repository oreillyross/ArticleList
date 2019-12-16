import React from 'react'
import ArticleList from './ArticleList'
import styled from 'styled-components'


const StyledDiv = styled.div`
  min-height: 200px
  
`

export default function ArticleListContainer({articles}) {
  return <StyledDiv>
    <ArticleList articles={articles}/>
  </StyledDiv>
}