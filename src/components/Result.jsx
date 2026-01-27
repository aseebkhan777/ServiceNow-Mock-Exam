import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const passingScore = 70;
  const scorePercentage = state?.scorePercentage || 0;
  const isPassed = scorePercentage >= passingScore;
  const results = state?.results || [];

  // Animated Counter for Score
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    if (!state?.results) {
      navigate("/home", { replace: true });
      return;
    }

    // Animate score count-up
    let start = 0;
    const end = scorePercentage;
    if (start === end) return;

    let timer = setInterval(() => {
      start += 1;
      setDisplayScore(start);
      if (start >= end) clearInterval(timer);
    }, 20); // speed of counting

    return () => clearInterval(timer);
  }, [state, navigate, scorePercentage]);

  // Circle animation props
  const radius = 70; // Larger radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scorePercentage / 100) * circumference;

  // Stagger Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  if (!state?.results) return null;

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans text-gray-900 pb-20 selection:bg-royal-azure selection:text-white overflow-x-hidden">

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-royal-azure/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 relative z-10">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-3"
            >
              <div className={`w-2 h-2 rounded-full ${isPassed ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                {isPassed ? 'Certification Ready' : 'Needs Review'}
              </span>
            </motion.div>
            <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Performance <span className="text-royal-azure">Report</span></h1>
            <p className="text-gray-500 text-base mt-2 font-medium">Detailed breakdown of your assessment session.</p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              onClick={() => navigate("/home")}
              className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold shadow-sm hover:shadow-md transition-all z-10"
            >
              {/* Fill Animation Layer */}
              <div className="absolute inset-0 bg-royal-azure transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />

              <span className="relative z-10 group-hover:text-white transition-colors">Back to Dashboard</span>
              <div className="relative z-10 w-6 h-6 rounded-lg bg-gray-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10"
        >
          {/* Main Score Card - 4 Cols */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            className={`col-span-1 md:col-span-4 bg-white p-6 rounded-[1.5rem] shadow-lg border border-gray-100 relative overflow-hidden flex flex-col items-center justify-center group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Dynamic Gradient Ring */}
            <div className="relative w-40 h-40 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-xl">
                {/* Track */}
                <circle cx="80" cy="80" r="60" stroke="#F1F5F9" strokeWidth="10" fill="transparent" strokeLinecap="round" />
                {/* Indicator */}
                <motion.circle
                  cx="80" cy="80" r="60"
                  stroke={isPassed ? "url(#scoreGradientPass)" : "url(#scoreGradientFail)"}
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 60}
                  initial={{ strokeDashoffset: 2 * Math.PI * 60 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 60 - (scorePercentage / 100) * (2 * Math.PI * 60) }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  strokeLinecap="round"
                />
                {/* Gradients */}
                <defs>
                  <linearGradient id="scoreGradientPass" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                  <linearGradient id="scoreGradientFail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FB7185" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute flex flex-col items-center">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl font-extrabold text-gray-900 tracking-tighter"
                >
                  {displayScore}%
                </motion.span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Score</span>
              </div>
            </div>

            <div className={`px-4 py-1.5 rounded-full font-bold text-xs tracking-wide ${isPassed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
              {isPassed ? 'Exceeded Expectations' : 'Needs Improvement'}
            </div>
          </motion.div>

          {/* Stats Box - 4 Cols */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 flex flex-col gap-5">
            {/* Correct */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between group cursor-default"
            >
              <div>
                <h3 className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mb-1">Correct Answers</h3>
                <span className="text-3xl font-extrabold text-gray-900">{results.filter(r => r.isCorrect).length} <span className="text-sm text-gray-300 font-medium">/ {results.length}</span></span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
            </motion.div>

            {/* Incorrect */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between group cursor-default"
            >
              <div>
                <h3 className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mb-1">Incorrect Answers</h3>
                <span className="text-3xl font-extrabold text-gray-900">{results.filter(r => !r.isCorrect).length}</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Status / Decor - 4 Cols */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-5 bg-royal-azure text-white p-8 rounded-[1.5rem] shadow-xl shadow-royal-azure/20 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Decorative Blobs */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white opacity-10 rounded-full blur-[60px]" />
            <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 bg-black opacity-10 rounded-full blur-[40px]" />

            <div>
              <h3 className="text-royal-azure-lighter font-medium mb-1 text-[10px] uppercase tracking-widest opacity-80">Final Status</h3>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Assessment <br />Completed</h2>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between text-sm font-medium opacity-80 mb-2">
                <span>Accuracy</span>
                <span>{scorePercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${scorePercentage}%` }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Question Analysis List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white overflow-hidden"
        >
          <div className="p-8 md:p-10 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Result Verification</h3>
              <p className="text-gray-500">Review your answers against the correct solutions.</p>
            </div>

            {/* Legend */}
            <div className="flex gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-green-500" /> Correct
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-red-500" /> Incorrect
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-50">
            {results.map(({ id, question, userAnswer, correctAnswers, isCorrect }, idx) => (
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                className="p-8 md:p-10 transition-colors"
              >
                <div className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                      {idx + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">{question}</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* User Answer */}
                      <div className={`p-5 rounded-2xl border-l-4 transition-all ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-extrabold uppercase tracking-wider ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>Your Answer</span>
                        </div>
                        <p className="font-semibold text-gray-800 text-base md:text-lg">
                          {Array.isArray(userAnswer) ? userAnswer.join(", ") : (userAnswer || "Skipped")}
                        </p>
                      </div>

                      {/* Correct Answer */}
                      <div className="p-5 rounded-2xl border-l-4 border-royal-azure bg-blue-50/30">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-royal-azure">Correct Solution</span>
                        </div>
                        <p className="font-semibold text-gray-800 text-base md:text-lg">
                          {correctAnswers.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Result;
