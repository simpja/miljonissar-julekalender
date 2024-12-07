import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mountains of Christmas';
    src: url('/fonts/MountainsofChristmas-Regular.ttf') format('truetype');
  }

  body {
    background-image: url('https://img.freepik.com/free-vector/hand-drawn-christmas-background_23-2148735509.jpg');
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Mountains of Christmas', cursive;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;

