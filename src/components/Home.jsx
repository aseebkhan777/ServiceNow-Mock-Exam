import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const exams = [
  { id: "HRSD", title: "HRSD", desc: "Human Resources Service Delivery", color: "bg-blue-500" },
  { id: "SPM", title: "SPM", desc: "Strategic Portfolio Management", color: "bg-purple-500" },
  { id: "ITSM", title: "ITSM", desc: "IT Service Management", color: "bg-indigo-500" },
  { id: "ITOM", title: "ITOM", desc: "IT Operations Management", color: "bg-teal-500" },
  { id: "CAD1", title: "CAD 1", desc: "Certified App Developer I", color: "bg-orange-500" },
  { id: "CAD2", title: "CAD 2", desc: "Certified App Developer II", color: "bg-orange-600" },
  { id: "CAD3", title: "CAD 3", desc: "Certified App Developer III", color: "bg-orange-700" },
  { id: "CSA1", title: "CSA 1", desc: "Start System Admin I", color: "bg-emerald-500" },
  { id: "CSA2", title: "CSA 2", desc: "System Admin II", color: "bg-emerald-600" },
  { id: "CSA3", title: "CSA 3", desc: "System Admin III", color: "bg-emerald-700" },
  { id: "CSA4", title: "CSA 4", desc: "System Admin IV", color: "bg-emerald-800" },
  { id: "CSA5", title: "CSA 5", desc: "System Admin V", color: "bg-emerald-900" },
  { id: "CSA6", title: "CSA 6", desc: "System Admin VI", color: "bg-green-900" },
  { id: "TEST", title: "TEST EXAM", desc: "Short 5-question verification test", color: "bg-gray-800" },
];

const Home = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const startQuiz = (examId) => {
    if (name.trim() === "") {
      document.getElementById("heroNameInput").focus();
      // Optional: Add a subtle shake or visual cue instead of alert
      return;
    }
    window.sessionStorage.setItem("per", name);
    navigate("/quiz", { state: { examType: examId } });
  };

  const filteredExams = exams.filter(e =>
    e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans text-gray-900 flex flex-col">

      {/* Header - Simplified */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm/50 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-royal-azure rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md shadow-royal-azure/20">
              S
            </div>
            <span className="text-lg font-bold tracking-tight">ServiceNow<span className="text-royal-azure">.Prep</span></span>
          </div>

          <div className="flex items-center gap-4">
            {/* User Profile / Status */}
            <div className="hidden sm:block text-sm font-medium text-gray-500">
              {name ? `Hello, ${name}` : 'Welcome'}
            </div>

            {/* Logout Button */}
            <button
              onClick={() => {
                sessionStorage.removeItem("isAuthenticated");
                sessionStorage.removeItem("per");
                navigate("/");
              }}
              className="text-sm font-bold text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
              title="Logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* Hero Section with Central Input */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-blue-50 shadow-xl shadow-blue-500/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-royal-azure/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              Master your <span className="text-royal-azure">ServiceNow</span><br />Certification today.
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-lg">
              Adaptive mock exams designed to get you exam-ready. Enter your name and pick a track to start simulating.
            </p>

            {/* Central Name Input */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                id="heroNameInput"
                type="text"
                placeholder="What should we call you?"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="flex-1 h-14 px-5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-royal-azure focus:ring-4 focus:ring-royal-azure/10 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400 shadow-sm"
              />
            </div>
          </div>

          {/* Illustration/Right Side */}
          <div className="relative z-10 hidden md:block">
            {/* Abstract card stack illustration could go here */}
            <div className="w-64 h-48 bg-gradient-to-br from-royal-azure to-royal-azure-lighter rounded-2xl shadow-2xl skew-y-3 rotate-3 opacity-90 flex items-center justify-center text-white font-bold text-2xl">
              Exams
            </div>
            <div className="absolute top-4 -right-4 w-64 h-48 bg-white border border-gray-100 rounded-2xl shadow-xl -skew-y-3 -rotate-3 -z-10" />
          </div>
        </section>

        {/* Filter & Grid Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Exams</h2>
              <p className="text-gray-500 text-sm mt-1">Select a module to begin testing</p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search exams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-royal-azure focus:border-royal-azure outline-none transition-all"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredExams.map((exam, idx) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-2xl border border-gray-100 p-6 cursor-pointer group hover:border-royal-azure/30 transition-all relative overflow-hidden shadow-sm"
                onClick={() => startQuiz(exam.id)}
              >
                {/* Interactive State: If name is empty, show lock/warning on hover? Optional. */}

                <div className={`w-12 h-12 ${exam.color} rounded-xl flex items-center justify-center text-white font-bold mb-4 shadow-md`}>
                  {exam.id.substring(0, 2)}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-royal-azure transition-colors">{exam.title}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{exam.desc}</p>

                <div className="flex items-center gap-2 text-sm font-semibold text-royal-azure group-hover:translate-x-1 transition-transform">
                  Start Assessment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredExams.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No exams found matching "{searchTerm}"</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Home;
