import React, { Component } from "react"

const PopUp = () => {
  handleClick = () => {
    this.props.toggle()
  }
  return (
    <>
      <div className='modal'>
        <div className='modal_content'>
          <span className='close' onClick={this.handleClick}>
            &times;
          </span>
          <p> Im a Pop Up</p>
        </div>
      </div>
    </>
  )
}

export default PopUp
