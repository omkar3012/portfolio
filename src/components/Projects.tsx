import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaTimes } from 'react-icons/fa';

const ProjectsContainer = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  color: #cccccc;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div<{ bgColor: string }>`
  height: 200px;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled(motion.button)`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #ffd700;
    color: #000000;
    border-color: #ffd700;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(10px);
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ModalBody = styled.div`
  padding: 1rem 2rem 2rem;
`;

const ModalDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ModalTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ModalTechTag = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ModalActionButton = styled(motion.a)`
  background: #ffd700;
  color: #000000;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
    transform: translateY(-2px);
  }
`;

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Intelligent Traffic Control System",
      description: "An advanced traffic management solution leveraging AI and computer vision to optimize real-time traffic flows. Utilized Python, OpenCV, and YOLOv5 achieving 92% accuracy in vehicle detection from live traffic streams, integrated Apache Kafka for video streaming, and Flask-based microservices for efficient traffic signal adjustments. Improved average commuter wait times by 33%.",
      shortDescription: "AI-driven real-time traffic optimization using computer vision.",
      technologies: ["Python", "OpenCV", "YOLOv5", "Apache Kafka", "Flask", "Firebase", "Computer Vision", "Machine Learning"],
      github: "https://github.com/omkar3012/Intelligent-Traffic-Control-System",
      demo: "https://intelligent-traffic-control-system.vercel.app/",
      image: "/images/traffic-control-system.jpg",
      bgColor: "#4CAF50"
      },
      {
        id: 2,
        title: "FoodSpeak – AI Food Recognition App",
        description: "A cross-platform AI-powered mobile application that recognizes food items from images, suggests recipes, and provides nutritional data. Built using Flutter with offline support via TensorFlow Lite and enhanced accuracy using Clarifai and Google Vision APIs. Offers accessibility through text-to-speech and ensures secure API handling with encrypted local storage.",
        shortDescription: "Mobile app for food recognition, recipe suggestions, and nutrition insights.",
        technologies: [
          "Flutter",
          "TensorFlow Lite",
          "Clarifai API",
          "Google Vision API",
          "Edamam API",
          "Spoonacular API",
          "Flutter Secure Storage",
          "Text-to-Speech"
        ],
        github: "https://github.com/yourusername/foodspeak_final",  // Replace with actual repo if different
        demo: "",  // Add a link if a demo or publication exists
        image: "/images/foodspeak.jpg",  // Replace with actual image path if available
        bgColor: "#2196F3"
      },
      {
      id: 3,
      title: "Wellness Forever+",
      description: "A holistic personal wellness web platform providing automated medical reminders, inventory management, and enhanced user engagement. Built with a ReactJS frontend and Node.js backend powered by MongoDB, this application features JWT authentication, RESTful API services, and scheduled task automation, ensuring robust performance and a highly interactive user experience.",
      shortDescription: "Full-stack wellness app for automated health management and tracking.",
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "JWT", "Cron", "RESTful APIs", "Full Stack", "Health Tech"],
      github: "https://github.com/yourusername/wellness-forever",
      demo: "https://wellness-forever.com",
      image: "/images/wellness-forever.jpg",
      bgColor: "#FF9800"
      }
      
  ];

  return (
    <ProjectsContainer id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Here are some of my latest projects showcasing my skills and creativity
      </SectionSubtitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedProject(project.id)}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectImage bgColor={project.bgColor}>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.shortDescription}</ProjectDescription>
              <Technologies>
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
                {project.technologies.length > 4 && (
                  <TechTag>+{project.technologies.length - 4} more</TechTag>
                )}
              </Technologies>
              <ProjectActions>
                <ActionButton
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={16} /> Code
                </ActionButton>
                <ActionButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project.id);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEye size={16} /> Details
                </ActionButton>
              </ProjectActions>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    <ModalHeader>
                      <ModalTitle>{project.title}</ModalTitle>
                      <CloseButton onClick={() => setSelectedProject(null)}>
                        <FaTimes size={20} />
                      </CloseButton>
                    </ModalHeader>
                    <ModalBody>
                      <ModalDescription>{project.description}</ModalDescription>
                      <ModalTechnologies>
                        {project.technologies.map((tech, idx) => (
                          <ModalTechTag key={idx}>{tech}</ModalTechTag>
                        ))}
                      </ModalTechnologies>
                      <ModalActions>
                        <ModalActionButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub size={16} /> View Code
                        </ModalActionButton>
                        <ModalActionButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt size={16} /> Live Demo
                        </ModalActionButton>
                      </ModalActions>
                    </ModalBody>
                  </>
                );
              })()}
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects; 