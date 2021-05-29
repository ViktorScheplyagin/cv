import React from 'react';
import logoOnpu from 'assets/logo_onpu.png';
import { SimpleGrid, Flex, Text, Image, Box } from '@chakra-ui/core';

export const Education = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} textTransform='uppercase' spacing={[4, null, 0]}>
      <Flex direction='column' align='center' justify='space-between' mb={[2, 0]}>
        <Image size={['120px', null, '50px']} src={logoOnpu} mb={[2, null, 4]} />
        <Text textAlign={['center', 'left']} fontWeight='semibold'>
          Odessa National Polytechnic University
        </Text>
      </Flex>

      <Flex direction='column' align='center' justify='center'>
        <Box textAlign={['center', null, 'left']}>
          <Text fontWeight='semibold'>System Engineering</Text>
          <Text>2015 - 2019</Text>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
