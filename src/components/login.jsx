import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const hardcodedUsername = "servicenow";
  const hardcodedPassword = "enablenow@123";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkCredentials = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate("/home");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="p-6 rounded-md shadow-lg bg-gray-100 backdrop:blur-md w-[400px] h-fit flex flex-col gap-4">
      <div className="flex justify-center items-center mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          className="h-[100px]"
          alt="Logo"
        />
      </div>
      <div className="w-full text-center flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-gray-800">
          Login before you start
        </h1>
      </div>
      <form onSubmit={checkCredentials} className="flex flex-col gap-6">
        <div className="w-full">
          <input
            className="w-full border-2 border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative">
          <input
            className="w-full border-2 border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-green-500 pr-10"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <FaEyeSlash size={20} className="text-gray-400" />
            ) : (
              <FaEye size={20} className="text-gray-400" />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 text-lg bg-blue-500 hover:bg-blue-600 rounded-md text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
