import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from 'styles/theme';
import HomePage from 'pages/Home';
import Layout from 'shared_components/Layout';

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
