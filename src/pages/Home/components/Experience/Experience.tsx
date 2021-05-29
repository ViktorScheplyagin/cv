import React from 'react';
import { SimpleGrid } from '@chakra-ui/core';
import { KikiDevelopment, Itransition } from './components';

export const Experience = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} mx={[4, null, 6]} spacingX={4} spacingY={[8, 12]}>
      <KikiDevelopment />
      <Itransition />
    </SimpleGrid>
  );
};
