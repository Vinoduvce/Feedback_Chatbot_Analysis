
// Chatbot.js
import React, { useState,useEffect } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [websckt, setWebsckt] = useState(null);
  //const [message, setMessage] = useState([]);

  // const sendMessage = () => {
  //   if (input.trim() !== '') {
  //     const newMessage = { message: input };
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);
  //     setInput(''); 
  //   }
  // };

  useEffect(() => {

          const url = "ws://localhost:8000/ws/chat";
            const ws = new WebSocket(url);
            // ws.onopen = (event) => {
            //   ws.send("Connect");
            // };

        // recieve message every start page
        ws.onmessage = (e) => {
          const data = { message: e.data };
          setMessages((prevMessages) => [...prevMessages, data]);
        };
    
        setWebsckt(ws);
            //clean up function when we close page
            return () => ws.close();
          }, []);

  const sendMessage = () => {
    
    // recieve message every send message
    if (input.trim() !== '') {
      const newMessage = { message: input };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      
      if(websckt){
        websckt.send(input);
      }
      setInput('');
  }
  
  };



  return (
    <div className="chatbot">
      <div className="chatbot-header">
        Feedback Chatbot
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chatbot-message">
            {msg.message}
          </div>
        ))}
      </div>
      
      <div className="chatbot-input" style={{display:'flex'}}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;

// import React, { useEffect, useState } from 'react';
// import '../styles/Chatbot.css';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:3000/ws/chat'); // Make sure the port matches your FastAPI backend

//     ws.onopen = () => {
//       console.log('WebSocket connection established');
//     };

//     ws.onmessage = (event) => {
//       const botResponse = event.data;
//       setMessages((prevMessages) => [...prevMessages, { message: botResponse, isBot: true }]);
//     };

//     ws.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     ws.onclose = () => {
//       console.log('WebSocket connection closed');
//     };

//     setSocket(ws);

//     return () => {
//       ws.close();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (socket && socket.readyState === WebSocket.OPEN && input.trim() !== '') {
//       const userMessage = { message: input, isBot: false };
//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       socket.send(input); 
//       setInput(''); 
//     } else {
//       console.error('WebSocket is not open. Ready state:', socket.readyState);
//     }
//   };

//   return (
//     <div className="chatbot">
//       <div className="chatbot-header">
//         Feedback Chatbot
//       </div>
//       <div className="chatbot-messages">
//         {messages.map((msg, index) => (
//           <div key={index} className={`chatbot-message ${msg.isBot ? 'bot' : 'user'}`}>
//             {msg.message}
//           </div>
//         ))}
//       </div>
//       <div className="chatbot-input">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

