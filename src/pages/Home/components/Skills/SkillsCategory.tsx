import React from 'react';
import { 
  AccordionItem, 
  AccordionHeader, 
  Flex, 
  AccordionIcon, 
  AccordionPanel,
} from '@chakra-ui/core';


const SkillsCategory: React.FC<{ header: string, isInitialOpen?: boolean }> = ({ header, isInitialOpen, children }) => {
  return (
    <AccordionItem defaultIsOpen={isInitialOpen} border="none">
      <AccordionHeader
        bgImage="linear-gradient(to right, #eee, transparent)"
        transition="background ease 0.3s"
      >
        <Flex w="full" justifyContent="space-between">
          {header}
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