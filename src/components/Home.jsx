import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [examType, setExamType] = useState("HRSD"); // default exam type

  const handleExamChange = (event) => {
    setExamType(event.target.value);
  };

  const startQuiz = () => {
    navigate("/quiz", { state: { examType } });
  };

  return (
    <div className="text-center p-6 bg-white rounded shadow-md  flex flex-col">
      <h1 className="text-2xl font-semibold mb-4">Select Your Exam</h1>
      <select value={examType} onChange={handleExamChange} className="mb-4 p-2 border rounded">
        <option value="HRSD">HRSD</option>
        <option value="questions">SPM</option>
      </select>
      <button
        onClick={startQuiz}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Let's Go
      </button>
    </div>
  );
};

export default Home;
