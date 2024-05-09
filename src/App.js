import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatView from './components/ChatView';
import sampleChats from './sampleChats.json';  // Assumed path for chat list data
import sampleMessages from './sampleChatData.json';  // Assumed path for messages data

function App() {
    const [currentView, setCurrentView] = useState('chatList');
    const [activeChat, setActiveChat] = useState(null);

    const chatEnter = (chatId) => {
        const messages = sampleMessages.filter(message => message.chatId === chatId);
        setActiveChat(messages);
        setCurrentView('chatView');
    };

    const goBackToChatList = () => {
        setCurrentView('chatList');  
    };

    return (
        <div>
            {currentView === 'chatList' ? (
                <ChatList chats={sampleChats} onChatEnter={chatEnter} />
            ) : (
                <ChatView messages={activeChat || sampleMessages} goBackToChatList={goBackToChatList} />
            )}
        </div>
    );
}

export default App;
