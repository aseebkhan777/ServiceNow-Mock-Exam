import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const passingScore = 70;
  const isPassed = state.scorePercentage >= passingScore;

  return (
    <div className="text-center p-6 bg-white rounded shadow-md max-w-2xl w-full mx-auto">
      <h2
        className={`text-2xl font-semibold ${
          isPassed ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPassed ? "Passed!" : "Failed"}
      </h2>
      <p className="text-xl">Your score: {state.scorePercentage.toFixed(2)}%</p>
      <h2 className="text-lg font-semibold mb-2">Question Review</h2>
      {state.results.map(
        ({ id, question, userAnswer, correctAnswers, isCorrect }) => (
          <div key={id} className="mb-4 border p-4 rounded">
            <h3 className="font-semibold">{question}</h3>
            <p>
              <strong>Your Answer:</strong>{" "}
              {Array.isArray(userAnswer)
                ? userAnswer.join(", ")
                : userAnswer || "None"}
            </p>
            <p>
              <strong>Correct Answer(s):</strong> {correctAnswers.join(", ")}
            </p>
            <p
              className={`text-sm ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect ? "Correct" : "Incorrect"}
            </p>
          </div>
        )
      )}
      <div className="flex gap-2 w-full mt-4">
        <button
          onClick={() => navigate("/home")}
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
        {isPassed && (
          <button
            onClick={() => navigate("/certificate")}
            className="flex-1 px-3 text-lg bg-blue-500 hover:bg-blue-600 rounded-md text-white"
          >
            Certificate
          </button>
        )}
      </div>
    </div>
  );
};

export default Result;
