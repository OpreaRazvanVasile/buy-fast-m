import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewConatiner=styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`
export const TitleLink=styled(Link)`

font-size: 25px;
margin-bottom: 10px;
font-weight:bold;
color: rgb(99, 99, 99);
cursor: pointer;
`
export const Preview=styled.div`
  display: grid;
  grid-template-columns:repeat(5,1fr);
  column-gap: 20px;
     
`
