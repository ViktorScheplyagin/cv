import React from 'react';
import { Accordion, AccordionItem } from '@chakra-ui/core';
import SkillsCategory from './SkillsCategory';
import SkillsList from './SkillsList';
import skills from './skills.json';


const Skills: React.FC = () => {
  return (
    <Accordion
      mx={[4]}
      allowMultiple
      defaultIndex={[0, 1]}
    >
      <AccordionItem>
        <SkillsCategory header="Hard">
          <SkillsList skills={skills.hard} />
        </SkillsCategory>
      </AccordionItem>

      <AccordionItem>
        <SkillsCategory header="Soft">
          <SkillsList skills={skills.soft} />
        </SkillsCategory>
      </AccordionItem>
    </Accordion>
  )
};

export default Skills;