import React from 'react';
import { Accordion } from '@chakra-ui/core';
import SkillsCategory from './SkillsCategory';


const Skills: React.FC = () => {
  return (
    <Accordion
      mx={[4]}
      allowMultiple
    >
      <SkillsCategory isInitialOpen header="Hard">
        My hard skills will be here...
      </SkillsCategory>

      <SkillsCategory isInitialOpen header="soft">
        My soft skills will be here...
      </SkillsCategory>
    </Accordion>
  )
};

export default Skills;