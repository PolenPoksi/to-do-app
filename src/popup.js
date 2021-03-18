import React, { useEffect, useState } from "react"
import "./popup.css"

const Popup = ({ item, setItems, togglePopup, defaultItems }) => {
  const [editableItem, setEditableItem] = useState({
    id: 1,
    todo: "",
  })

  useEffect(() => {
    setEditableItem({
      id: item.id,
      todo: item.todo,
    })
  }, [])

  const closePopUp = () => {
    togglePopup()
  }

  const saveTodo = () => {
    const oldTodos = defaultItems.filter((todo) => todo.id != editableItem.id)
    setItems([editableItem, ...oldTodos])
    closePopUp()
  }

  return (
    <div className='popup-box'>
      <div className='box'>
        <h3>Please edit to do </h3>
        <input
          className='inputipopupit'
          type='text'
          name='item'
          value={editableItem.todo}
          onChange={(event) =>
            setEditableItem({ todo: event.target.value, id: editableItem.id })
          }
        ></input>
        <button className='butonipopupit' onClick={saveTodo}>
          Save
        </button>
        <button className='butonipopupit' onClick={closePopUp}>
          Close
        </button>
      </div>
    </div>
  )
}
export default Popup
