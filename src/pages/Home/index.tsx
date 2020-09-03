import React from 'react';
import Section from './components/Section';
import Intro from './components/Intro';
import SectionHeading from './components/SectionHeading';

const HomePage: React.FC = () => {
  return (
    <>
      <Section bg="#000">
        <Intro />
      </Section>
      <Section>
        <SectionHeading>Experience</SectionHeading>
      </Section>
    </>
  )
};

export default HomePage;