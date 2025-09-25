import React from 'react';
import {Reviews} from '../components/sections/Reviews'; // Using alias import (recommended)
import Teams from './Teams'
const AboutPage: React.FC = () => {
  return (
    <main>
      <Teams />
      <Reviews />
    </main>
  );
};

export default AboutPage;
