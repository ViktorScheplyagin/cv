import * as React from 'react';
import { Item } from '../Item/Item';
import { getPortfolioData } from './helpers';

const data = getPortfolioData();

export const KikiDevelopment = () => (
  <Item
    logoName='kikidev'
    title='KikiDevelopment'
    aboutTeam='5 team members'
    workPeriod='May, 2018 - Aug, 2020'
    position='Junior Front-End developer'
    portfolioData={data}
  />
);
