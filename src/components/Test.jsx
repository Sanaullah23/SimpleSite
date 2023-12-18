import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContextApi'

const Test = () => {
    const [text, setText] = useState("");
const { name, setName } = useContext(MyContext);

return (
  <div className="w-screen h-screen ">
    <input type="text" onChange={(e) => setText(e.target.value)} />
    <h1>{name}</h1>
    <button onClick={() => setName(text)}>
      Click Me
    </button>
  </div>


  )
}

export default Test