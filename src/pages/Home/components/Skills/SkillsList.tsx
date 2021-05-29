import React from 'react';
import { List, ListItem } from '@chakra-ui/core';

type Skill = {
  name: string;
  experience?: string;
};

type SkillsListProps = {
  skills: Skill[];
};

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  const isTable = skills.some((skill) => Object.keys(skill).length > 1);

  const mapSkillToTable = (skill: Skill, idx: number) => (
    <ListItem key={idx}>
      <table width='100%' style={{ borderCollapse: 'collapse' }}>
        <tr style={{ borderBottom: '1px solid' }}>
          <td width='50%'>{skill.name}</td>
          <td width='50%'>{skill.experience}</td>
        </tr>
      </table>
    </ListItem>
  );

  const mapSkillToLi = (skill: Skill, idx: number) => <ListItem key={idx}>{skill.name}</ListItem>;

  return (
    <List styleType={isTable ? 'none' : 'disk'}>
      {skills.map(isTable ? mapSkillToTable : mapSkillToLi)}
    </List>
  );
};
