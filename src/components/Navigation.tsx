import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffd700;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

const ContactButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #ffd700;
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #ffd700;
    color: #000000;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)',
      }}
    >
      <NavContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
        >
          Omkar Rane
        </Logo>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavLink>
          ))}
          <ContactButton
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </ContactButton>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </MobileMenuButton>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation; 