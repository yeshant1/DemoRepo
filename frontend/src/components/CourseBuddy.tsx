// import React, { useState, useEffect } from 'react';
// import { FiMessageSquare, FiX, FiSend, FiRobot } from 'react-icons/fi';

// const CourseBuddy = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hi there! 👋 I'm CourseBuddy, your learning assistant. How can I help you today?",
//       sender: 'bot',
//       timestamp: new Date()
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   // Sample course recommendations and responses
//   const botResponses = [
//     "I'd recommend checking out our Web Development course. It's perfect for beginners!",
//     "Our Data Science course is very popular right now. Would you like to know more about it?",
//     "I can help you with course recommendations, technical issues, or payment questions.",
//     "Great question! Our courses are designed by industry experts with years of experience.",
//     "You can access your purchased courses anytime from your profile dashboard.",
//     "We offer a 30-day money-back guarantee on all courses if you're not satisfied.",
//     "That course includes 10 hours of video content, 5 practical projects, and a certificate of completion."
//   ];

//   const handleSendMessage = () => {
//     if (inputMessage.trim() === '') return;

//     // Add user message
//     const userMessage = {
//       id: messages.length + 1,
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date()
//     };

//     setMessages([...messages, userMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     // Simulate bot response after a delay
//     setTimeout(() => {
//       const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
//       const botMessage = {
//         id: messages.length + 2,
//         text: randomResponse,
//         sender: 'bot',
//         timestamp: new Date()
//       };
//       setMessages(prev => [...prev, botMessage]);
//       setIsTyping(false);
//     }, 1500);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   return (
//     <>
//       {/* Chatbot Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
//           aria-label="Open chat"
//         >
//           <FiMessageSquare className="text-white text-2xl" />
//         </button>
//       )}

//       {/* Chatbot Window */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 w-80 h-96 bg-gray-800 rounded-xl shadow-2xl flex flex-col z-50 border border-gray-700">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 rounded-t-xl flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="relative">
//                 <FiRobot className="text-white text-2xl mr-2" />
//                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//               </div>
//               <h3 className="text-white font-semibold">CourseBuddy</h3>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-white hover:text-gray-200 transition-colors"
//               aria-label="Close chat"
//             >
//               <FiX className="text-xl" />
//             </button>
//           </div>

//           {/* Messages Container */}
//           <div className="flex-1 p-4 overflow-y-auto bg-gray-850">
//             <div className="space-y-4">
//               {messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-xs px-4 py-2 rounded-2xl ${message.sender === 'user'
//                       ? 'bg-indigo-600 text-white'
//                       : 'bg-gray-700 text-white'
//                       }`}
//                   >
//                     <p className="text-sm">{message.text}</p>
//                     <p className="text-xs opacity-70 mt-1">
//                       {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//               {isTyping && (
//                 <div className="flex justify-start">
//                   <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Input Area */}
//           <div className="px-4 py-3 bg-gray-750 rounded-b-xl">
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={inputMessage.trim() === ''}
//                 className="bg-indigo-600 text-white rounded-r-lg px-4 py-2 hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 aria-label="Send message"
//               >
//                 <FiSend className="text-lg" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CourseBuddy;

import React, { useState } from 'react';
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";
import { FaRobot } from "react-icons/fa"; // Robot icon from FontAwesome


interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const CourseBuddy: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 I'm CourseBuddy, your learning assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Sample course recommendations and responses
  const botResponses: string[] = [
    "I'd recommend checking out our Web Development course. It's perfect for beginners!",
    "Our Data Science course is very popular right now. Would you like to know more about it?",
    "I can help you with course recommendations, technical issues, or payment questions.",
    "Great question! Our courses are designed by industry experts with years of experience.",
    "You can access your purchased courses anytime from your profile dashboard.",
    "We offer a 30-day money-back guarantee on all courses if you're not satisfied.",
    "That course includes 10 hours of video content, 5 practical projects, and a certificate of completion.",
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
          aria-label="Open chat"
        >
          {/* <FiMessageSquare className="text-white text-2xl" /> */}
          <FaRobot className="text-white text-2xl" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-gray-800 rounded-xl shadow-2xl flex flex-col z-50 border border-gray-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative">
                <FaRobot className="text-white text-2xl mr-2" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-white font-semibold">CourseBuddy</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-850">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.4s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="px-4 py-3 bg-gray-750 rounded-b-xl">
            <div className="flex items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ''}
                className="bg-indigo-600 text-white rounded-r-lg px-4 py-2 hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FiSend className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseBuddy;
