import React from 'react';
import { Code, Tooltip, Box, Tag, TagIcon, TagLabel } from '@chakra-ui/core';


type TechnologyProps = {
  name: string;
  icon?: any;
  description?: string;
};


const TechnologyLabel: React.FC<TechnologyProps> = ({ name, icon, description }) => {
  const size = "24px";

  return (
    <Tooltip 
      display={description ? "block" : "none"} 
      aria-label="" 
      label={description} 
      placement="bottom"
    >
      <Box d="inline" alignItems="flex-end">
        <Tag px={1}>
          {
            icon !== undefined
            ? <TagIcon icon={icon} size={size} />
            : <Box w={0} h={size} />
          }
          <Code>
            <TagLabel fontWeight={size}>{name}</TagLabel>
          </Code>
        </Tag>
      </Box>
    </Tooltip>
  )
};

export default TechnologyLabel;