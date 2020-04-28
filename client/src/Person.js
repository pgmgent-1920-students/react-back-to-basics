import React from 'react';

const Person = (props) => {
  const calculateBMI = (w, l) => {
    return w / Math.pow(l, 2);
  };

  return (
    <div>
      <div>{props.fullName}</div>
      <div>{`Your age is ${props.age}`}</div>
      <div>{props.length}</div>
      <div>{props.weight}</div>
      <div>{`Your BMI is ${calculateBMI(props.weight, props.length)}`}</div>
    </div>
  );
};

export default Person;