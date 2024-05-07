import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message';

const List = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
`;

function MessageList() {
  const [messages, setMessages] = useState([]);

  // Simulate fetching messages
  useEffect(() => {
    setMessages([{ id: 1, text: "Hello there!", sender: "user" }]);
  }, []);

  return (
    <List>
      {messages.map(msg => <Message key={msg.id} text={msg.text} sender={msg.sender} />)}
    </List>
  );
}

export default MessageList;
