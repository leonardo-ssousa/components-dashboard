import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#root{
  background-color: #FAFBFF;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}


`

export default GlobalStyle;