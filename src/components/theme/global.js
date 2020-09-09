import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0px;
      box-sizing: border-box;
    }
    html {
      background-color: ${p => p.theme.color.darkBlue};
    }
    body, html {
      height: 100%;
      width: 100%;
      color: ${p => p.theme.color.grey};
      font-family: ${p => p.theme.font.quicksandMedium};
      font-size: 18px;
      
    }
    body {
      padding-top: 80px;
    }
    div {
      max-width: 100%;
    }
    a, p, h1, h2, h3, ul, li {
      -webkit-font-smoothing: antialiased;
      max-width: 100%;
    }
    ul, ol {
      padding: 0;
      list-style: none;
    }
    @keyframes slideInFromTop {
      0% {
        opacity: 0
      }
      50% {
        opacity: 0
      }
      100% {
        opacity: 100%
      }
    }

    /**
 * ----------------------------------------
 * animation slide-in-right
 * ----------------------------------------
 */
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
`;
