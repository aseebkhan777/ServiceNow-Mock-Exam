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
    <div className="text-center p-6 bg-white rounded shadow-md md:w-[550px] h-[70vh] gap-2  flex flex-col justify-center items-center">
      <div className="flex justify-center mb-4 w-full">
        <img src=".\..\logo-new.svg" className="h-[100px] w-auto" alt="" />
      </div>
      <h1 className="text-3xl font-semibold mb-2">
        Welcome to ServiceNow Mock Test
      </h1>
      <span className="mb-4 text-lg">
        Test youself before you appear for the actual ServiceNow exam.
      </span>
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <div className="text-2xl font-semibold mb-1 text-center w-full">
          Select Your Exam
        </div>
        <select
          value={examType}
          onChange={handleExamChange}
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="HRSD">HRSD</option>
          <option value="questions">SPM</option>
          <option value="ITSM">ITSM</option>
          <option value="ITOM">ITOM</option>
        </select>
      </div>
      <button
        onClick={startQuiz}
        className="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Let's Go
      </button>
    </div>
  );
};

export default Home;
