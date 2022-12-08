import { createGlobalStyle } from "styled-components";

export const StyleScrollbar = createGlobalStyle`
::-webkit-scrollbar{
    height: 7px;
    width: 10px;
}
::-webkit-scrollbar-track{
  border-radius: 10px;
  background: ${({theme}) => theme.TrackScroll};
}
::-webkit-scrollbar-thumb{
  border-radius: 10px;
    width: 30px;
    background: ${({theme}) => theme.scrollbarthumb};
}
::-webkit-scrollbar-thumb:hover{
  background: ${({theme}) => theme.scrollbarthumbhover}
}
`