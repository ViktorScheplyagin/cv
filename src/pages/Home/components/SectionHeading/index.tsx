import React from 'react';
import { Flex, Text, Divider } from '@chakra-ui/core';


const dividerStyle: any = {
  width: "full",
  mx: [4]
};


const SectionHeading: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Flex align="center">
      <Divider {...dividerStyle} />
      <Text
        fontSize="xl"
        fontWeight="semibold"
      >
        {children}
      </Text>
      <Divider {...dividerStyle} />
    </Flex>
  )
};

export default SectionHeading;