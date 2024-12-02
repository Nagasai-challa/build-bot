import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(""); 
  const [isSuccess, setIsSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setIsSuccess(false);

    try {
      const response = await axios.post("https://contact-management-system-86q5.onrender.com/login", formData);
      
      if (response.status === 200) {
        const { token } = response.data;
        
        
        localStorage.setItem("token", token);
        
       
        setMessage("Login successful!");
        setIsSuccess(true);
        navigate("/")
        console.log("Token received:", token);
      }
    } catch (error) {
      
      if (error.response) {
        setMessage(error.response.data.message || "Login failed.");
      } else {
        setMessage("An error occurred. Please try again.");
      }
      setIsSuccess(false);
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form 
          className="mt-8 space-y-6" 
          onSubmit={handleSubmit}
        >
          {message && (
            <div 
              className={`
                text-center p-3 rounded-md 
                ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
              `}
            >
              {message}
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                           border-gray-300 placeholder-gray-500 text-gray-900 
                           rounded-t-md focus:outline-none focus:ring-indigo-500 
                           focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                           border-gray-300 placeholder-gray-500 text-gray-900 
                           rounded-b-md focus:outline-none focus:ring-indigo-500 
                           focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 
                         border border-transparent text-sm font-medium rounded-md 
                         text-white bg-indigo-600 hover:bg-indigo-700 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;