import React from 'react';
import { 
  AccordionItem, 
  AccordionHeader, 
  Flex, 
  AccordionIcon, 
  AccordionPanel,
  Text,
} from '@chakra-ui/core';


const SkillsCategory: React.FC<{ header: string, isInitialOpen?: boolean }> = ({ header, isInitialOpen, children }) => {
  return (
    <AccordionItem defaultIsOpen={isInitialOpen}>
      <AccordionHeader>
        <Flex w="full" justifyContent="space-between">
          <Text fontWeight="semibold">{header}</Text>
          <AccordionIcon />
        </Flex>
      </AccordionHeader>
      <AccordionPanel>
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}


export default SkillsCategory;