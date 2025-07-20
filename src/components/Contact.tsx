import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
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

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactIcon = styled.div<{ color: string }>`
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

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: #cccccc;
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: #ffd700;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffed4e;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
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

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: #999999;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: #999999;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: #ffd700;
  color: #000000;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #666666;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid #4CAF50;
  border-radius: 8px;
  padding: 1rem;
  color: #4CAF50;
  text-align: center;
  margin-top: 1rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <ContactContainer id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Let's discuss your next project or opportunity
      </SectionSubtitle>

      <ContactContent>
        <ContactInfo>
          <ContactCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ContactHeader>
              <ContactIcon color="#4CAF50">
                <FaEnvelope size={20} />
              </ContactIcon>
              <div>
                <ContactTitle>Email</ContactTitle>
                <ContactText>Let's start a conversation</ContactText>
              </div>
            </ContactHeader>
            <ContactLink href="mailto:omkar.m.rane.30@gmail.com">
              omkar.rane@example.com
            </ContactLink>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ContactHeader>
              <ContactIcon color="#2196F3">
                <FaPhone size={20} />
              </ContactIcon>
              <div>
                <ContactTitle>Phone</ContactTitle>
                <ContactText>Call me directly</ContactText>
              </div>
            </ContactHeader>
            <ContactLink href="tel:+1-934-246-4666">
              +1 (934) 246-4666
            </ContactLink>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ContactHeader>
              <ContactIcon color="#FF9800">
                <FaMapMarkerAlt size={20} />
              </ContactIcon>
              <div>
                <ContactTitle>Location</ContactTitle>
                <ContactText>Based in New York, NY</ContactText>
              </div>
            </ContactHeader>
            <ContactText>
              Stony Brook, New York<br />
              United States
            </ContactText>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ContactHeader>
              <ContactIcon color="#9C27B0">
                <FaGithub size={20} />
              </ContactIcon>
              <div>
                <ContactTitle>Connect</ContactTitle>
                <ContactText>Follow me on social media</ContactText>
              </div>
            </ContactHeader>
            <SocialLinks>
              <SocialLink
                href="https://github.com/omkar3012"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={16} />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/omkar-rane-74b667221/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={16} />
              </SocialLink>
            </SocialLinks>
          </ContactCard>
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <FormTitle>Send me a message</FormTitle>
          
          <FormGroup>
            <Label htmlFor="name">Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message *</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⏳
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane size={16} />
                Send Message
              </>
            )}
          </SubmitButton>

          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Thank you! Your message has been sent successfully. I'll get back to you soon.
            </SuccessMessage>
          )}
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact; 