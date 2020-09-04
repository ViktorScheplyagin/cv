import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/core';


type LogoProps = {
  name: string;
  icon?: string;
  size?: number;
};


const Logo: React.FC<LogoProps> = ({ name, icon, size = 14}) => {
  return (
    <Flex align="center" justify="space-between">
      <Icon size={`${size + 2}px`} name={icon} mr={1} />
      <Text fontWeight={`${size}px`}>{name}</Text>
    </Flex>
  )
};

export default Logo;