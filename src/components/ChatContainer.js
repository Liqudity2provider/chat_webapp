import React from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import InputBar from './InputBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: auto;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`;

function ChatContainer() {
  return (
    <Container>
      <MessageList />
      <InputBar />
    </Container>
  );
}

export default ChatContainer;
