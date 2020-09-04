import React from 'react';
import logoOnpu from 'assets/logo_onpu.png';
import { SimpleGrid, Flex, Text, Image, Box } from '@chakra-ui/core';

const Education: React.FC = () => {
  return (
    <SimpleGrid columns={[1, 2]} textTransform="uppercase">
      <Flex direction="column" align="center" justify="space-between">
        <Image size="50px" src={logoOnpu} mb={4} />
        <Text fontWeight="semibold">
          Odessa National Polytechnic University
        </Text>
      </Flex>

      <Flex direction="column" align="center" justify="center">
        <Box>
          <Text fontWeight="semibold">
            System Engineering
          </Text>
          <Text>2015 - 2019</Text>
        </Box>
      </Flex>
    </SimpleGrid>
  )
};

export default Education;