import "./index.css"
import React, { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(1)
  const [item, setItem] = useState("")
   const [items, setItems] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    const newTodo = {
      todo: item,
      id: counter,
    }
    setItems( [...items, newTodo])
    setCounter(counter + 1)
    console.log(items)
  }
  const handleDelete= (e) => {
    console.log(e.target.id)
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

        {
         items.map((e)=>{
          
            return (
              <>
            <div > {e.todo} </div>
            <button id={e.id} onClick={handleDelete}> Delete</button>
            </>
            )
               
        })
          
          }
      </div>
    </section>
  )
}

export default App
