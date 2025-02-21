import { useState } from "react";
export default function Faq() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const questions = [
        "Why choose The NXT?",
        "What's the typical budget?",
        "Do you accept retainers?",
        "What's the typical work period?",
        "Do you offer discounts?"
    ];

    return (
        <div className="container mx-auto py-12 px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="w-full md:w-1/2 space-y-4">
                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className="border border-purple-500 hover:border-orange-500 transition-colors duration-300 p-4 flex justify-between items-center"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span>{question}</span>
                            <i className={`fas fa-plus ${hoveredIndex === index ? 'text-orange-500' : 'text-white'}`}></i>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                    <h1 className="text-4xl font-bold mb-4">FAQ&apos;s.</h1>
                    <p className="text-gray-400 mb-2">Common questions we often receive—maybe the ones you have in mind.</p>
                    <p className="text-gray-400">Hopefully, you&apos;ll find your answers here. If not, no worries! Head to section below and drop us a message, don’t be shy!</p>
                </div>
            </div>
        </div>
    );
};
