import React from 'react';
import { Code, Tooltip, Box } from '@chakra-ui/core';
import Logo from './Logo';


type TechnologyProps = {
  name: string;
  icon?: any;
  description?: string;
};


const TechnologyLabel: React.FC<TechnologyProps> = ({ name, icon, description }) => (
  <Tooltip 
    display={description ? "block" : "none"} 
    aria-label="" 
    label={description} 
    placement="bottom"
  >
    <Box d="inline" alignItems="flex-end">
      <Code mx={1} px={1}>
        <Logo name={name} icon={icon} size={24} />
      </Code>
    </Box>
  </Tooltip>
);

export default TechnologyLabel;