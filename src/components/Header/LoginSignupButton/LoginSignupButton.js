import React from 'react'
import s from './loginsignupbutton.module.css'

export default function LoginSignupButton(props) {

  return (
    <button className={s.button+' '+props.buttonstyle}>{props.name}</button>
  )
}
