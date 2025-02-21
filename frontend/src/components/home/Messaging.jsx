import { useState, useEffect, useRef } from 'react';
import { FiSend, FiSmile, FiPaperclip, FiCamera } from 'react-icons/fi';

const Messaging = () => {
    const [chats, setChats] = useState([
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unread: 2, online: true, avatar: './vite.svg' },
        { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', timestamp: '9:45 AM', unread: 0, online: false, avatar: './vite.svg' },
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unread: 2, online: true, avatar: './vite.svg' },
        { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', timestamp: '9:45 AM', unread: 0, online: false, avatar: './vite.svg' },
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unread: 2, online: true, avatar: './vite.svg' },
        { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', timestamp: '9:45 AM', unread: 0, online: false, avatar: './vite.svg' },
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unread: 2, online: true, avatar: './vite.svg' },
        { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', timestamp: '9:45 AM', unread: 0, online: false, avatar: './vite.svg' },
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unread: 2, online: true, avatar: './vite.svg' },
        { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', timestamp: '9:45 AM', unread: 0, online: false, avatar: './vite.svg' },

        // Add more chats here
    ]);

    const [selectedChat, setSelectedChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hey, how are you?', sender: 'them', timestamp: '10:30 AM' },
        { id: 2, text: 'I\'m good, thanks! How about you?', sender: 'me', timestamp: '10:31 AM' },
        // Add more messages here
    ]);
    // Inside your component
    const textareaRef = useRef();
    const lineHeight = useRef(24); // Set your base line height in pixels

    useEffect(() => {
        if (textareaRef.current) {
            // Reset height to shrink when content is removed
            textareaRef.current.style.height = 'auto';

            // Calculate the scroll height and apply the new height
            const maxHeight = lineHeight.current * 5; // 5 rows max
            const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);

            textareaRef.current.style.height = `${newHeight}px`;
        }
    }, [newMessage]);

    const handleTextareaChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMsg = {
                id: messages.length + 1,
                text: newMessage,
                sender: 'me',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([...messages, newMsg]);
            setNewMessage('');
        }
    };

    return (
        <div className="pt-16">
            <div className="relative flex w-[1400px] mt-0.5 overflow-y-hidden m-auto bg-white p-2">
                {/* Left sidebar */}
                <div className="relative w-1/3 border-r bg-white rounded-l-2xl border-2 border-gray-500 overflow-hidden">
                    <div className="p-4 bg-gray-400 border-b rounded-tl-xl">
                        <h1 className="text-xl text-white font-semibold">Messages</h1>
                    </div>
                    <div className="overflow-y-auto h-[79vh]">
                        {chats.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => setSelectedChat(chat)}
                                className={`flex items-center p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedChat?.id === chat.id ? 'bg-gray-100' : ''}`}
                            >
                                <div className="relative w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full p-2">
                                    <img src={chat.avatar} alt="avatar" className="w-7 h-7" />
                                    {chat.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-semibold">{chat.name}</h2>
                                        <span className="text-sm text-gray-500">{chat.timestamp}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                                        {chat.unread > 0 && (
                                            <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                                                {chat.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right chat area */}
                <div className="relative flex-1 flex flex-col rounded-r-2xl border-2 overflow-hidden border-gray-500">
                    {selectedChat ? (
                        <>
                            <div className="p-4 bg-gray-400 border-b flex items-center rounded-tr-xl">
                                <div className="relative w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full p-2">
                                    <img src={selectedChat.avatar} alt="avatar" className="w-7 h-7" />
                                </div>
                                <div className="ml-4">
                                    <h2 className="font-semibold">{selectedChat.name}</h2>
                                    <p className="text-sm text-gray-600">
                                        {selectedChat.online ? 'Online' : 'Offline'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-scroll max-h-[70vh] p-4 bg-gray-50">
                                {messages.map(message => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} mb-4`}
                                    >
                                        <div
                                            className={`max-w-[70%] rounded-lg p-3 ${message.sender === 'me' ? 'bg-green-500 text-white' : 'bg-white'}`}
                                        >
                                            <p>{message.text}</p>
                                            <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-green-100' : 'text-gray-500'}`}>
                                                {message.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute fixed bottom-0 w-full p-4 bg-gray-300  border-t rounded-br-xl">
                                <div className="flex items-center">
                                    <button className="text-gray-500 p-2 hover:bg-gray-200 rounded-full">
                                        <FiSmile size={24} />
                                    </button>
                                    <button className="text-gray-500 p-2 hover:bg-gray-200 rounded-full">
                                        <FiPaperclip size={24} />
                                    </button>
                                    <button className="text-gray-500 p-2 hover:bg-gray-200 rounded-full">
                                        <FiCamera size={24} />
                                    </button>
                                    <textarea
                                        ref={textareaRef}
                                        value={newMessage}
                                        onChange={handleTextareaChange}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type a message"
                                        className="flex-1 mx-4 p-2 py-2 border rounded-lg px-4 focus:outline-none focus:border-green-500 resize-none overflow-y-auto"
                                        style={{
                                            minHeight: `${lineHeight.current}px`,
                                            lineHeight: `${lineHeight.current}px`,
                                        }}
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                                    >
                                        <FiSend size={24} />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-r-xl">
                            <p className="text-gray-500">Select a chat to start messaging</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messaging;