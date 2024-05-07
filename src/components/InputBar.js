import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #eee;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #009688;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function InputBar() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log("Sending message: ", message);
    setMessage('');
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && sendMessage()}
      />
      <SendButton onClick={sendMessage}>Send</SendButton>
    </InputContainer>
  );
}

export default InputBar;
