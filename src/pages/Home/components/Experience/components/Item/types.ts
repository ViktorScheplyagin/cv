import { IconType } from 'react-icons/lib';

export type PortfolioItem = {
  title: string;
  points: string[];
  link?: {
    title?: string;
    url: string;
  };
  technologies: {
    name: string;
    icon?: IconType | string;
  }[];
};
