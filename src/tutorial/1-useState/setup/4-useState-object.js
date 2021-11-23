import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ekene",
    age:30,
    message: "Hello Lovely React"
  })
const [name, setName] = useState("Peter")
const [age, setAge] = useState(30)
const [message, setMessage] = useState("Hello Lovely React");

const changeMessage = () =>{
  // setPerson({...person,message:"Keep it up"})
  setMessage("You did it")
}

  return (
    <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>

  <button className="btn" onClick={changeMessage}>Change message</button>
    </>
  )
};

export default UseStateObject;
