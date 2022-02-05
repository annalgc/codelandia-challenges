import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global/reset';
import theme from './global/theme';
import Blog from './pages/Blog';

function App() {
  return (
   <ThemeProvider theme={theme}>
     <GlobalStyle />
     <Blog />
   </ThemeProvider>
  );
}

export default App;
