import React from 'react';

const Register = ({ name }) => {
  // console.log(props.name);
  const returnName = `hello ${name}`;
  return (
    <>
      <div>{returnName}</div>
    </>
  );
};

export default Register;
