import React from 'react';
import { Text, Box, } from '@chakra-ui/core';
import TechnologyLabel from './TechnologyLabel';


const Summary: React.FC = () => {
  return (
    <Box mx="auto" w={["80%", "90%"]}>
      <Text>
        I like to develop a frontend, using
        <TechnologyLabel
          name="React"
          icon="react"
          description="A JavaScript library for building user interfaces"
        />,
        <TechnologyLabel
          name="Redux"
          icon="redux"
          description="A Predictable State Container for JS Apps"
        /> and
        <TechnologyLabel
          name="TypeScript"
          icon="typescript"
          description="TypeScript extends JavaScript by adding types"
        />.

        Also, I'm very interested in backend development
        (<TechnologyLabel 
          name="NodeJS" 
          icon="nodejs" 
          description="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine"
        />),
        mobile and desktop dev
        (<TechnologyLabel
          name="React Native"
          icon="react"
          description="A framework for building native apps using React"
        />,
        <TechnologyLabel
          name="Electron"
          icon="electron"
          description="Build cross-platform desktop apps with JavaScript, HTML, and CSS"
        />).
      </Text>
      <Text mt={[8]}>
        My current aim is full-stack web development.
      </Text>
    </Box>
  )
};

export default Summary;