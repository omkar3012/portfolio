import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  FaCode, 
  FaDatabase, 
  FaMobile, 
  FaCloud, 
  FaTools, 
  FaBrain,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub
} from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiMongodb, SiPostgresql, SiFlutter, SiKubernetes } from 'react-icons/si';

const SkillsContainer = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #000000;
  font-size: 1.2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
`;

const SkillsList = styled.div`
  display: grid;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffd700;
  font-size: 1.1rem;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.span`
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)<{ percentage: number }>`
  height: 100%;
  background: linear-gradient(90deg, #ffd700, #ffed4e);
  border-radius: 3px;
  width: ${({ percentage }) => percentage}%;
`;

const SkillPercentage = styled.span`
  color: #ffd700;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 0.5rem;
`;

const ProficiencyLevel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;

const Level = styled.span<{ active: boolean }>`
  font-size: 0.7rem;
  color: ${({ active }) => active ? '#ffd700' : '#666666'};
  font-weight: ${({ active }) => active ? '600' : '400'};
`;

const Skills: React.FC = () => {
  const skillCategories: Array<{
    id: number;
    title: string;
    icon: IconType;
    iconColor: string;
    skills: Array<{
      name: string;
      icon: IconType;
      percentage: number;
      level: string;
    }>;
  }> = [
    {
      id: 1,
      title: "Programming Languages",
      icon: FaCode,
      iconColor: "#4CAF50",
      skills: [
        { name: "Python", icon: FaPython, percentage: 95, level: "Expert" },
        { name: "JavaScript/TypeScript", icon: FaCode, percentage: 90, level: "Advanced" },
        { name: "Java", icon: FaCode, percentage: 85, level: "Advanced" },
        { name: "C++", icon: FaCode, percentage: 80, level: "Intermediate" }
      ]
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: FaCode,
      iconColor: "#2196F3",
      skills: [
        { name: "React.js", icon: FaReact, percentage: 92, level: "Expert" },
        { name: "HTML/CSS", icon: FaCode, percentage: 90, level: "Advanced" },
        { name: "Flutter", icon: SiFlutter, percentage: 85, level: "Advanced" },
        { name: "Vue.js", icon: FaCode, percentage: 75, level: "Intermediate" }
      ]
    },
    {
      id: 3,
      title: "Backend & Databases",
      icon: FaDatabase,
      iconColor: "#FF9800",
      skills: [
        { name: "Node.js", icon: FaNodeJs, percentage: 88, level: "Advanced" },
        { name: "MongoDB", icon: SiMongodb, percentage: 85, level: "Advanced" },
        { name: "PostgreSQL", icon: SiPostgresql, percentage: 80, level: "Intermediate" },
        { name: "Express.js", icon: FaCode, percentage: 85, level: "Advanced" }
      ]
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      icon: FaBrain,
      iconColor: "#9C27B0",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow, percentage: 90, level: "Expert" },
        { name: "OpenCV", icon: SiOpencv, percentage: 85, level: "Advanced" },
        { name: "PyTorch", icon: FaBrain, percentage: 80, level: "Advanced" },
        { name: "Computer Vision", icon: FaBrain, percentage: 88, level: "Advanced" }
      ]
    },
    {
      id: 5,
      title: "DevOps & Cloud",
      icon: FaCloud,
      iconColor: "#607D8B",
      skills: [
        { name: "Docker", icon: FaDocker, percentage: 82, level: "Advanced" },
        { name: "AWS", icon: FaAws, percentage: 78, level: "Intermediate" },
        { name: "Kubernetes", icon: SiKubernetes, percentage: 70, level: "Intermediate" },
        { name: "CI/CD", icon: FaTools, percentage: 80, level: "Intermediate" }
      ]
    },
    {
      id: 6,
      title: "Tools & Version Control",
      icon: FaTools,
      iconColor: "#795548",
      skills: [
        { name: "Git/GitHub", icon: FaGithub, percentage: 90, level: "Expert" },
        { name: "VS Code", icon: FaTools, percentage: 95, level: "Expert" },
        { name: "Postman", icon: FaTools, percentage: 85, level: "Advanced" },
        { name: "Jira", icon: FaTools, percentage: 80, level: "Intermediate" }
      ]
    }
  ];

  const getLevelIndex = (level: string) => {
    const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];
    return levels.indexOf(level);
  };

  return (
    <SkillsContainer id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My technical expertise across various domains
      </SectionSubtitle>

      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <CategoryHeader>
              <CategoryIcon color={category.iconColor}>
                <category.icon size={24} />
              </CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>

            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillIcon>
                    <skill.icon size={20} />
                  </SkillIcon>
                  <SkillInfo>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.percentage}%</SkillPercentage>
                    </div>
                    <SkillBar>
                      <SkillProgress
                        percentage={skill.percentage}
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percentage }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </SkillBar>
                    <ProficiencyLevel>
                      {["Beginner", "Intermediate", "Advanced", "Expert"].map((level, levelIndex) => (
                        <Level 
                          key={level} 
                          active={getLevelIndex(skill.level) >= levelIndex}
                        >
                          {level}
                        </Level>
                      ))}
                    </ProficiencyLevel>
                  </SkillInfo>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; 