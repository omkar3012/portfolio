import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  overflow: hidden;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 50%;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 2;
  position: relative;
`;

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  border: 4px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #cccccc;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #999999;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #ffd700;
    color: #000000;
    border-color: #ffd700;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  z-index: 2;
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
`;

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <BackgroundShapes>
        <Shape
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: '100px',
            height: '100px',
            top: '20%',
            left: '10%',
          }}
        />
        <Shape
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: '150px',
            height: '150px',
            top: '60%',
            right: '15%',
          }}
        />
        <Shape
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: '80px',
            height: '80px',
            bottom: '30%',
            left: '20%',
          }}
        />
      </BackgroundShapes>

      <HeroContent>
        <ProfileImage
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/images/profile-photo.jpg" alt="Omkar Rane" />
        </ProfileImage>

        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Omkar Rane
        </Name>

        <Tagline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Developer & AI Engineer
        </Tagline>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about creating innovative solutions through code. 
          Specializing in full-stack development, artificial intelligence, and computer vision. 
          Always eager to learn and contribute to cutting-edge technologies.
        </Description>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SocialLink
            href="https://github.com/omkar3012"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={20} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/omkar-rane-74b667221/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={20} />
          </SocialLink>
          <SocialLink
            href="mailto:omkar.m.rane.30@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={20} />
          </SocialLink>
        </SocialLinks>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToNext}
        whileHover={{ scale: 1.1 }}
      >
        <ScrollText>Scroll Down</ScrollText>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown size={20} />
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection; 