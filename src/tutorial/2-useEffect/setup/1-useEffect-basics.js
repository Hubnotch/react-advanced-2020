import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 2) {
      document.title = `New title ${value}`;
    }
    console.log("call useEffect");
  },[value]);

  useEffect(() => {
    console.log("hello world!");
  },[])

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
