/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaGoogle, FaLock, FaMailBulk, FaUser, FaUserLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function AuthContainer({ setIsAuthentic, handleLogin, setUserId }) {

  const [formData, setFormData] = useState({ email: "", password: "", username: "", confirmPassword: "" });
  const [loginData,setLoginData ] =  useState({ email:"", password : ""})
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }; 

  const handleSignupContinue = () => {
    if (formData.email.length === 0 || formData.username.length === 0) {
      alert('Please fill the required fields!');
      return;
    }
    document.getElementById("signup_part1").style.display = "none";
    document.getElementById("signup_part2").style.display = "block";
  };

  const handleSubmitSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);

      // Store token and userId
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      alert("Registration successful!");
      setIsAuthentic(true);
      handleLogin(res.data.token,res.data.userId);
      setUserId(res.data.userId);
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.msg || "Registration failed!");
    }
  };


  const navigate = useNavigate();  // Initialize the navigation function

  // const userId = localStorage.getItem("userId");
  // console.log("Logged-in User ID:", userId);

  const handleSubmitLogin = async () => {
    try {
      if (loginData.email.length === 0 || loginData.password.length === 0) {
        alert('Please fill the required fields!');
        return;
      }
      const res = await axios.post("http://localhost:5000/api/auth/login", loginData);

      // Store token and user ID
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId); // Store user ID

      alert("Login successful!");
      setIsAuthentic(true);
      handleLogin(res.data.token,res.data.userId);
      setUserId(res.data.userId);  // Set the user ID in state
      navigate("/");  // Redirect to home page
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed!");
    }
  };

  const changeToSignup = () => {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup_part2").style.display = "none";
    document.getElementById("signup_part1").style.display = "block";
  };

  const changeToLogin = () => {
    document.getElementById("signup_part1").style.display = "none";
    document.getElementById("signup_part2").style.display = "none";
    document.getElementById("login").style.display = "block";
  };

  let handleBack = () => {
    window.location.href = "/";
  }
  const handlePrivacy = () => {

  }
  const handleTerms = () => {

  }

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen">

      <img src="loginpagepic.png" loading='lazy' alt="A woman smiling while looking at a tablet" className="absolute w-full h-full object-cover" />
      <div className="flex w-3/4 h-full">
        <div className="absolute top-8 left-8">
          <FaArrowLeft color='white' className='w-20 h-10 bg-gray-900/70 p-2 border-2 border-purple-400 rounded-xl shadow-2xl cursor-pointer' size={'28px'} onClick={handleBack} />
        </div>
        <div className="absolute bottom-16 left-8 w-1/2 text-white">
          <h1 className="text-3xl font-semibold">Join <span className="text-yellow-400"> Us </span> to Code. Connect. Collaborate. 🚀 | Empowering developers to build, learn, and innovate together. 🔥💡</h1>
        </div>

      </div>
      <div className="relative flex flex-wrap w-2/5 rounded-xl m-6  bg-gray-900/60 border-purple-400 shadow-lg border-2 text-white items-start justify-center pt-10 z-10">

        {/* Sign Up */}
        <div id='signup_part1' className="w-full max-w-md p-8 hidden">
          <div className="flex items-center justify-start mb-8">
            <img src="https://placehold.co/40x40" alt="Razorpay icon" className="w-10 h-10 mr-2 rounded-full" />
            <h2 className="text-xl font-semibold text-center">Welcome to <span className="text-purple-400 font-semibold text-2xl">GPREC Colab</span></h2>
          </div>
          <h1 className="text-3xl font-semibold mb-6">Get started with your email or phone number</h1>
          <div className="flex justify-center items-center border-b-2  mb-4">
            <FaUser size={"20px"} />
            <input name="username" type="text" placeholder="Enter the Username" onChange={handleChange} className="w-full placeholder-gray-200 text-lg focus:outline-none  p-3 bg-transparent " required />
          </div>
          <div className="flex justify-center items-center border-b-2  mb-10">
            <FaMailBulk size={"20px"} />
            <input name="email" type="email" placeholder="Enter the email or phone number" onChange={handleChange} className="w-full placeholder-gray-200 text-lg focus:outline-none  p-3 bg-transparent " required />
          </div>
          <button onClick={handleSignupContinue} className="w-full bg-purple-500 hover:bg-purple-600 font-semibold text-white p-2 rounded-lg text-lg mb-4">Continue</button>
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-100">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full flex gap-3 items-center justify-center border border-gray-300 p-2 rounded-lg hover:backdrop-blur transition-blur duration-300">
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
          <p className="text-gray-200 text-center text-sm mt-4">By continuing you agree to our <button onClick={handlePrivacy} className="text-purple-400">privacy policy</button> and <button onClick={handleTerms} className="text-purple-400">terms.</button></p>
          <p className='absolute bottom-16 ml-20 mr-20'>Already have an Account? <button onClick={changeToLogin} className='text-purple-400'>Login</button></p>
        </div>

        {/* Password Creation */}
        <div id='signup_part2' className="w-full max-w-md p-8 hidden">
          <div className="flex items-center mb-6">
            <img src="https://placehold.co/40x40" alt="Razorpay icon" className="w-10 h-10 mr-2 rounded-full" />
          </div>
          <h1 className="text-3xl font-semibold mb-8">Create Password</h1>
          <div className="flex justify-center items-center border-b-2  mb-4">
            <FaLock size={"20px"} />
            <input  name='password' type="password" onChange={handleChange} placeholder="Enter the Password" className="w-full placeholder-gray-200 text-lg focus:outline-none  p-3 bg-transparent " required />
          </div>
          <div className="flex justify-center items-center mb-8 border-b-2 ">
            <FaUserLock size={"20px"} />
            <input name='confirmPassword' type="text" onChange={handleChange} placeholder="Confirm Password" className="w-full placeholder-gray-200 text-lg  focus:outline-none p-3  bg-transparent" required />
          </div>
          <button onClick={handleSubmitSignup} className="w-full bg-purple-500 text-white p-2 rounded-lg text-lg font-semibold mb-4 hover:bg-purple-600">Create Password</button>
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-200">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full flex gap-3 items-center justify-center border border-gray-300 p-2 rounded-lg hover:backdrop-blur transition-blur duration-300">
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
          <p className="text-gray-200 text-center text-sm mt-4">By continuing you agree to our <button onClick={handlePrivacy} className="text-purple-400">privacy policy</button> and <button onClick={handleTerms} className="text-purple-400">terms.</button></p>
          <p className='absolute bottom-16 ml-20 mr-20'>Already have an Account? <button onClick={changeToLogin} className='text-purple-400'>Login</button></p>
        </div>

        {/* Login */}
        <div id='login' className="w-full max-w-md p-8 ">
          <div className="flex items-center justify-start mb-6">
            <img src="https://placehold.co/40x40" alt="Razorpay icon" className="w-10 h-10 mr-2 rounded-full" />
            <h2 className="text-xl font-semibold text-center">Welcome to <span className="text-purple-400 font-semibold text-2xl">GPREC Colab</span></h2>
          </div>
          <h1 className="text-3xl font-semibold mb-6">Get started with your email or phone number</h1>
          <div className="flex justify-center items-center border-b-2  mb-4">
            <FaUser size={"20px"} />
            <input onChange={handleChangeLogin} name='email' type="email" placeholder="Email or User name" className="w-full placeholder-gray-200 text-lg focus:outline-none  p-3 bg-transparent " required />
          </div>
          <div className="flex justify-center items-center mb-8 border-b-2 ">
            <FaLock size={"20px"} />
            <input onChange={handleChangeLogin} name='password' type="password" placeholder="Enter the Password" className="w-full placeholder-gray-200 text-lg  focus:outline-none p-3  bg-transparent" required />
          </div>
          <button onClick={handleSubmitLogin} className="w-full bg-purple-500 text-white p-2 rounded-lg text-lg font-semibold mb-4 hover:bg-purple-600">Get Started</button>
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-200">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full flex gap-3 items-center justify-center border border-gray-300 p-2 rounded-lg hover:backdrop-blur transition-blur duration-300">
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
          <p className="text-gray-200 text-center text-sm mt-4">By continuing you agree to our <button onClick={handlePrivacy} className="text-purple-400">privacy policy</button> and <button onClick={handleTerms} className="text-purple-400">terms.</button></p>
          <p className='absolute bottom-16 ml-20 mr-20'>Don&apos;t have an Account? <button onClick={changeToSignup} className='text-purple-400'>Sign up</button></p>
        </div>

      </div>
    </div>
  );
}
