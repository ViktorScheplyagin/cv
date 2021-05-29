import * as React from 'react';
import { Flex, Icon, Box, Text } from '@chakra-ui/core';
import { Portfolio } from './Portfolio/Portfolio';
import { PortfolioItem } from './types';

type Props = {
  logoName: string;
  title: string;
  aboutTeam: string;
  workPeriod: string;
  position: string;
  portfolioData: PortfolioItem[];
};

export const Item = ({
  logoName,
  title,
  aboutTeam,
  workPeriod,
  position,
  portfolioData,
}: Props) => (
  <>
    <Flex justify='center' mt={[12, 0]}>
      <Icon name={logoName} size='50px' mr={1} />

      <Box textTransform='uppercase'>
        <Text fontSize='2xl' fontWeight='bold'>
          {title}
        </Text>
        <Text mb={2} fontSize='sm' fontWeight='semibold'>
          {aboutTeam}
        </Text>
        <Text fontSize='sm'>{workPeriod}</Text>
      </Box>
    </Flex>

    <Flex direction='column' align='center' justify='center'>
      <Box
        textAlign='left'
        w='100%'
        color='gray.600'
        fontWeight='semibold'
        fontSize='md'
        textTransform='uppercase'
      >
        <Text mb={1}>{position}</Text>
        <Text mb={2} fontSize='sm' color='gray.800'>
          Projects:
        </Text>
      </Box>

      <Portfolio data={portfolioData} />
    </Flex>
  </>
);
