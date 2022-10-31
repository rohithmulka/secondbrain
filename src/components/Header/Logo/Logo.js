import React from 'react'
import s from './logo.module.css'

export default function Logo() {
  return (
    <div className={s.mainCont}>
      <img className={s.mobileLogo} src='/images/mobile_logo.svg' alt='logo' />
      <img className={s.webLogo} src='/images/web_logo.svg' alt='logo' />
    </div>
  )
}
