import React from 'react';
import Section from './components/Section';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Summary from './components/Summary';

const HomePage: React.FC = () => {
  return (
    <>
      <Section bg="#000">
        <Intro />
      </Section>

      <Section heading="Experience">
        <Experience />
      </Section>

      <Section heading="Skills">
        <Skills />
      </Section>

      <Section heading="Education">
        <Education />
      </Section>

      <Section heading="Summary">
        <Summary />
      </Section>
    </>
  )
};

export default HomePage;