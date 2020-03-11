import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .toast-error {
    background: #c94444;
    color: #FCF7F8;
    font-weight: bold;
    border-radius: 6px;
  }

  .toast-error-progress-bar {
    background: ${lighten(0.2, '#c94444')}
  }
`;
