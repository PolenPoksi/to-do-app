import "./index.css"
import React, { useState } from "react"
import Popup from "./PopUp"

const App = () => {
  const [counter, setCounter] = useState(1)
  const [item, setItem] = useState("")
  const [defaultItems, setItems] = useState([])

  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const addToDo = (e) => {
    e.preventDefault()
    const newTodo = {
      todo: item,
      id: counter,
    }
    setItems([...defaultItems, newTodo])
    setCounter(counter + 1)
    setItem("")
  }

  const handleDelete = (id) => {
    setItems(defaultItems.filter((newToDo) => newToDo.id != id))
  }

  return (
    <div className='container'>
      <div classname='cont'>
        <input
          className='inputi'
          type='text'
          name='item'
          value={item}
          onChange={(event) => setItem(event.target.value)}
        ></input>
        <button className='buton' onClick={addToDo}>
          Add
        </button>
      </div>
      <div className='itemsat'>
        {defaultItems.map((item) => {
          return (
            <>
              <div id={item.id} className='njeitem'>
                <div> {item.todo} </div>
                <button
                  className='butoniVogel'
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <input
                  type='button'
                  className='butoniVogel'
                  value='Edit'
                  onClick={togglePopup}
                />
                {isOpen && (
                  <Popup
                    item={item}
                    setItems={setItems}
                    togglePopup={togglePopup}
                    defaultItems={defaultItems}
                  />
                )}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
