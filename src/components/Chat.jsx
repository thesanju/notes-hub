import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 
import './style/chat.css'; 
import 'dotenv';

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

  const renderMessage = (message, index) => {
    if (message.type === 'user') {
      return <div key={index} className={`message ${message.type}`}>{message.text}</div>;
    } else if (message.type === 'bot') {
      return (
        <div key={index} className={`message ${message.type}`}>
          {message.text.includes('```') ? (
            <SyntaxHighlighter language="javascript" style={docco}>
              {message.text.replace(/```([\s\S]+?)```/g, (_, content) => content)}
            </SyntaxHighlighter>
          ) : (
            message.text.includes('**') ? (
              <strong>{message.text.replace(/\*\*(.*?)\*\*/g, (_, content) => content)}</strong>
            ) : (
              <span>{message.text}</span>
            ))}
        </div>
      );
    }
  
    return null;
  };
  
  

  return (
    <div className="centered-card">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => renderMessage(message, index))}
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
