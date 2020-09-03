import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/core';

const Experience: React.FC = () => {
  return (
    <Flex mx={[6]}>
      <Flex direction="column" w="50%">
        <Heading>KikiDevelopment</Heading>
        <Text
          color="gray.600"
          fontWeight="semibold"
          fontSize="lg"
        >
          Junior Front-End developer
        </Text>
      </Flex>

      <Flex w="50%">
        <Text>
          With which projects we worked, provide short description for each project
        </Text>
      </Flex>
    </Flex>
  )
};

export default Experience;