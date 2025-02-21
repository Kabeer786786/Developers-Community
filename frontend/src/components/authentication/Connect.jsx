import { useState } from "react";

export default function Connect() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        business: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Got a project in <span className="text-purple-500">mind?</span></h1>
                <p className="text-lg md:text-xl text-gray-400">Feel free to reach out with ideas, questions, feedback, or just to say hello! Your thoughts matter, and we take all feedback seriously. Use the form to get in touch — no spam. We’re eager to hear from you!</p>
            </div>
            <div className="md:w-1/2">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="What's your name?"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-purple-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="What's your email?"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-orange-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="text"
                        name="business"
                        placeholder="What's the name of your business?"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-yellow-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <textarea
                        name="message"
                        placeholder="What do you want to tell us?"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-pink-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
                    ></textarea>
                    <button type="submit" className="w-full p-4 bg-gray-200 text-black font-bold hover:bg-gray-300">Submit</button>
                </form>
            </div>
        </div>
    );
}
