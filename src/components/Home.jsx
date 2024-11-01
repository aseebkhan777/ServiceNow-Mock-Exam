import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">If you are Ready for the Exam</h1>
      <button
        onClick={() => navigate('/quiz')}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Try Me
      </button>
    </div>
  );
};

export default Home;
