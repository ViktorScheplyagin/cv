import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from 'styles/theme';
import { HomePage } from 'pages';
import { Layout } from 'shared';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
