import React from 'react';
import { SimpleGrid } from '@chakra-ui/core';
import { KikiDevelopment } from './components';

export const Experience = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} mx={[4, null, 6]} spacing={[4, null, 0]}>
      <KikiDevelopment />
    </SimpleGrid>
  );
};
