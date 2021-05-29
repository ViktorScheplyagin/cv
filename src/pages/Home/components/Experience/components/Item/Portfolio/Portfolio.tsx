import React from 'react';
import { Accordion, AccordionItem } from '@chakra-ui/core';
import { Description } from './Description';
import { PortfolioItem } from '../types';

type Props = {
  data: PortfolioItem[];
};

export const Portfolio = ({ data }: Props) => {
  return (
    <Accordion w='full' allowMultiple>
      {data.map((item: any, index: any) => (
        <AccordionItem key={index}>
          <Description {...item} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};
