import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';

const EducationContainer = styled.section`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const IconContainer = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #000000;
  font-size: 1.5rem;
`;

const TitleInfo = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const Institution = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffd700;
  margin-bottom: 0.25rem;
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: #999999;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
`;

const GPA = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #4CAF50;
  font-weight: 500;
`;

const Description = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Courses = styled.div`
  margin-bottom: 1.5rem;
`;

const CoursesTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
`;

const Course = styled.li`
  color: #999999;
  font-size: 0.9rem;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #ffd700;
    font-weight: bold;
  }
`;

const Achievements = styled.div`
  margin-top: 1.5rem;
`;

const AchievementTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Achievement = styled.li`
  color: #999999;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '🏆';
    position: absolute;
    left: 0;
  }
`;

const Education: React.FC = () => {
  const educationData: Array<{
    id: number;
    degree: string;
    institution: string;
    duration: string;
    gpa: string;
    description: string;
    icon: IconType;
    iconColor: string;
    courses: string[];
    achievements: string[];
    }> = [
      {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stony Brook University",
      duration: "2024 - 2026",
      gpa: "3.89/4.0",
      description: "Advanced coursework in computer science, focused on software engineering, AI/ML, and human-computer interaction, enhancing both technical and research capabilities.",
      icon: FaGraduationCap,
      iconColor: "#FF5722",
      courses: [
        "Distributed Systems",
        "Data Science Fundamentals",
        "Advanced Data Structures and Algorithms",
        "Human-Computer Interaction",
        "Logic in Computer Science"
      ],
      achievements: [
        "Teaching Assistant in Human-Computer Interaction",
        "Conducted instructional sessions for over 100 students",
        "Improved student comprehension by 25%",
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Sardar Patel Institute of Technology, Mumbai University",
      duration: "2020 - 2024",
      gpa: "9.3/10.0",
      description: "Comprehensive foundation in computer science fundamentals, software development, and emerging technologies. Active participation in technical clubs and hackathons.",
      icon: FaBook,
      iconColor: "#2196F3",
      courses: [
        "Data Structures & Algorithms",
        "Design and Analysis of Algorithms",
        "Distributed Systems",
        "Big Data Analytics",
        "Artificial Intelligence",
        "Object-Oriented Programming",
        "Database Management",
        "Web Development",
        "Operating Systems",
        "Computer Networks"
      ],
      achievements: [
        "First Class with Distinction",
        "Technical Lead of Entrepreneurship Cell, S.P.I.T.",
        "Active participant in hackathons"
      ]
    }
  ];

  return (
    <EducationContainer id="education">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Education
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My academic journey and achievements
      </SectionSubtitle>

      <EducationGrid>
        {educationData.map((education, index) => (
          <EducationCard
            key={education.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <CardHeader>
              <IconContainer color={education.iconColor}>
                <education.icon size={24} />
              </IconContainer>
              <TitleInfo>
                <Degree>{education.degree}</Degree>
                <Institution>{education.institution}</Institution>
                <Duration>{education.duration}</Duration>
              </TitleInfo>
            </CardHeader>

            <GPA>
              <FaAward size={16} />
              GPA: {education.gpa}
            </GPA>

            <Description>{education.description}</Description>

            <Courses>
              <CoursesTitle>Key Courses:</CoursesTitle>
              <CourseList>
                {education.courses.map((course, idx) => (
                  <Course key={idx}>{course}</Course>
                ))}
              </CourseList>
            </Courses>

            <Achievements>
              <AchievementTitle>
                <FaAward size={16} />
                Achievements & Activities:
              </AchievementTitle>
              <AchievementList>
                {education.achievements.map((achievement, idx) => (
                  <Achievement key={idx}>{achievement}</Achievement>
                ))}
              </AchievementList>
            </Achievements>
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationContainer>
  );
};

export default Education; 