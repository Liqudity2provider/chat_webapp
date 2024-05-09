import React from 'react';
import './ChatView.css';  // Ensure CSS is properly set up for styling

const ChatView = ({ messages, goBackToChatList }) => {
    return (
        <div className="chat-view">
            <button className="back-button" onClick={goBackToChatList}>Back to Chats</button>
            {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                    <div className="message-text">{message.text}</div>
                    <div className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</div>
                </div>
            ))}
        </div>
    );
}

export default ChatView;
