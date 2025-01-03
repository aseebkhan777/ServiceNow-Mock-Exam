import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SPM from "../data/spm";
import HRSD from "../data/hrsd";
import ITSM from "../data/itsm";
import ITOM from "../data/itom";
import CSA from "../data/csa"
import { shuffleArray, getRandomQuestions } from "../utils/shuffle";
import Question from "./Question";

const Quiz = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(7200);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let selectedQuestions;
    switch (state.examType) {
      case "HRSD":
        selectedQuestions = HRSD;
        break;
      case "ITSM":
        selectedQuestions = ITSM;
        break;
      case "ITOM":
        selectedQuestions = ITOM;
        break;
      case "CSA":
        selectedQuestions = CSA;
        break;
      default:
        selectedQuestions = SPM;
    }

    const initialQuestions = getRandomQuestions(selectedQuestions, 358)
      .filter((q) => q && q.text && q.options && q.correctAnswers)
      .map((q) => ({
        ...q,
        text: q.text || "Untitled Question",
        options: shuffleArray(q.options || []),
        correctAnswers: q.correctAnswers || [],
      }));

    setQuestions(initialQuestions);
  }, [state.examType]);

  useEffect(() => {
    if (timeLeft <= 0 && !isSubmitted) {
      handleSubmit();
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
    setIsSubmitted(true);
    let score = 0;

    const results = questions.map((q) => {
      const userAnswer = answers[q.id];
      let isCorrect = false;

      if (q.multipleChoice) {
        if (Array.isArray(userAnswer)) {
          isCorrect =
            q.correctAnswers.every((answer) => userAnswer.includes(answer)) &&
            userAnswer.length === q.correctAnswers.length;
        }
      } else {
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

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-3xl h-[100vh] sm:h-[80vh] flex flex-col justify-center w-full mx-auto text-center">
      <div className="text-xl font-semibold mb-4">
        Time Left: {formatTime(timeLeft)}
      </div>
      <Question
        question={questions[currentQuestionIndex]}
        selectedOption={answers[questions[currentQuestionIndex].id]}
        onSelectOption={handleOptionSelect}
        index={currentQuestionIndex} // Pass the current question index here
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
