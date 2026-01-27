import React from "react";
import { motion } from "framer-motion";

const Question = ({ question, selectedOption, onSelectOption, index }) => {
  const handleOptionChange = (option) => {
    if (question.multipleChoice) {
      const currentSelection = selectedOption || [];
      const newSelection = currentSelection.includes(option)
        ? currentSelection.filter((item) => item !== option)
        : [...currentSelection, option];
      onSelectOption(question.id, newSelection);
    } else {
      onSelectOption(question.id, option);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
        {question.text}
      </h2>

      {question.multipleChoice && (
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-lg bg-royal-azure/10 text-royal-azure text-xs font-bold uppercase tracking-wider border border-royal-azure/20">
          Multiple Choice
        </div>
      )}

      <div className="space-y-4">
        {question.options.map((option) => {
          const isSelected = question.multipleChoice
            ? selectedOption && selectedOption.includes(option)
            : selectedOption === option;

          return (
            <motion.label
              key={option}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(249, 250, 251, 1)" }}
              whileTap={{ scale: 0.99 }}
              className={`group flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${isSelected
                ? "border-royal-azure bg-royal-azure/5 shadow-md shadow-royal-azure/5"
                : "border-gray-100 bg-white hover:border-gray-200 shadow-sm"
                }`}
            >
              <div className={`relative flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${isSelected ? "border-royal-azure bg-royal-azure" : "border-gray-300 bg-transparent group-hover:border-gray-400"
                }`}>
                {isSelected && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <input
                type={question.multipleChoice ? "checkbox" : "radio"}
                value={option}
                checked={!!isSelected}
                onChange={() => handleOptionChange(option)}
                className="hidden" // Hidden native input
              />

              <span className={`text-lg font-medium transition-colors ${isSelected ? "text-royal-azure" : "text-gray-600 group-hover:text-gray-900"}`}>
                {option}
              </span>
            </motion.label>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
