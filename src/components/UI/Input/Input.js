import React from 'react'

import './Input.scss';

export default (props) => {
  let formElement = null;

  switch (props.elemType) {
    case 'text':
      formElement = <input className="form-element" {...props.config} onChange={props.changed}/>
      break;
    case 'textarea': 
      formElement = <textarea className="form-element" {...props.config} onChange={props.changed}></textarea>
      break;

    case 'select': 
      formElement = (
        <select className="form-element" {...props.config} onChange={props.changed}>
          { props.config.options.map( opt => (
            <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
          ))}
        </select>
      ) 
      break;
  
    default:
      formElement = <input className="form-element" {...props.config} onChange={props.changed}/>
      break;
  }
  return (
    <div className="Input">
      <label className="label">{props.label}</label>
      {formElement}
    </div>
  )
}
