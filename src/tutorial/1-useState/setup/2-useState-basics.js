import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState(1)[0];
  // const Handler = useState(1)[1];
  // console.log(value, Handler);

  const [text,setText] = useState("You Clicked")
  const handleClick =() => {
    if(text === "You Clicked"){
      setText("Hello Ekene")
    } else {
      setText("You Clicked")
    }
    
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button type="button" className="btn" onClick={handleClick}>Change Text</button>
  </React.Fragment>;
};

export default UseStateBasics;
