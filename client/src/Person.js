import React from 'react';

const Person = (props) => {
  return (
    <div>
      <div>{props.fullName}</div>
      <div>{`Your age is ${props.age}`}</div>
      <div>{props.length}</div>
      <div>{props.weight}</div>
    </div>
  );
};

export default Person;