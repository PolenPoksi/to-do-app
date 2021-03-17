import React from 'react';
import "./popup.css";

const Popup = props => {
  const { handleClose, textEditor, id, text } = props
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <input
            className='inputi'
            type='text'
            placeholder={text}
            name='item'
          ></input>
          <span className="close-icon" onClick={handleClose, textEditor}>x</span>{props.content}
        </div>
      </div>
    </>
  );
}

export default Popup;