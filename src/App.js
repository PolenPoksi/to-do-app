import "./index.css"
import React, { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(1)
  const [item, setItem] = useState("")
  const [defaultItems, setItems] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    const newTodo = {
      todo: item,
      id: counter,
    }
    setItems([...defaultItems, newTodo])
    setCounter(counter + 1)
    console.log(defaultItems)
  }

  const handleDelete = (e) => {
    const id = e.target.getAttribute("id")
    setItems(defaultItems.filter((newToDo) => newToDo.id != id))
    console.log(defaultItems)
  }

  return (
    <div className='container'>
      <input
        className='inputi'
        type='text'
        name='item'
        onChange={(event) => setItem(event.target.value)}
      ></input>
      <button className='buton' onClick={handleClick}>
        Add
      </button>
      <div className='itemsat'>
        {defaultItems.map((e) => {
          return (
            <>
              <div> {e.todo} </div>
              <button className='butoniVogel' id={e.id} onClick={handleDelete}>
                {/* {" "} */}
                Delete
              </button>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
