/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowCircleRight, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const skillIcons = {
    "Figma": "/figma.png",
    "ReactJS": "/reactjs.png",
    "Python": "/python.png",
    "MongoDB": "/mongodb.png",
    "NodeJS": "/nodejs.png",
    "Javascript": "/javascript.png",
    "JavaScript": "/javascript.png",
    "CSS": "/css.png",
    "HTML": "/html.png",
    "Machine Learning": "/vite.svg",
    "Tensorflow": "/pyqt.png",
    "Django": "/django.png",
    "PostgreSQL": "/mysql.png",
    "MySQL": "/mysql.png",
    "Java": "/java.png",
    "Spring Boot": "react.png",
    "C": "/c.png",
    "C++": "/cpp.png",
    "Data Structures": "/vite.svg",
    "Flutter": "/flutter.png",
    "Dart": "/dart.png",
    "Firebase": "/react.png"
};

const getRandomSkills = (skills) => {
    const shuffled = [...skills].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(skills.length, Math.floor(Math.random() * 3) + 3));
};

const CommunityCard = ({ image, name, skills }) => {
    const [like, setLike] = useState(false);
    const [randomSkills] = useState(getRandomSkills(skills));

    const handleLike = () => setLike(!like);

    return (
        <div className="relative cursor-pointer bg-white shadow-md rounded-2xl p-4 w-[190px] h-[280px] text-center hover:scale-105 duration-300 transition-transform">
            <div className="absolute w-fit right-4" onClick={handleLike}>
                {like ? <FaHeart size={"20px"} color="red" /> : <FaRegHeart size={"18px"} color="gray" />}
            </div>
            <div className="rounded-full">
                <img
                    src={image ? `http://localhost:5000${image}` : 'user.png'}
                    alt={name}
                    className="w-28 h-28 mx-auto select-none pointer-events-none rounded-full border-4 border-gray-300"
                    draggable="false"
                />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-700 select-none">{name}</h3>

            {/* Skills */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center mb-1">
                    {randomSkills.map((skill, index) => (
                        <div key={index} className="w-6 h-6 border border-gray-300 rounded-full bg-gray-100 -ml-2 flex items-center justify-center">
                            <img src={skillIcons[skill] || "/default.png"} alt={skill} className="w-5 h-5 object-cover" />
                        </div>
                    ))}
                    <div className="w-6 h-6 border-gray-300 border p-0.5 text-xs font-semibold flex items-center justify-center -ml-2 rounded-full bg-gray-200">
                        +{Math.floor(Math.random() * 5) + 1}
                    </div>
                </div>
            </div>

            {/* Rating & Profile Button */}
            <div className="flex justify-between text-yellow-500">
                <div className="text-sm bottom-4 absolute rounded-xl border-2 px-2 flex gap-1 items-center justify-center">
                    <FaStar size={"15px"} />
                    4.5
                </div>
                <div className="right-4 bottom-4 absolute cursor-pointer">
                    <FaArrowCircleRight size={"23px"} color="gray" />
                </div>
            </div>
        </div>
    );
};

export default CommunityCard;
