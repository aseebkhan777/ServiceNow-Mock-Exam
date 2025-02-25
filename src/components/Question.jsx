import React from "react";

const Question = ({ question, selectedOption, onSelectOption, index }) => {
  const handleOptionChange = (option) => {
    if (question.multipleChoice) {
      const currentIndex = selectedOption ? selectedOption.indexOf(option) : -1;
      const newSelectedOptions = [...(selectedOption || [])];

      if (currentIndex === -1) {
        newSelectedOptions.push(option);
      } else {
        newSelectedOptions.splice(currentIndex, 1);
      }

      onSelectOption(question.id, newSelectedOptions);
    } else {
      onSelectOption(question.id, option);
    }
  };

  return (
    <div className="mb-4 text-left">
      <h3 className="text-lg font-semibold">
        {index + 1}. {question.text}
      </h3>
      <div className="mt-2">
        {question.options.map((option) => (
          <label key={option} className="block">
            <input
              type={question.multipleChoice ? "checkbox" : "radio"}
              value={option}
              checked={
                question.multipleChoice
                  ? selectedOption && selectedOption.includes(option)
                  : selectedOption === option
              }
              onChange={() => handleOptionChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
