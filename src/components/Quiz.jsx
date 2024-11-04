import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import questionBank from "../data/spm"; // Default question bank
import HRSD from "../data/hrsd"; // HRSD question bank
import { shuffleArray, getRandomQuestions } from "../utils/shuffle";
import Question from "./Question";

const Quiz = () => {
  const { state } = useLocation(); // Get state passed from Home
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false); // To prevent multiple submissions

  // Load and shuffle questions based on the selected exam type
  useEffect(() => {
    const selectedQuestions = state.examType === "HRSD" ? HRSD : questionBank; // Determine question bank based on selected exam
    const initialQuestions = getRandomQuestions(selectedQuestions, 100).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setQuestions(initialQuestions);
  }, [state.examType]); // Add dependency on examType

  // Timer countdown logic
  useEffect(() => {
    if (timeLeft <= 0 && !isSubmitted) {
      handleSubmit(); // Auto-submit when time runs out
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const handleOptionSelect = (questionId, option) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: option }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true); // Prevents re-submission
    let score = 0;

    const results = questions.map((q) => {
      const userAnswer = answers[q.id];
      let isCorrect = false;

      // Check for multiple-choice questions
      if (q.multipleChoice) {
        if (Array.isArray(userAnswer)) {
          isCorrect =
            q.correctAnswers.every((answer) => userAnswer.includes(answer)) &&
            userAnswer.length === q.correctAnswers.length;
        }
      } else {
        // For single-choice questions
        isCorrect = userAnswer === q.correctAnswers[0];
      }

      if (isCorrect) score++;

      return {
        id: q.id,
        question: q.text,
        userAnswer: userAnswer,
        correctAnswers: q.correctAnswers,
        isCorrect: isCorrect,
      };
    });

    const scorePercentage = (score / questions.length) * 100;
    navigate("/result", { state: { scorePercentage, results } });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Display loading message until questions are set
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-3xl h-[60vh] flex flex-col justify-center w-full mx-auto text-center">
      <div className="text-xl font-semibold mb-4">
        Time Left: {formatTime(timeLeft)}
      </div>
      <Question
        question={questions[currentQuestionIndex]}
        selectedOption={answers[questions[currentQuestionIndex].id]}
        onSelectOption={handleOptionSelect}
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="bg-gray-300 py-1 px-4 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
