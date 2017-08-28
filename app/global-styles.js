import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Lato, sans-serif;
    background: #0b486b; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f7f4d6, #c8e0dd); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f7f4d6, #c8e0dd);
    color: #4a4a4a;
  }

  body.fontLoaded {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
