import React from 'react';
import './Chat.css';

function Chat({ id, folder, chat_name, imgsrc, me, taged, unrecieved, onChatEnter }) {
    return (
        <div className={`user_chat ${folder}`} onClick={() => onChatEnter(id)}>
            {imgsrc && <img src={imgsrc} alt="User Avatar" />}
            <div className="name_chat">{chat_name}</div>
            {taged && <div className="tag">[Tag]</div>}
            {unrecieved > 0 && <div className="unchecked">{unrecieved}</div>}
        </div>
    );
}

export default Chat;
