import "./index.css"
import React, { useState } from "react"
import Popup from "./PopUp"


const App = () => {

  const [counter, setCounter] = useState(1)
  const [item, setItem] = useState("")
  const [defaultItems, setItems] = useState([])

  // this is the popup

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

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
      <div classname='cont'>
        <input
          className='inputi'
          type='text'
          name='item'
          onChange={(event) => setItem(event.target.value)}
        ></input>
        <button className='buton' onClick={handleClick}>
          Add
        </button>
      </div>
      <div className='itemsat'>
        {defaultItems.map((e) => {
          return (
            <>
              <div className='njeitem'>
                <div> {e.todo} </div>
                <button
                  className='butoniVogel'
                  id={e.id}
                  onClick={handleDelete}
                >Delete
                </button>
                <button className='butoniVogel' onClick={togglePopup}>Edit{isOpen && <Popup content={
                  <>
                    <h3>Edit To Do</h3>
                    <input
                      className='inputi'
                      type='text'
                      name='item'
                      onChange={(event) => setItem(event.target.value)}
                    ></input>
                    <div>
                      <button onClick={togglePopup}></button>
                    </div>
                  </>
                }
                  handleClose={togglePopup} />}
                </button>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
