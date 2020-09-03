import React from 'react';
import { Box } from '@chakra-ui/core';

const Section: React.FC<any> = ({ children, ...props }) => {
  return (
    <Box
      w="100%"
      py={[8]}
      // minH="100vh" TODO: make CV like a landing slider
      {...props}
    >
      {children}
    </Box>
  )
};

export default Section;