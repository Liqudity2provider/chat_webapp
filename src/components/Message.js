import React from 'react';
import styled from 'styled-components';

const Msg = styled.div`
  background-color: ${props => props.sender === 'user' ? '#dcf8c6' : '#fff'};
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  align-self: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
`;

function Message({ text, sender }) {
  return <Msg sender={sender}>{text}</Msg>;
}

export default Message;
