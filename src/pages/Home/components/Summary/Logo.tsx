import React from 'react';
import { Flex, Text, Icon, Box } from '@chakra-ui/core';


type LogoProps = {
  name: string;
  icon?: any;
  size?: number;
};


const Logo: React.FC<LogoProps> = ({ name, icon, size = 14}) => {
  const iconSize = `${size + 2}px`;

  return (
    <Flex align="center" justify="space-between">
      {
        icon === undefined
        ? <Box w={0} h={iconSize} />
        : typeof icon === "string"
          ? <Icon size={iconSize} name={icon} mr={1} />
          : <Box as={icon} size={iconSize} mr={1} />
      }
      <Text fontWeight={`${size}px`}>{name}</Text>
    </Flex>
  )
};

export default Logo;