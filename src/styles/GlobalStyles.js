import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  }

  button {
    border: 0;
    padding: 0;
    background: none;
    font-size: 100%;
  }

  input {
    border: 2px solid rgba(255, 102, 1, 0.465);
  }
`;
