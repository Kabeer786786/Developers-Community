import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What services do you offer?",
            answer: "We offer a range of services including web development, app development, and digital marketing."
        },
        {
            question: "How can I contact you?",
            answer: "You can contact us via email at contact@yourbusiness.com or call us at (123) 456-7890."
        },
        {
            question: "What is your pricing model?",
            answer: "Our pricing depends on the project scope. Please get in touch for a custom quote."
        },
        {
            question: "What services do you offer?",
            answer: "We offer a range of services including web development, app development, and digital marketing."
        },
        {
            question: "How can I contact you?",
            answer: "You can contact us via email at contact@yourbusiness.com or call us at (123) 456-7890."
        },
        {
            question: "What is your pricing model?",
            answer: "Our pricing depends on the project scope. Please get in touch for a custom quote."
        },
        {
            question: "How can I contact you?",
            answer: "You can contact us via email at contact@yourbusiness.com or call us at (123) 456-7890."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-1/2 flex flex-col justify-start  text-gray-700 pl-8 pr-8 mt-14">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10 border-b-2 pb-3">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-2">
                {faqData.map((item, index) => (
                    <div key={index} className="border-b pb-5">
                        <div
                            className="flex justify-between items-center cursor-pointer text-base sm:text-lg font-semibold"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="flex-1 text-left pr-2">{item.question}</span>
                            <span className="text-xl sm:text-2xl flex items-center justify-center">
                                {activeIndex === index ? <FiMinus /> : <FiPlus />}
                            </span>
                        </div>
                        <div
                            className={`mt-2 text-gray-600 text-sm sm:text-base transition-all overflow-hidden ${activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
