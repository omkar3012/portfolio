import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navigation />
      <HeroSection />
      <WorkExperience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </AppContainer>
  );
};

export default App; 