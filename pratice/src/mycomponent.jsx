import React, { useState } from 'react'
import { useEffect } from 'react'
import './mycompoent.css'
const mycomponent = (props) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(count);
    console.log("use effect called");
  }, [count])
  const handelclick=()=>{
    console.log("button clicked");
    setCount(count + 1);
  }
  return (
    <div>
        <div id="card">

          <div id='card1'>
            <img src={props.props.image} alt="" />
            <h1>{props.props.title}</h1>
            <p>{props.props.content}</p>
            <h2>{props.props.honeypot}</h2>
            <button onClick={handelclick} id='button'>Click Me</button>
            </div>
        </div>
    </div>
  )
}

export default mycomponent