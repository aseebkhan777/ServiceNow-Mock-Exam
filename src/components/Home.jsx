import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [examType, setExamType] = useState("HRSD"); // default exam type

  const handleExamChange = (event) => {
    setExamType(event.target.value);
  };
  let dateTime = new Date();
  let day = dateTime.getDate(); // Corrected to get the day of the month
  let month = dateTime.getMonth();
  let year = dateTime.getFullYear();
  let issuedOn = `${day}-${
    month + 1
  }-${year}`;
  const startQuiz = () => {
    if (name.trim() === "") {
      alert("Please enter your name to proceed.");
      return;
    }
    window.sessionStorage.setItem("cert", examType);
    window.sessionStorage.setItem("per", name);
    window.sessionStorage.setItem("issued", issuedOn);
    navigate("/quiz", { state: { examType } });
  };

  return (
    <div className="text-center p-6 bg-white rounded shadow-md md:w-[550px] min-h-[70vh] gap-2 flex flex-col justify-center items-center">
      <div className="flex justify-center mb-4 w-full">
        <img src=".\..\logo-new.svg" className="h-[100px] w-auto" alt="" />
      </div>
      <h1 className="text-3xl font-semibold mb-2">
        Welcome to ServiceNow Mock Test
      </h1>
      <span className="mb-4 text-lg">
        Test yourself before you appear for the actual ServiceNow exam.
      </span>
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <div className="w-full">
          <h1 className="mb-1 text-2xl font-semibold text-center">
            Enter Your Name
          </h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />
        </div>
        <div className="text-2xl font-semibold mb-1 text-center w-full">
          Select Your Exam
        </div>
        <select
          value={examType}
          onChange={handleExamChange}
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="HRSD">HRSD</option>
          <option value="SPM">SPM</option>
          <option value="ITSM">ITSM</option>
          <option value="ITOM">ITOM</option>
          <option value="CSA">CSA</option>
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
