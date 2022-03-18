import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #eb2f64;
    --color-primary-light: #FF3366;
    --color-primary-dark: #BA265D;

    --color-grey-light-1: #faf9f9;
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;
    --color-grey-light-4: #ccc;

    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;

    --color-white: #fff;

    --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
    --shadow-light: 0 2rem 6rem rgba(0, 0, 0, 0.06);
    --line: 1px solid var(--color-grey-light-2);
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--color-grey-dark-2);
    background-image: linear-gradient(to right bottom, var(--color-primary-light), var(--color-primary-dark));
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
