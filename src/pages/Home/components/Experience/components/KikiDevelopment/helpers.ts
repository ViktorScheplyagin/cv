import { DiJqueryLogo } from 'react-icons/di';
import { FaHtml5, FaLess, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiReactrouter, SiJest, SiWebpack, SiTypescript } from 'react-icons/si';

export const getPortfolioData = () => [
  {
    title: 'KikiDev main website',
    link: { url: 'https://kikidev.com/' },
    points: [
      'Creation of pages markup and styles',
      'The pages adaptivity',
      'Animations of the pages',
    ],
    technologies: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'Less', icon: FaLess },
      { name: 'jQuery', icon: DiJqueryLogo },
    ],
  },
  {
    title: 'Your121',
    link: { url: 'https://your121.com/' },
    points: [
      'Development a promo page',
      'Development of the app architecture from scratch',
      'Development of components and pages and building-in them into the app',
      'Writing of unit-tests',
    ],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'Jest', icon: SiJest },
      { name: 'Enzyme' },
      { name: 'Webpack', icon: SiWebpack },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'Less', icon: FaLess },
      { name: 'Bootstrap 4', icon: FaBootstrap },
    ],
  },
  {
    title: 'Pivotic main website',
    link: { url: 'https://pivotic.com/' },
    points: [
      'Creation of pages markup and styles',
      'The pages adaptivity',
      'Animations of the pages',
    ],
    technologies: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'Less', icon: FaLess },
      { name: 'jQuery', icon: DiJqueryLogo },
      { name: 'jQuery Routing Plugin' },
    ],
  },
  {
    title: 'Coright',
    link: { url: 'https://app.coright.io/' },
    points: [
      'Development of components and pages and building-in them into the app',
      'Writing of unit-tests',
      'Writing of integration tests',
    ],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'MobX', icon: 'mobx' },
      { name: 'React Router', icon: SiReactrouter },
      { name: 'Chakra UI' },
      { name: 'Formik' },
      { name: 'Jest', icon: SiJest },
      { name: 'Enzyme' },
      { name: 'React Testing Library' },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
];
