import React from 'react';
import Screen from './components/Screen';
import Intro from './components/Intro';

const HomePage: React.FC = () => {
  return (
    <>
      <Screen bg="#000">
        <Intro />
      </Screen>
    </>
  )
};

export default HomePage;