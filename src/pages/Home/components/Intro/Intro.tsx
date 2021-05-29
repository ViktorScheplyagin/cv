import React from 'react';
import { MdLocationOn, MdMailOutline } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import myPhoto from 'assets/my_photo.jpg';
import {
  Flex,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
  Box,
  SimpleGrid,
} from '@chakra-ui/core';

const textStyles: any = {
  display: 'inline',
  color: '#fff',
  fontWeight: '600',
  textAlign: ['center', null, 'left'],
};

const iconStyles: any = {
  color: '#fff',
};

export const Intro = () => {
  return (
    <SimpleGrid columns={[1, null, 2]}>
      <Flex align='center' justify='center'>
        <Image src={myPhoto} rounded='full' size={['200px', null, '300px']} />
      </Flex>

      <Flex
        direction='column'
        align={['center', null, 'flex-start']}
        justify='center'
        textTransform='uppercase'
        mt={[8, null, 0]}
      >
        <Flex direction='column' mb={[8]} {...textStyles}>
          <Heading>Viktor Shcheplyagin</Heading>
          <Box>Strong Junior Front-End Developer</Box>
        </Flex>

        <List spacing={[2]}>
          <ListItem>
            <ListIcon {...iconStyles} icon={MdLocationOn} />
            <Box {...textStyles}>Odessa, Ukraine</Box>
          </ListItem>

          <ListItem>
            <ListIcon {...iconStyles} icon={MdMailOutline} />
            <Box {...textStyles}>silverman995@gmail.com</Box>
          </ListItem>

          <ListItem>
            <ListIcon {...iconStyles} icon='phone' />
            <Box {...textStyles}>+38 066 243 0114</Box>
          </ListItem>

          <ListItem>
            <ListIcon {...iconStyles} icon={FaLinkedinIn} />
            <Link href='https://www.linkedin.com/in/viktor-shh/' isExternal>
              <Box {...textStyles}>LinkedIn/In/Viktor-Shh</Box>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </SimpleGrid>
  );
};
