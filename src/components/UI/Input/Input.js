import React from 'react'

import './Input.scss';

export default (props) => {
  let formElement = null;

  switch (props.type) {
    case 'text':
      formElement = <input className="form-element" {...props}/>
      break;
    case 'textarea': 
      formElement = <textarea className="form-element" {...props}></textarea>
      break;
  
    default:
      formElement = <input className="form-element" {...props}/>
      break;
  }
  return (
    <div className="Input">
      <label className="label">{props.label}</label>
      {formElement}
    </div>
  )
}
