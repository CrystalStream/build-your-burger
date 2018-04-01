import React from 'react'

import './Input.scss';

export default (props) => {
  let formElement = null;
  let validationMessages = null;
  const classes = ['form-element'];
  let invalid = !props.valid && props.validatable && props.touched;
  if (invalid) {
    classes.push('invalid');
    validationMessages = (
      <small>Please enter a {props.config.name}</small>
    )
  } 

  switch (props.elemType) {
    case 'text':
      formElement = <input className={classes.join(' ')} {...props.config} onChange={props.changed}/>
      break;
    case 'textarea': 
      formElement = <textarea className={classes.join(' ')} {...props.config} onChange={props.changed}></textarea>
      break;

    case 'select': 
      formElement = (
        <select className={classes.join(' ')} {...props.config} onChange={props.changed}>
          { props.config.options.map( opt => (
            <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
          ))}
        </select>
      ) 
      break;
  
    default:
      formElement = <input className={classes.join(' ')} {...props.config} onChange={props.changed}/>
      break;
  }
  return (
    <div className="Input">
      <label className="label">{props.label}</label>
      {formElement}
      {validationMessages}
    </div>
  )
}
