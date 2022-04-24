import React from 'react'
import './Greeting.css'

function Greeting(props) {

    console.log(props);

  return (
    <div className="greeting-container">
        <h1>Hello {props.username}!</h1>
    </div>
  )
}

export default Greeting