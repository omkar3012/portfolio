import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaGraduationCap, FaLaptopCode, FaFlask, FaRobot } from 'react-icons/fa';

const ExperienceContainer = styled.section`
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #ffd700, transparent);
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div<{ color: string }>`
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

const TitleInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const Company = styled.h4`
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

const Description = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
`;

const Responsibility = styled.li`
  color: #999999;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #ffd700;
    font-weight: bold;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 215, 0, 0.2);
`;

const WorkExperience: React.FC = () => {
  const experiences: Array<{
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
    icon: IconType;
    iconColor: string;
    responsibilities: string[];
    technologies: string[];
  }> = [
    {
      id: 1,
      title: "Artificial Intelligence Intern",
      company: "Blue AI Labs",
      duration: "Jun 2025 - Present",
      description: "Architecting a comprehensive, schema-driven platform for AI-based call auditing, contextual feedback, and advanced analytics, leveraging robust data ingestion and dynamic middleware.",
      icon: FaRobot,
      iconColor: "#673AB7",
      responsibilities: [
      "Developing and refining a full-stack platform using OpenAI APIs, Supabase, PostgreSQL, and Prisma ORM",
      "Creating intelligent annotation frameworks for timestamped insights, sentiment analysis, and custom tagging",
      "Implementing secure and authenticated data pipelines for multi-modal inputs ensuring data integrity",
      "Engineering resilient API layers and middleware to support evolving data models and workflow automation",
      "Synthesizing structured audit insights for downstream integration with LLM-based modules",
      "Enhancing user experience with advanced UI components and adaptive logic using React, Next.js, and Tailwind CSS",
      "Managing cloud infrastructure on AWS and GCP for scalable ML solutions"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma ORM", "AWS", "GCP", "Machine Learning", "API Development"]
      },
      {
      id: 2,
      title: "Teaching Assistant",
      company: "Stony Brook University",
      duration: "Jan 2025 - May 2025",
      description: "Delivering instructional content in Human-Computer Interaction (HCI), significantly improving student engagement and comprehension.",
      icon: FaGraduationCap,
      iconColor: "#4CAF50",
      responsibilities: [
      "Developing instructional materials covering Fitts’ Law, HCI heuristics, and usability principles",
      "Evaluating and providing personalized feedback for over 300 assignments",
      "Leading weekly discussions and interactive sessions to deepen student understanding",
      "Incorporating visual aids to enhance learning outcomes by 25%"
      ],
      technologies: ["Human-Computer Interaction", "Instructional Design", "Python", "Visual Teaching Aids", "Usability Testing"]
      },
      {
      id: 3,
      title: "AIML Research Intern",
      company: "Indian Institute of Technology - Bombay",
      duration: "Jan 2023 - Jul 2023",
      description: "Developed high-performance data wrangling and forecasting engines, streamlining data processing and enhancing predictive analytics.",
      icon: FaFlask,
      iconColor: "#2196F3",
      responsibilities: [
      "Engineered scalable data wrangling pipelines using Python, NumPy, Pandas, PySpark, and Apache Kafka",
      "Built a robust time series forecasting engine leveraging ARIMA, Scikit-learn, and TensorFlow",
      "Reduced preprocessing time by 40% and achieved an 89% accuracy in forecasting",
      "Deployed predictive analytics solutions for smart home automation"
      ],
      technologies: ["Python", "TensorFlow", "PySpark", "Apache Kafka", "ARIMA", "Scikit-learn", "Predictive Analytics"]
      },
      {
      id: 4,
      title: "Software Developer Intern",
      company: "Hindustan Petroleum Corporation Ltd.",
      duration: "Jun 2022 - Jul 2022",
      description: "Enhanced enterprise software and visualization solutions, significantly improving application performance and backend efficiency.",
      icon: FaLaptopCode,
      iconColor: "#FF9800",
      responsibilities: [
      "Developed and optimized web modules using Spring Boot, JSP, and Thymeleaf for real-time ship tracking",
      "Integrated PDF generation using Apache PDFBox and iText",
      "Automated data aggregation and reporting, reducing manual effort by 50%",
      "Optimized backend queries, achieving a 40% improvement in database efficiency"
      ],
      technologies: ["Spring Boot", "Java", "JSP", "Thymeleaf", "PostgreSQL", "Apache PDFBox", "RESTful APIs", "Enterprise Software"]
      }
      
  ];

  return (
    <ExperienceContainer id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Work Experience & Internships
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My professional journey in software development and research
      </SectionSubtitle>

      <TimelineContainer>
        <TimelineLine />
        
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <CardHeader>
              <IconContainer color={experience.iconColor}>
                <experience.icon size={24} />
              </IconContainer>
              <TitleInfo>
                <JobTitle>{experience.title}</JobTitle>
                <Company>{experience.company}</Company>
                <Duration>{experience.duration}</Duration>
              </TitleInfo>
            </CardHeader>
            
            <Description>{experience.description}</Description>
            
            <Responsibilities>
              {experience.responsibilities.map((responsibility, idx) => (
                <Responsibility key={idx}>{responsibility}</Responsibility>
              ))}
            </Responsibilities>
            
            <Technologies>
              {experience.technologies.map((tech, idx) => (
                <TechTag key={idx}>{tech}</TechTag>
              ))}
            </Technologies>
          </ExperienceCard>
        ))}
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default WorkExperience; 