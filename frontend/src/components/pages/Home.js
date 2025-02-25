import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Lottie from "lottie-react";
import financeAnimation from "../../assets/finance.json"; // Add animation JSON file

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const StartButton = styled(motion.button)`
  padding: 15px 30px;
  font-size: 1.2rem;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: #e64a19;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Welcome to Gamified
      </Title>
      <p style={{ color: "white", fontSize: "1.2rem" }}>Test your financial knowledge in a fun way!</p>
      <Lottie animationData={financeAnimation} style={{ height: 200, width: 200 }} />
      <StartButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => navigate("/quiz")}>
        Start Quiz
      </StartButton>
    </Container>
  );
};

export default Home;
