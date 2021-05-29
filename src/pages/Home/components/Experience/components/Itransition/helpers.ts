import { DiJqueryLogo } from 'react-icons/di';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiReactrouter, SiTypescript, SiMaterialUi } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';

export const getPortfolioData = () => [
  {
    title: 'Zaprosto!',
    link: { url: 'https://za-prosto.ru/' },
    points: [
      'Refactoring to TypeScript and React Bootstrap',
      'Implementation of existing and improvement of new features',
    ],
    technologies: [
      { name: 'Typescript', icon: SiTypescript },
      { name: 'React', icon: FaHtml5 },
      { name: 'Redux', icon: SiRedux },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'React Bootstrap', icon: 'reactBootstrap' },
    ],
  },
  {
    title: 'Zaprosto Admin Panel',
    points: [
      'Refactoring to Material UI',
      'Implementation of existing and improvement of new features',
    ],
    technologies: [
      { name: 'Typescript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'Redux', icon: SiRedux },
      { name: 'Material UI', icon: SiMaterialUi },
    ],
  },
  {
    title: 'NormCyber',
    points: ['Development the front-end architecture and implementation it from scratch'],
    technologies: [
      { name: 'Typescript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'Redux', icon: SiRedux },
      { name: 'Ant Design', icon: AiOutlineAntDesign },
    ],
  },
];
