import React from 'react';

const Message = (props) => {
  return (
    <div>
      <div>{props.msg}</div>
      <div>{props.createdAt}</div>
    </div>
  );
};

export default Message;
