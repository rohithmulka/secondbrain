import React from 'react'
import s from './dropdownsubbox.module.css'

export default function DropdownSubBox() {
  return (
    <div className={s.dropdownBox}>
      <div>
        <img className={s.subIcon} src='/images/products/mdi checkbox-marked-outline.svg' alt='icon'/>
      </div>
      <div>
        <div className={s.mainText}>Tasks</div>
        <div className={s.subText}>Break down any size project into customized tasks.</div>
      </div>
      
    </div>
  )
}
