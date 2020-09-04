import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

const Footer: React.FC = () => {
  return (
    <Flex 
      w="100%" 
      h="80px"
      bg="gray.800"
      align="center"
      justify="center"
    >
      <Text color="white" fontWeight="thin" ml={1}>
        Developed by Viktor Scheplyagin
      </Text>
    </Flex>
  )
};

export default Footer;