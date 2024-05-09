import React from 'react';
import Chat from './Chat';

function ChatList({ chats, onChatEnter }) {
    return (
        <div className="chat-list">
            {chats.map(chat => (
                <Chat
                    key={chat.id}
                    {...chat}
                    onChatEnter={() => onChatEnter(chat.id)}
                />
            ))}
        </div>
    );
}

export default ChatList;
