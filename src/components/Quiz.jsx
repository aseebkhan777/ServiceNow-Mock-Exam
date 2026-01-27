import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SPM from "../data/spm";
import HRSD from "../data/hrsd";
import ITSM from "../data/itsm";
import ITOM from "../data/itom";
import CSA from "../data/csa1";
import CSA2 from "../data/csa2";
import CSA3 from "../data/csa3";
import CSA4 from "../data/csa4";
import CSA5 from "../data/csa5";
import CSA6 from "../data/csa6";
import CAD1 from "../data/cad1";
import CAD2 from "../data/cad2";
import CAD3 from "../data/cad3";
import TEST from "../data/test";
import { shuffleArray, getRandomQuestions } from "../utils/shuffle";
import Question from "./Question";

const Quiz = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.examType) {
      navigate("/home", { replace: true });
    }
  }, [state, navigate]);

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let selectedQuestions;
    switch (state?.examType) {
      case "HRSD": selectedQuestions = HRSD; break;
      case "ITSM": selectedQuestions = ITSM; break;
      case "ITOM": selectedQuestions = ITOM; break;
      case "CSA1": selectedQuestions = CSA; break;
      case "CSA2": selectedQuestions = CSA2; break;
      case "CSA3": selectedQuestions = CSA3; break;
      case "CSA4": selectedQuestions = CSA4; break;
      case "CSA5": selectedQuestions = CSA5; break;
      case "CSA6": selectedQuestions = CSA6; break;
      case "CAD1": selectedQuestions = CAD1; break;
      case "CAD2": selectedQuestions = CAD2; break;
      case "CAD3": selectedQuestions = CAD3; break;
      case "TEST": selectedQuestions = TEST; break;
      default: selectedQuestions = SPM;
    }

    const initialQuestions = shuffleArray(selectedQuestions || [])
      .filter((q) => q && q.text && q.options && q.correctAnswers)
      .map((q) => ({
        ...q,
        text: q.text || "Untitled Question",
        options: shuffleArray(q.options || []),
        correctAnswers: q.correctAnswers || [],
      }));

    setQuestions(initialQuestions);
  }, [state]);

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    return <div className="w-full min-h-screen flex items-center justify-center bg-[#F8FAFC] text-royal-azure font-mono animate-pulse">Loading Simulation...</div>;
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#F8FAFC] font-sans relative selection:bg-royal-azure selection:text-white">

      {/* Ambient Backlights (Light Mode) */}
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-royal-azure/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-royal-azure/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header Section - Sticky */}
      <div className="w-full bg-[#F8FAFC]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-xs font-bold text-royal-azure tracking-widest uppercase mb-1">ServiceNow Exam</h2>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">{state?.examType || "Assessment"}</h1>
          </div>

          {/* Timer (Light Mode) */}
          <div className={`flex items-center gap-3 px-4 py-2 rounded-xl bg-white border shadow-sm ${timeLeft < 300 ? 'border-red-500/50' : 'border-gray-200'}`}>
            <svg className={`w-4 h-4 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-royal-azure'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-lg font-mono font-medium ${timeLeft < 300 ? 'text-red-500' : 'text-gray-700'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full h-[4px] bg-gray-200">
          <motion.div
            className="h-full bg-royal-azure"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Content Area - Full Page Scroll */}
      <div className="flex-1 w-full max-w-4xl px-4 py-8 md:py-12 flex flex-col z-10">

        {/* Question Card (Light Mode) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50 bg-gray-50/50">
              <span className="text-royal-azure font-mono text-sm tracking-wider">
                QUESTION {currentQuestionIndex + 1} <span className="text-gray-400">/</span> {questions.length}
              </span>
              <div className="h-2 w-2 rounded-full bg-radioactive-grass shadow-sm" />
            </div>

            {/* Content - No internal scroll, grows with content */}
            <div className="px-8 md:px-12 py-8 md:py-10">
              <Question
                question={questions[currentQuestionIndex]}
                selectedOption={answers[questions[currentQuestionIndex].id]}
                onSelectOption={handleOptionSelect}
                index={currentQuestionIndex}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Controls (Light Mode) - Fixed Bottom or Static? Static for full page scroll feel, or fixed if desired. Using Static here for natural flow */}
      <div className="w-full max-w-4xl px-6 pb-12 pt-4 flex justify-between items-center z-10">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${currentQuestionIndex === 0
            ? "opacity-30 cursor-not-allowed text-gray-400"
            : "text-gray-500 hover:text-gray-900 hover:bg-white hover:shadow-md"
            }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </button>

        {currentQuestionIndex < questions.length - 1 ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-gray-900 text-white shadow-xl hover:shadow-2xl transition-all"
          >
            Next Question
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-radioactive-grass text-black shadow-xl shadow-radioactive-grass/20 hover:shadow-radioactive-grass/40 transition-all"
          >
            Finish Assessment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
