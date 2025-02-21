import { useState, useEffect } from 'react';
import { HiHome, HiChat, HiBriefcase } from "react-icons/hi";
import { FaUsers, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Top Navbar for Desktop */}
            {!isMobile && (
                <motion.header className="bg-white fixed top-0 left-0 w-full shadow-md z-50 flex justify-between px-10 py-2"
                    initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div className="flex gap-6 w-full">
                    <div className="text-gray-600 flex items-center text-2xl pr-6 gap-1 font-semibold">
                        <img src="gpreclogo.png" alt="logo" className='h-10' /> Colab
                    </div>
                    <div className="relative flex m-auto h-fit w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-300/30 rounded-md py-1.5 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-purple-500 min-w-[500px]"
                        />
                        <svg
                            className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    </div>
                    <div className="grid grid-cols-7 gap-11 items-center">
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/home'}>
                            <HiHome className="w-6 h-6" />
                            <span className='text-xs'>Home</span>
                        </button>
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/forums'}>
                            <HiChatBubbleLeftRight className="w-6 h-6" />
                            <span className='text-xs'>Forums</span>
                        </button>
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/projects'}>
                            <HiBriefcase className="w-6 h-6" />
                            <span className='text-xs'>Projects</span>
                        </button>
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/community'}>
                            <FaUsers className="w-6 h-6" />
                            <span className='text-xs'>Community</span>
                        </button>
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/messages'}>
                            <HiChat className="w-6 h-6" />
                            <span className='text-xs'>Messaging</span>
                        </button>
                        <button className="relative text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/notifications'}>
                            <MdNotifications className="w-6 h-6" />
                            <span className='text-xs'>Notifications</span>
                            <span className='absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] pt-0.5 pr-0.5 pl-0.5'>
                                3
                            </span>
                        </button>
                        <button
                            onClick={() => { setIsDropdownOpen(!isDropdownOpen); window.location.href = '/profile'; }}
                            className="flex flex-col items-center hover:text-blue-600 transition-colors"
                        >
                            <FaUserCircle className="w-8 h-8 text-gray-600" />
                            <span className='text-xs flex items-center gap-0.5'>
                                Me <FaCaretDown className='w-4 h-4' />
                            </span>
                        </button>
                    </div>
                </motion.header>
            )}

            {/* Mobile Navbar */}
            {isMobile && (
                <>
                    {/* Top Search Bar */}
                    <motion.div className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-4 py-2.5 z-50"
                        initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="flex gap-3 items-center w-full">
                            <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/profile'}>
                                <FaUserCircle className="w-8 h-8" />
                            </button>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-gray-100 rounded-md py-1.5 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-purple-500 w-full"
                                />
                                <svg
                                    className="w-6 h-6 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>
                            <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/messages'}>
                                <IoChatboxEllipses className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Bottom Navbar */}
                    <motion.nav className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md flex justify-around py-2.5 px-1 z-50"
                        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <button className="text-gray-500  flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/home'}>
                            <HiHome className="w-6 h-6" />
                            <span className='text-xs text-gray-400'>Home</span>

                        </button>
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/community'}>
                            <FaUsers className="w-6 h-6" />
                            <span className='text-xs text-gray-400'>Community</span>

                        </button>
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/forums'}>
                            <HiChatBubbleLeftRight className="w-6 h-6" />
                            <span className='text-xs text-gray-400'>Forums</span>
                        </button>
                        <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/projects'}>
                            <HiBriefcase className="w-6 h-6" />
                            <span className='text-xs text-gray-400'>Projects</span>

                        </button>
                        <button className="relative text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/notifications'}>
                            <MdNotifications className="w-6 h-6" />
                            <span className='text-xs text-gray-400'>Notifications</span>
                            <span className='absolute top-0 right-4 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] pt-0.5 pr-0.5 pl-0.5'>
                                3
                            </span>
                        </button>
                        {/* <button className="text-gray-500 flex flex-col items-center hover:text-blue-600 transition-colors" onClick={() => window.location.href = '/profile'}>
                            <FaUserCircle className="w-6 h-6" />
                            <span className='text-xs'>Me</span>

                        </button> */}
                    </motion.nav>
                </>
            )}
        </>
    )
}
