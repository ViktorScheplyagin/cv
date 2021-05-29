import React from 'react';
import { Section, Intro, Experience, Skills, Education, Summary } from './components';

export const HomePage = () => {
  return (
    <>
      <Section bg='#000'>
        <Intro />
      </Section>

      <Section heading='Experience'>
        <Experience />
      </Section>

      <Section heading='Skills'>
        <Skills />
      </Section>

      <Section heading='Education'>
        <Education />
      </Section>

      <Section heading='Summary'>
        <Summary />
      </Section>
    </>
  );
};
