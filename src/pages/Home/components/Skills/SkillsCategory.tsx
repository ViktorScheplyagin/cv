import React from 'react';
import { AccordionHeader, Flex, AccordionIcon, AccordionPanel, Text } from '@chakra-ui/core';

export const SkillsCategory: React.FC<{ header: string }> = ({ header, children }) => {
  return (
    <>
      <AccordionHeader>
        <Flex w='full' justifyContent='space-between'>
          <Text fontWeight='semibold'>{header}</Text>
          <AccordionIcon />
        </Flex>
      </AccordionHeader>
      <AccordionPanel>{children}</AccordionPanel>
    </>
  );
};
