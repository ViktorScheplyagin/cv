import React from 'react';
import { Flex, SimpleGrid, Text, Icon, Box } from '@chakra-ui/core';
import Portfolio from './Portfolio';


const Experience: React.FC = () => {
  return (
    <SimpleGrid
      columns={[1, null, 2]}
      mx={[4, null, 6]}
      spacing={[4, null, 0]}
    >
      <Flex justify="center" mb={[20, 0]}>
        <Icon name="kikidev" size="50px" mr={1} />

        <Box textTransform="uppercase">
          <Text fontSize="2xl" fontWeight="bold">
            KikiDevelopment
          </Text>
          <Text mb={2} fontSize="sm" fontWeight="semibold">
            5 team members
          </Text>
          <Text fontSize="sm">
            May, 2018 - Aug, 2020 
          </Text>
        </Box>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Box 
          textAlign="left" 
          w="100%"
          color="gray.600"
          fontWeight="semibold"
          fontSize="md"
          textTransform="uppercase"
        >
          <Text mb={1}>
            Junior Front-End developer
          </Text>
          <Text mb={2} fontSize="sm" color="gray.800">
            Projects:
          </Text>
        </Box>

        <Portfolio />
      </Flex>
    </SimpleGrid>
  )
};

export default Experience;