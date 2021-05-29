import * as React from 'react';
import { Item } from '../Item/Item';
import { getPortfolioData } from './helpers';

const data = getPortfolioData();

export const Itransition = () => {
  return (
    <Item
      logoName='itransition'
      title='Itransition'
      aboutTeam='7 - 30 team members (depends on a project)'
      workPeriod='Sep, 2020 - till present'
      position='Middle Front-End developer'
      portfolioData={data}
    />
  );
};
