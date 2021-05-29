import React from 'react';
import { List, ListItem } from '@chakra-ui/core';

type Skill = {
  name: string;
  experience?: string;
};

type SkillsListProps = {
  skills: Skill[];
};

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <List styleType='disk'>
    {skills.map((skill: Skill, idx: number) => (
      <ListItem key={idx}>{skill.name}</ListItem>
    ))}
  </List>
);
