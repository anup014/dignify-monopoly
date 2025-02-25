import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import financeAnimation from "../../assets/finance.json"; // Ensure this file exists
import congratsAnimation from "../../assets/congrats.json";




import { useNavigate } from "react-router-dom"; // For navigation to Monopoly game

import '../../styles/Quiz.css';  // Fixing CSS import issue

const Quiz = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "What is the full form of GDP?", options: ["Gross Domestic Product", "Global Development Plan", "General Domestic Plan", "Growth Domestic Profit"], answer: "Gross Domestic Product" },
    { question: "Which organization regulates banks in India?", options: ["SEBI", "RBI", "IRDAI", "NSE"], answer: "RBI" },
    { question: "What does SIP stand for in mutual funds?", options: ["Systematic Investment Plan", "Savings and Investment Program", "Stock Investment Policy", "Secure Investment Plan"], answer: "Systematic Investment Plan" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Dollar", "Yen"], answer: "Yen" },
    { question: "Which tax is levied on goods and services in India?", options: ["Income Tax", "GST", "Wealth Tax", "Corporate Tax"], answer: "GST" },
    { question: "Who is responsible for printing currency notes in India?", options: ["Finance Ministry", "NITI Aayog", "RBI", "SEBI"], answer: "RBI" },
    { question: "What does IPO stand for?", options: ["Initial Public Offering", "Indian Private Organization", "Investment Policy Overview", "Insurance Premium Offer"], answer: "Initial Public Offering" },
    { question: "Which is India's largest stock exchange?", options: ["BSE", "NSE", "NASDAQ", "London Stock Exchange"], answer: "NSE" },
    { question: "What is the term for an investor who believes stock prices will rise?", options: ["Bull", "Bear", "Hawk", "Fox"], answer: "Bull" },
    { question: "Which is NOT a type of bank account?", options: ["Savings Account", "Current Account", "Fixed Deposit", "Trading Account"], answer: "Trading Account" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="quiz-animation"
      >
        <Lottie animationData={financeAnimation} loop={true} />
      </motion.div>

      {!showResult ? (
        <motion.div
          className="question-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                className="option-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="result-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Your Score: {score} / {questions.length}</h2>

          {score >= 5 ? (
            <div>
              <Lottie animationData={congratsAnimation} loop={true} />
              <h2>🎉 Congratulations! You are qualified for the Monopoly Game! 🎲</h2>
              <motion.button
                className="next-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/monopoly")}
              >
                Play Monopoly
              </motion.button>
            </div>
          ) : (
            <h2>❌ You need at least 5 correct answers to qualify. Try Again!</h2>
          )}

          <motion.button
            className="retry-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.location.reload()}
          >
            Retry Quiz
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;
