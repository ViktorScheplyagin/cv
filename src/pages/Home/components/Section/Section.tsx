import React from 'react';
import { Box } from '@chakra-ui/core';
import { SectionHeading } from './SectionHeading';

type SectionProps = {
  heading?: string;
  children: any;
};

export const Section: React.FC<SectionProps & any> = ({ heading, children, ...props }) => {
  return (
    <Box
      py={[8]}
      w='100%'
      // minH="100vh" TODO: make CV like a landing slider
      {...props}
    >
      <SectionHeading>{heading}</SectionHeading>
      <Box>{children}</Box>
    </Box>
  );
};

export { SectionHeading };
