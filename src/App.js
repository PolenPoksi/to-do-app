import "./index.css"
import React, { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(1)
  const [item, setItem] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    const newTodo = {
      todo: item,
      id: counter,
    }
    setCounter(counter + 1)
    // console.log("The link was clicked:" + item)
    console.log(newTodo)
  }

  

  return (
    <section>
      <div>
        <input
          type='text'
          name='item'
          onChange={(event) => setItem(event.target.value)}
        ></input>
        <button
          // type='btn'
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </section>
  )
}

export default App
