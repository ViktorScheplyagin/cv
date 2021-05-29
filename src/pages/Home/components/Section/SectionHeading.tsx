import React from 'react';
import { Flex, Text, Divider } from '@chakra-ui/core';

const dividerStyle: any = {
  width: 'full',
  mx: [4],
  borderWidth: '2px',
  borderColor: 'gray.600',
};

export const SectionHeading: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Flex display={children ? 'flex' : 'none'} align='center' mb={12}>
      <Divider {...dividerStyle} />
      <Text fontSize='2xl' fontWeight='bold' textTransform='uppercase' color='gray.700'>
        {children}
      </Text>
      <Divider {...dividerStyle} />
    </Flex>
  );
};
