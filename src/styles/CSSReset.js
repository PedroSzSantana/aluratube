import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
::-webkit-scrollbar{
    height: 7px;
}
::-webkit-scrollbar-track{
    
}
::-webkit-scrollbar-thumb{
    border-radius: 10px;
    width: 10px;
    background:#505050;
}
::-webkit-scrollbar-thumb:hover{
    background: #333333;
}
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;