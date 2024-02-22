import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './style/chat.css'; 
import 'dotenv'

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY; 
  const genAI = new GoogleGenerativeAI(API_KEY);

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') {
      return;
    }

    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputMessage);
      const responseText = await result.response.text();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, type: 'user' },
        { text: responseText, type: 'bot' },
      ]);

      setInputMessage('');
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="centered-card">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
