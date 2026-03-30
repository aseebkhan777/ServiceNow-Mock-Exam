import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import all question banks
import SPM from "../data/spm";
import HRSD from "../data/hrsd";
import ITSM from "../data/itsm";
import ITOM from "../data/itom";
import CSA1 from "../data/csa1";
import CSA2 from "../data/csa2";
import CSA3 from "../data/csa3";
import CSA4 from "../data/csa4";
import CSA5 from "../data/csa5";
import CSA6 from "../data/csa6";
import CAD1 from "../data/cad1";
import CAD2 from "../data/cad2";
import CAD3 from "../data/cad3";
import CSDM1 from "../data/csdm1";
import CSDM2 from "../data/csdm2";
import CSDM3 from "../data/csdm3";
import CSDM4 from "../data/csdm4";
import TEST from "../data/test";

// Aggregate all questions
const allQuestions = [
  ...SPM.map(q => ({ ...q, examSource: "SPM" })),
  ...HRSD.map(q => ({ ...q, examSource: "HRSD" })),
  ...ITSM.map(q => ({ ...q, examSource: "ITSM" })),
  ...ITOM.map(q => ({ ...q, examSource: "ITOM" })),
  ...[...CSA1, ...CSA2, ...CSA3, ...CSA4, ...CSA5, ...CSA6].map(q => ({ ...q, examSource: "CSA" })),
  ...[...CAD1, ...CAD2, ...CAD3].map(q => ({ ...q, examSource: "CAD" })),
  ...[...CSDM1, ...CSDM2, ...CSDM3, ...CSDM4].map(q => ({ ...q, examSource: "CSDM" })),
  ...TEST.map(q => ({ ...q, examSource: "TEST" }))
].filter(q => q && q.text && q.correctAnswers); // filter out invalid entries just in case

const GlobalSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const filteredQuestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lowerSearch = searchTerm.toLowerCase();
    return allQuestions.filter(
      (q) =>
        q.text.toLowerCase().includes(lowerSearch) ||
        (q.options && q.options.some((opt) => opt.toLowerCase().includes(lowerSearch))) ||
        (q.examSource && q.examSource.toLowerCase().includes(lowerSearch))
    ).slice(0, 100); // limit to 100 results for performance
  }, [searchTerm]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans text-gray-900 flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-royal-azure/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-royal-azure/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl border border-gray-200/60 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-royal-azure rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-md shadow-royal-azure/20">
              S
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:inline-block">ServiceNow<span className="text-royal-azure">.Prep</span></span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-10 z-10 flex flex-col gap-8">
        {/* Search Header */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-royal-azure/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Global Knowledge <span className="text-royal-azure">Search</span>
          </h1>
          <p className="text-gray-500 mb-8 max-w-xl text-lg relative z-10">
            Search instantaneously across all {allQuestions.length} ServiceNow questions, including options, to find the exact answer you're looking for.
          </p>

          {/* Search Input */}
          <div className="relative z-10 w-full max-w-2xl">
            <input
              type="text"
              autoFocus
              placeholder="Type keywords, question fragments, or options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 pl-14 pr-5 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-royal-azure focus:ring-4 focus:ring-royal-azure/10 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400 shadow-sm text-lg"
            />
            <svg className="w-6 h-6 text-gray-400 absolute left-5 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                title="Clear Search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Results Area */}
        <div className="flex flex-col gap-4">
          {searchTerm.trim() && (
            <div className="text-sm font-semibold text-gray-500 mb-2 px-2 tracking-wide uppercase">
              Found {filteredQuestions.length} {filteredQuestions.length === 100 ? "or more " : ""}results
            </div>
          )}

          <AnimatePresence>
            {searchTerm.trim() && filteredQuestions.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search terms or keywords.</p>
              </motion.div>
            )}

            {filteredQuestions.map((q, idx) => {
              const uKey = `${q.examSource}-${q.id}-${idx}`;
              const isExpanded = expandedId === uKey;

              return (
                <motion.div
                  key={uKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div 
                    onClick={() => toggleExpand(uKey)}
                    className="p-6 cursor-pointer flex gap-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-1 bg-royal-azure/10 text-royal-azure text-xs font-bold rounded-md tracking-wide">
                          {q.examSource}
                        </span>
                        {q.multipleChoice && (
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Multiple Choice</span>
                        )}
                      </div>
                      <h3 className="text-gray-900 font-medium leading-relaxed">
                        {q.text}
                      </h3>
                    </div>
                    
                    <div className="pt-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-royal-azure text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-100 bg-gray-50/30 overflow-hidden"
                      >
                        <div className="p-6 flex flex-col gap-4">
                          
                          {/* Options if available */}
                          {q.options && q.options.length > 0 && (
                            <div className="flex flex-col gap-2">
                              {q.options.map((opt, oIdx) => {
                                const isCorrect = q.correctAnswers.includes(opt);
                                return (
                                  <div 
                                    key={oIdx} 
                                    className={`p-4 rounded-xl border flex gap-3 ${isCorrect ? 'bg-radioactive-grass/10 border-radioactive-grass/30' : 'bg-white border-gray-200'}`}
                                  >
                                    <div className="mt-0.5 flex-shrink-0">
                                      {isCorrect ? (
                                        <div className="w-5 h-5 rounded-full bg-radioactive-grass text-black flex items-center justify-center shadow-sm">
                                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                      ) : (
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                                      )}
                                    </div>
                                    <div className={`font-medium ${isCorrect ? 'text-gray-900' : 'text-gray-600'}`}>
                                      {opt}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          )}

                          {(!q.options || q.options.length === 0) && (
                            <div className="bg-radioactive-grass/10 border border-radioactive-grass/30 p-4 rounded-xl break-words">
                              <span className="font-bold text-gray-900 block mb-1 text-sm uppercase tracking-wide">Correct Answer(s):</span>
                              <div className="flex flex-col gap-1">
                                {q.correctAnswers.map((ans, aIdx) => (
                                  <span key={aIdx} className="text-gray-800 font-medium font-mono text-sm bg-white border shadow-sm px-3 py-1.5 rounded truncate inline-block">
                                    {ans}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
