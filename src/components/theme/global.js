import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0px;
      box-sizing: border-box;
    }
    body, html {
      height: 100%;
      width: 100%;
      color: ${(p) => p.theme.color.primary};
      font-family: ${(p) => p.theme.font.quicksandMedium};
      font-size: 20px;
      background: ${(p) => p.theme.color.background};
    }
    div {
      max-width: 100%;
    }
    
    ul, ol {
      padding: 0;
      list-style: none;
    }
`;
