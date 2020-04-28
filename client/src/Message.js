import React from 'react';

const Message = (props) => {
  const reverseMessage = (msg) => {
    return msg.split('').reverse().join('');
  };

  return (
    <div>
      <div>{props.msg}</div>
      <div>{reverseMessage(props.msg)}</div>
      <div>{props.createdAt}</div>
    </div>
  );
};

export default Message;
