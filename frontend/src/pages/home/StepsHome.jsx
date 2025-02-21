import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { FaLockOpen, FaUpload, FaCartPlus, FaMoneyBill, FaLock, FaAddressCard } from "react-icons/fa"; // Importing icons

// Keyframes for line movement and border highlight
const growLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const highlightStep = keyframes`
  from {
    border-color: #cfd8dc;
    transform: scale(1);
  }
  to {
    border-color: #6366f1;
    transform: scale(1.05);
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: 1000px;
`;

const Step = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  border: 2px solid ${({ active }) => (active ? "#6366f1" : "#d1d5db")};
  border-radius: 50%;
  z-index:1;
  background-color: ${({ active }) => (active ? "#e0e7ff" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: ${({ active }) => (active ? "500" : "400")};
  color: ${({ active }) => (active ? "#6366f1" : "#607d8b")};
  ${({ active }) =>
    active &&
    css`
      animation: ${highlightStep} 0.6s ease-out forwards;
    `}
`;

const Line = styled.div`
  position: relative;
  flex-grow: 1;
  height: 2px;
  background-color: #d1d5db;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: ${({ active }) => (active ? "100%" : "0")};
    background-color: #6366f1;
    ${({ active }) =>
    active &&
    css`
        animation: ${growLine} 2s ease-out forwards;
      `}
  }
`;


const StepsHome = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % 4);
    }, 3000); // Move to the next step every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Define icons for each step
  const icons = [
    { icon: <FaLockOpen />, label: "Register and Login" },
    { icon: <FaUpload />, label: "Upload & Set Preferences" },
    { icon: <FaAddressCard />, label: "Add Shipping address" },
    { icon: <FaMoneyBill />, label: "Make Payment" },
  ];

  return (
    <div className="border-2 bg-gray-50 max-w-7xl pt-4 pb-4 rounded-xl m-auto ">
      <div className="pt-2">
        <h1 className="text-center md:text-2xl font-semibold text-gray-600">EASY STEPS TO GET PRINTS</h1>
      </div>
      <Container >
        {icons.map((icon, index) => (
          <React.Fragment key={index} >
            <Step active={currentStep === index}>
              <p className="absolute">{icon.icon}</p>
              <p className="absolute flex text-lg w-52 justify-center mt-28">{icon.label}</p>
            </Step>
            {index < icons.length - 1 && <Line active={currentStep > index} />}
          </React.Fragment>
        ))}
      </Container>
      <div className="flex pt-4 max-w-7xl">
        <marquee className="p-2 bg-indigo-100">
          <p className="text-center flex items-center gap-96 font-semibold text-gray-500">
            <span className="flex items-center gap-2"><FaLock color="#6366f1" />
            Your Files are Secure, After Printing Files will be Deleted</span>
            <span className="flex items-center gap-2"><FaLock color="#6366f1" />
            Your Files are Secure, After Printing Files will be Deleted</span>
            <span className="flex items-center gap-2"><FaLock color="#6366f1" />
            Your Files are Secure, After Printing Files will be Deleted</span>
            <span className="flex items-center gap-2"><FaLock color="#6366f1" />
            Your Files are Secure, After Printing Files will be Deleted</span>
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default StepsHome;
