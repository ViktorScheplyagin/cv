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
} from '@chakra-ui/core';


const textStyles: any = {
  display: "inline",
  color: "#fff",
  fontWeight: "600",
};

const iconStyles: any = {
  color: "#fff",
};

const Intro: React.FC = () => {
  return (
    <Flex>
      <Image
        src={myPhoto}
        rounded="full"
        ml={[8]}
        mr={[16]}
        size="300px"
      />

      <Flex
        direction="column"
        justify="center"
        textTransform="uppercase"
      >
        <Flex direction="column" mb={[8]} {...textStyles}>
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
            <ListIcon {...iconStyles} icon="phone" />
            <Box {...textStyles}>+38 066 243 0114</Box>
          </ListItem>

          <ListItem>
            <ListIcon {...iconStyles} icon={FaLinkedinIn} />
            <Link
              href="https://www.linkedin.com/in/viktor-shh/"
              isExternal
            >
              <Box {...textStyles}>LinkedIn/In/Viktor-Shh</Box>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  )
};

export default Intro;