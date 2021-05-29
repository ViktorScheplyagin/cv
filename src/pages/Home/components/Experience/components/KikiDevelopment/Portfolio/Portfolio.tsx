import React from 'react';
import { Accordion, AccordionItem } from '@chakra-ui/core';
import { Description } from '../../Description';
import { DiJqueryLogo } from 'react-icons/di';
import { SiReactrouter, SiJest, SiWebpack, SiTypescript } from 'react-icons/si';
import { FaHtml5, FaBootstrap, FaLess, FaReact } from 'react-icons/fa';

export const Portfolio = () => {
  return (
    <Accordion w='full' allowMultiple>
      <AccordionItem>
        <Description
          title='KikiDev main website'
          link={{ url: 'https://kikidev.com/' }}
          points={[
            'Creation of pages markup and styles',
            'The pages adaptivity',
            'Animations of the pages',
          ]}
          technologies={[
            { name: 'HTML5', icon: FaHtml5 },
            { name: 'Less', icon: FaLess },
            { name: 'jQuery', icon: DiJqueryLogo },
          ]}
        />
      </AccordionItem>

      <AccordionItem>
        <Description
          title='Your121'
          link={{ url: 'https://your121.com/' }}
          points={[
            'Development a promo page',
            'Development of the app architecture from scratch',
            'Development of components and pages and building-in them into the app',
            'Writing of unit-tests',
          ]}
          technologies={[
            { name: 'React', icon: FaReact },
            { name: 'React Router', icon: SiReactrouter },
            { name: 'Jest', icon: SiJest },
            { name: 'Enzyme' },
            { name: 'Webpack', icon: SiWebpack },
            { name: 'HTML5', icon: FaHtml5 },
            { name: 'Less', icon: FaLess },
            { name: 'Bootstrap 4', icon: FaBootstrap },
          ]}
        />
      </AccordionItem>

      <AccordionItem>
        <Description
          title='Pivotic main website'
          link={{ url: 'https://pivotic.com/' }}
          points={[
            'Creation of pages markup and styles',
            'The pages adaptivity',
            'Animations of the pages',
          ]}
          technologies={[
            { name: 'HTML5', icon: FaHtml5 },
            { name: 'Less', icon: FaLess },
            { name: 'jQuery', icon: DiJqueryLogo },
            { name: 'jQuery Routing Plugin' },
          ]}
        />
      </AccordionItem>

      <AccordionItem>
        <Description
          title='Coright'
          link={{ url: 'https://app.coright.io/' }}
          points={[
            'Development of components and pages and building-in them into the app',
            'Writing of unit-tests',
            'Writing of integration tests',
          ]}
          technologies={[
            { name: 'React', icon: FaReact },
            { name: 'MobX', icon: 'mobx' },
            { name: 'React Router', icon: SiReactrouter },
            { name: 'Chakra UI' },
            { name: 'Formik' },
            { name: 'Jest', icon: SiJest },
            { name: 'Enzyme' },
            { name: 'React Testing Library' },
            { name: 'TypeScript', icon: SiTypescript },
          ]}
        />
      </AccordionItem>
    </Accordion>
  );
};
