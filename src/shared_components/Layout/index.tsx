import React from 'react';
import { Box } from '@chakra-ui/core';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      {children}
      <Footer />
    </Box>
  )
};

export default Layout;