import React from 'react';
import {
  List,
  ListItem,
  Text,
  Flex,
  Box,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Link,
  Icon,
} from '@chakra-ui/core';
import TechnologyLabel from '../../Summary/TechnologyLabel';


type DescriptionProps = {
  title: string;
  points: string[];
  technologies: { icon?: any, name: string, }[];
  link: {
    title?: string;
    url: string;
  };
};


const Description: React.FC<DescriptionProps> = ({ title, points, technologies, link }) => {
  return (
    <>
      <AccordionHeader>
        <Flex justify="space-between" w="100%">
          <Text>{title}</Text>
          <AccordionIcon />
        </Flex>
      </AccordionHeader>

      <AccordionPanel>
        <Link
          href={link.url}
          fontWeight="semibold"
          color="blue.500"
          isExternal
        >
          <Flex align="center" d="inline-flex">
            {link.title || "View"}
            <Icon 
              name="external-link" 
              mx={1}
              my={4}
              color="gray.800"
            />
          </Flex>
        </Link>

        <Text fontWeight="semibold">Responsibilities:</Text>
        <List styleType="disk" stylePos="outside" ml={5}>
          {points.map((point, idx) => (
            <ListItem key={idx}>
              {point}
            </ListItem>
          ))}

          {technologies.length && 
          <ListItem>
            <Flex wrap="wrap">
              <Text mr={4}>Used technologies:</Text>
              <Box>
                {technologies.map((technology, idx) => (
                  <>
                    <TechnologyLabel 
                      key={idx}
                      {...technology}
                    />
                    {idx < technologies.length - 1 ? "," : ""}
                  </>
                ))}
              </Box>
            </Flex>
          </ListItem>}
        </List>
      </AccordionPanel>
    </>
  )
};

export default Description;