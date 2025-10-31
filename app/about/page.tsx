import React from 'react';
import {Reviews} from '../components/sections/Reviews'; // Using alias import (recommended)
// import Teams from './Teams'
import {Values} from './Values'
import { AboutHero } from './AboutHero';
import { AboutUs } from './AboutUs';
import Mision from './Mision';
const AboutPage: React.FC = () => {
  return (
    <main>
      <AboutHero />
      <AboutUs />
      <Mision />
      <Values />
      {/* <Teams /> */}
      <Reviews />
    </main>
  );
};

export default AboutPage;
