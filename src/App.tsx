import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from 'styles/theme';
import HomePage from 'pages/Home';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <HomePage />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
