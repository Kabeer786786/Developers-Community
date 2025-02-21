import { useState } from 'react';
import { FaArrowLeft, FaGoogle, FaLock, FaUser, FaUserLock } from 'react-icons/fa';

export default function AuthContainer() {

  let handlePrivacy = () => {

  }
   
  let handleTerms = () => {

  }

  let handleSignupContinue = () => {
    document.getElementById('signup_part1').style.display = 'none';
    document.getElementById('signup_part2').style.display = 'block';
  }

  let handleSubmitSignup = () => {

  }

  let handleSubmitLogin = () => {

  }

  let changeToSignup = () => {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup_part2').style.display = 'none';
    document.getElementById('signup_part1').style.display = 'block';
  }

  let changeToLogin = () => {
    document.getElementById('signup_part1').style.display = 'none';
    document.getElementById('signup_part2').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  }

  let handleBack = () => {
    window.location.href = "/";
  }

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading='lazy' alt="A woman smiling while looking at a tablet" className="absolute w-full h-full object-cover" />
      <div className="flex w-3/4 h-full">
        <div className="absolute top-8 left-8">
          <FaArrowLeft  color='white' className='w-20 h-10 bg-gray-900/60 p-2 border-2 border-purple-400 rounded-xl shadow-2xl cursor-pointer' size={'28px'} onClick={handleBack}/>
        </div>
        <div className="absolute bottom-16 left-8 w-1/2 text-white">
          <h1 className="text-4xl font-semibold">Join <span className="text-yellow-400">8 Million</span> Businesses that Trust Razorpay to Supercharge their Business</h1>
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center">
              <i className="fas fa-check-circle mr-2"></i>
              <span>100+ Payment Methods</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle mr-2"></i>
              <span>Easy Integration</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle mr-2"></i>
              <span>Powerful Dashboard</span>
            </div>
          </div>
        </div>

      </div>
      <div className="relative flex flex-wrap w-2/5 rounded-xl m-6  bg-gray-900/90 border-purple-400 shadow-lg border-2 text-white items-start justify-center pt-10 z-10">
        
        {/* Sign Up */}
        <div id='signup_part1' className="w-full max-w-md p-8 hidden">
          <div className="flex items-center justify-start mb-8">
            <img src="https://placehold.co/40x40" alt="Razorpay icon" className="w-10 h-10 mr-2 rounded-full" />
            <h2 className="text-xl font-semibold text-center">Welcome to <span className="text-purple-400 font-semibold text-2xl">GPREC - Colab</span></h2>
          </div>
          <h1 className="text-3xl font-semibold mb-6">Get started with your email or phone number</h1>
          <div className="flex justify-center items-center border-b-2  mb-10">
            <FaUser size={"20px"} />
            <input type="text" placeholder="Enter the email or phone number" className="w-full placeholder-gray-200 text-lg focus:outline-none  p-3 bg-transparent " />
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
          <FaLock size={"20px"}/>
          <input type="password" placeholder="Confirm Password" className="w-full placeholder-gray-200 text-lg focus:outline-none  p-3 bg-transparent " />
          </div>
          <div className="flex justify-center items-center mb-8 border-b-2 ">
          <FaUserLock size={"20px"} />
          <input type="text" placeholder="Enter the Password" className="w-full placeholder-gray-200 text-lg  focus:outline-none p-3  bg-transparent" />
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
            <h2 className="text-xl font-semibold text-center">Welcome to <span className="text-purple-400 font-semibold text-2xl">GPREC - Colab</span></h2>
          </div>
          <h1 className="text-3xl font-semibold mb-6">Get started with your email or phone number</h1>
          <div className="flex justify-center items-center border-b-2  mb-4">
          <FaUser size={"20px"}/>
          <input type="text" placeholder="Email or Phone Number" className="w-full placeholder-gray-200 text-lg focus:outline-none  p-3 bg-transparent " />
          </div>
          <div className="flex justify-center items-center mb-8 border-b-2 ">
          <FaLock size={"20px"} />
          <input type="password" placeholder="Enter the Password" className="w-full placeholder-gray-200 text-lg  focus:outline-none p-3  bg-transparent" />
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
