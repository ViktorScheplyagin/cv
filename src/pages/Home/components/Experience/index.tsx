import React from 'react';
import { Flex, SimpleGrid, Heading, Text } from '@chakra-ui/core';

const Experience: React.FC = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} mx={[4, null, 6]} spacing={[4, null, 0]}>
      <Flex direction="column" align="center" justify="center">
        <Heading>KikiDevelopment</Heading>
        <Text
          color="gray.600"
          fontWeight="semibold"
          fontSize="lg"
        >
          Junior Front-End developer
        </Text>
      </Flex>

      <Flex align="center" justify="center">
        <Text textAlign={["center", null, "left"]}>
          With which projects we worked, provide short description for each project
        </Text>
      </Flex>
    </SimpleGrid>
  )
};

export default Experience;