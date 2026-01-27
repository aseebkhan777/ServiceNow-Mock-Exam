import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

// Helper to generate elliptical orbit keyframes
const generateOrbit = (startAngle, radiusX, radiusY, steps = 60) => {
  const x = [];
  const y = [];
  const cx = 100; // Head Center X
  const cy = 60;  // Forehead Y

  for (let i = 0; i <= steps; i++) {
    const angle = (startAngle + (i / steps) * 360) * (Math.PI / 180);
    x.push(cx + radiusX * Math.cos(angle));
    y.push(cy + radiusY * Math.sin(angle));
  }
  return { x, y };
};

function Login() {
  const navigate = useNavigate();
  const hardcodedUsername = "servicenow";
  const hardcodedPassword = "enablenow@123";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Animation States
  const [activeField, setActiveField] = useState(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [loginState, setLoginState] = useState("idle");
  const [isDizzy, setIsDizzy] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (activeField || isDizzy) return; // Stop tracking if dizzy
      const x = (e.clientX / window.innerWidth) * 30 - 15;
      const y = (e.clientY / window.innerHeight) * 30 - 15;
      setEyePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeField, isDizzy]);

  // Typing/Focus Tracking
  useEffect(() => {
    if (activeField === 'username') {
      const length = Math.min(username.length, 30);
      const x = 15 + (length / 30) * 15;
      const y = 5;
      setEyePosition({ x, y });
    } else if (activeField === 'password') {
      setEyePosition({ x: 0, y: -5 });
    }
  }, [username, activeField]);

  const checkCredentials = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setLoginState("success");
      sessionStorage.setItem("isAuthenticated", "true"); // Set Auth Flag
      setTimeout(() => navigate("/home"), 1500);
    } else {
      setLoginState("error");
      setTimeout(() => setLoginState("idle"), 2000);
    }
  };

  const handleAvatarClick = () => {
    if (isDizzy) return;
    setIsDizzy(true);
    setTimeout(() => setIsDizzy(false), 3000);
  };

  // Arm Geometry Calculation
  // We use direct coordinate interpolation to ensure arms stay attached to shoulders.
  // 0 = Resting (Hands down), 1 = Covering (Hands on eyes)
  const armState = activeField === 'password' ? 1 : 0;

  return (
    <div className="w-full h-screen flex bg-white font-sans overflow-hidden">

      {/* Left Side: Interactive Avatar & Branding */}
      <div className="hidden md:flex w-5/12 bg-[#F3F6FD] relative flex-col items-center justify-center p-12 overflow-visible z-10">

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-royal-azure/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-royal-azure/10 rounded-full blur-[60px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Animated Avatar */}
          <div
            className="w-64 h-64 mb-10 overflow-visible relative flex items-center justify-center cursor-pointer"
            onClick={handleAvatarClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-2xl overflow-visible">
              <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" style={{ stopColor: '#4768E5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2953D7', stopOpacity: 1 }} />
                </radialGradient>
              </defs>

              {/* Group for Head/Body Bobbing */}
              <motion.g
                animate={{
                  y: loginState === 'success' ? -5 : 0,
                  rotate: isDizzy ? [0, 5, -5, 5, 0] : (loginState === 'error' ? [0, -2, 2, -2, 2, 0] : (isHovered ? [0, 1, -1, 0] : 0))
                }}
                transition={{ type: "spring", stiffness: 200, loop: isDizzy ? Infinity : 0, duration: isDizzy ? 0.5 : 0.3 }}
              >
                {/* NECK */}
                <path
                  d="M85 130 L115 130 L115 160 L85 160 Z"
                  fill="#E5CAA9"
                />

                {/* SHIRT/BODY */}
                <path
                  d="M40 160 C40 120, 160 120, 160 160 L160 220 L40 220 Z"
                  fill="url(#grad1)"
                />

                {/* HEAD */}
                <circle cx="100" cy="90" r="50" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />

                {/* EYES */}
                <g>
                  {/* Left Eye */}
                  <g>
                    <motion.ellipse
                      cx="85" cy="85"
                      rx={isHovered && !isDizzy ? 6 : 6}
                      ry={isHovered && !isDizzy ? 13 : 9}
                      fill="#111111"
                      animate={!isDizzy ? { x: eyePosition.x, y: eyePosition.y } : { x: 0, y: 0 }}
                      transition={isDizzy ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 15 }}
                    />
                    {/* Left Spiral / Highlight */}
                    {isDizzy ? (
                      <motion.g
                        initial={{ x: 85, y: 85, rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <path
                          d="M0 0 m0 0 l0 0 c0.5 0.5 1 0.5 1.5 0 s1 -1 1 -2 s-1.5 -2.5 -2.5 -2.5 s-3.5 1.5 -3.5 3.5 s2.5 4.5 5 4.5 s5.5 -3 5.5 -6"
                          stroke="white"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </motion.g>
                    ) : (
                      <motion.circle cx="87" cy="81" r="2.5" fill="white" animate={{ x: eyePosition.x, y: eyePosition.y }} />
                    )}
                  </g>

                  {/* Right Eye */}
                  <g>
                    <motion.ellipse
                      cx="115" cy="85"
                      rx={isHovered && !isDizzy ? 6 : 6}
                      ry={isHovered && !isDizzy ? 13 : 9}
                      fill="#111111"
                      animate={!isDizzy ? { x: eyePosition.x, y: eyePosition.y } : { x: 0, y: 0 }}
                      transition={isDizzy ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 15 }}
                    />
                    {/* Right Spiral / Highlight */}
                    {isDizzy ? (
                      <motion.g
                        initial={{ x: 115, y: 85, rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <path
                          d="M0 0 m0 0 l0 0 c0.5 0.5 1 0.5 1.5 0 s1 -1 1 -2 s-1.5 -2.5 -2.5 -2.5 s-3.5 1.5 -3.5 3.5 s2.5 4.5 5 4.5 s5.5 -3 5.5 -6"
                          stroke="white"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </motion.g>
                    ) : (
                      <motion.circle cx="117" cy="81" r="2.5" fill="white" animate={{ x: eyePosition.x, y: eyePosition.y }} />
                    )}
                  </g>
                </g>

                {/* MOUTH */}
                <motion.path
                  d={
                    isDizzy ? "M90 120 Q100 110 110 120" : // Wavy/Confused
                      (loginState === 'success' ? "M85 110 Q100 125 115 110" :
                        (loginState === 'error' ? "M85 120 Q100 105 115 120" :
                          (isHovered ? "M93 115 Q100 135 107 115 Q100 105 93 115" : "M95 115 Q100 115 105 115")))
                  }
                  fill={isHovered && !isDizzy ? "#111111" : "transparent"}
                  stroke="#111111"
                  strokeWidth={isHovered && !isDizzy ? "0" : "3"}
                  strokeLinecap="round"
                  animate={loginState}
                />

                {/* Blush for success */}
                {loginState === 'success' && (
                  <>
                    <circle cx="75" cy="100" r="6" fill="#FFB6C1" opacity="0.6" />
                    <circle cx="125" cy="100" r="6" fill="#FFB6C1" opacity="0.6" />
                  </>
                )}

                {/* Scared Sweat Drop */}
                {isHovered && !isDizzy && (
                  <motion.path
                    d="M130 70 Q135 60 130 50 Q125 60 130 70"
                    fill="#BAE6FD"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  />
                )}
              </motion.g>

              {/* SPINNING STARS HALO (Dizzy State) - Horizontal Orbit */}
              {isDizzy && (
                <g>
                  {/* Star 1 - Start at 0 deg */}
                  <motion.path
                    d="M0 -8 L2 -2 L8 -2 L3 2 L5 8 L0 5 L-5 8 L-3 2 L-8 -2 L-2 -2 Z"
                    fill="#FFD700"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: generateOrbit(0, 70, 15).x,
                      y: generateOrbit(0, 70, 15).y,
                      scale: [0.8, 1, 0.8] // Pulse scale for depth effect
                    }}
                    transition={{
                      x: { repeat: Infinity, duration: 1.5, ease: "linear" },
                      y: { repeat: Infinity, duration: 1.5, ease: "linear" },
                      scale: { repeat: Infinity, duration: 1.5, ease: "linear" }
                    }}
                  />

                  {/* Star 2 - Start at 120 deg */}
                  <motion.path
                    d="M0 -8 L2 -2 L8 -2 L3 2 L5 8 L0 5 L-5 8 L-3 2 L-8 -2 L-2 -2 Z"
                    fill="#FFD700"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: generateOrbit(120, 70, 15).x,
                      y: generateOrbit(120, 70, 15).y,
                      scale: [0.8, 0.8, 1]
                    }}
                    transition={{
                      x: { repeat: Infinity, duration: 1.5, ease: "linear" },
                      y: { repeat: Infinity, duration: 1.5, ease: "linear" },
                      scale: { repeat: Infinity, duration: 1.5, ease: "linear" }
                    }}
                  />

                  {/* Star 3 - Start at 240 deg */}
                  <motion.path
                    d="M0 -8 L2 -2 L8 -2 L3 2 L5 8 L0 5 L-5 8 L-3 2 L-8 -2 L-2 -2 Z"
                    fill="#FFD700"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: generateOrbit(240, 70, 15).x,
                      y: generateOrbit(240, 70, 15).y,
                      scale: [1, 0.8, 0.8]
                    }}
                    transition={{
                      x: { repeat: Infinity, duration: 1.5, ease: "linear" },
                      y: { repeat: Infinity, duration: 1.5, ease: "linear" },
                      scale: { repeat: Infinity, duration: 1.5, ease: "linear" }
                    }}
                  />
                </g>
              )}

              {/* COORDINATE BASED ARMS (Fixes detached issue) */}
              {/* Left Arm: S(42,158) -> Hand (Armpit position) */}
              {/* Resting Hand: (20, 230), Covering Hand: (85, 80) */}
              <Arm
                shoulder={{ x: 42, y: 158 }}
                resting={{ x: 20, y: 230 }}
                active={isDizzy ? { x: 30, y: 200 } : { x: 85, y: 80 }} // Drop arms if dizzy
                isActive={activeField === 'password' && loginState !== 'success'}
                isScared={isHovered && !isDizzy} // Pass scared state
              />

              {/* Right Arm: S(158,158) -> Hand (Armpit position) */}
              {/* Resting Hand: (180, 230), Covering Hand: (115, 80) */}
              <Arm
                shoulder={{ x: 158, y: 158 }}
                resting={{ x: 180, y: 230 }}
                active={isDizzy ? { x: 170, y: 200 } : { x: 115, y: 80 }} // Drop arms if dizzy
                isActive={activeField === 'password' && loginState !== 'success'}
                isScared={isHovered && !isDizzy} // Pass scared state
              />

            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">ServiceNow<span className="text-royal-azure">.Prep</span></h1>
          <p className="text-gray-500 max-w-xs text-lg">Your adaptive assessment companion.</p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full md:w-7/12 flex items-center justify-center p-8 relative">

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-500 mt-2">Enter your credentials to access the dashboard.</p>
          </div>

          <form onSubmit={checkCredentials} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-royal-azure uppercase tracking-widest mb-2 ml-1">Username</label>
              <input
                className="w-full h-14 px-5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-royal-azure focus:ring-4 focus:ring-royal-azure/10 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                type="text"
                placeholder="e.g. servicenow"
                value={username}
                onFocus={() => setActiveField('username')}
                onBlur={() => setActiveField(null)}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-royal-azure uppercase tracking-widest mb-2 ml-1">Password</label>
              <input
                className="w-full h-14 px-5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-royal-azure focus:ring-4 focus:ring-royal-azure/10 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                type="password"
                placeholder="••••••••"
                value={password}
                onFocus={() => setActiveField('password')}
                onBlur={() => setActiveField(null)}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full h-14 rounded-xl font-bold text-lg text-white shadow-lg transition-all ${loginState === 'success'
                ? 'bg-radioactive-grass shadow-radioactive-grass/30'
                : (loginState === 'error' ? 'bg-red-500 shadow-red-500/30' : 'bg-royal-azure shadow-royal-azure/30 hover:bg-royal-azure-light')
                }`}
            >
              {loginState === 'success' ? 'Authenticated' : (loginState === 'error' ? 'Access Denied' : 'Sign In')}
            </motion.button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400">
            © 2025 EnableNow Inc.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper Component for Robust Arm Animation
const Arm = ({ shoulder, resting, active, isActive, isScared }) => {
  return (
    <motion.g
      animate={isScared ? { x: [0, 1, -1, 0], y: [0, 1, -1, 0] } : {}}
      transition={{ repeat: Infinity, duration: 0.2 }}
    >
      {/* Hand Coordinates calculated for precise eye coverage Y=80 (Eye Y=85 - 5 offset) */}
      <motion.line
        x1={shoulder.x}
        y1={shoulder.y}
        initial={{ x2: resting.x, y2: resting.y }}
        animate={{ x2: isActive ? active.x : resting.x, y2: isActive ? active.y : resting.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        stroke="#111111"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <motion.circle
        initial={{ cx: resting.x, cy: resting.y }}
        animate={{ cx: isActive ? active.x : resting.x, cy: isActive ? active.y : resting.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        r="14"
        fill="#111111"
      />
    </motion.g>
  )
}

export default Login;
