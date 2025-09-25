import React from 'react';
import {Reviews} from '../components/sections/Reviews'; // Using alias import (recommended)
import Teams from './Teams'
import {Values} from './Values'
import { AboutHero } from './AboutHero';
const AboutPage: React.FC = () => {
  return (
    <main>
      <AboutHero />
      <Values />
      <Teams />
      <Reviews />
    </main>
  );
};

export default AboutPage;
