import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Search from './components/Search';
import GlobalStyle from './components/theme/global';
import theme from './components/theme';
import fonts from './components/fonts';

// Create a “profile page” for various star wars characters in the Star Wars universe.

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <style>{fonts}</style>
    <GlobalStyle />
    <Search />
  </ThemeProvider>,
  document.getElementById('root')
);
