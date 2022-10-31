import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'
import { useState } from 'react'
import s from './header.module.css'
import Logo from './Logo/Logo'
import MainData from './MainData/MainData'
import LoginSignupButton from './LoginSignupButton/LoginSignupButton'
import DropdownSubBox from './DropdownSubBox/DropdownSubBox'


export default function Header() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // step 1 : Logo

  const displayLogo = () =>{
    return(
      <div className={s.logoArrange}>
        <Logo/>
        {
          showMobileMenu ? 
          <img onClick={()=> setShowMobileMenu(false)}
            className={s.hamburgerIcon} src='/images/close_icon.svg' alt='close'
          /> :
          <img onClick={()=> setShowMobileMenu(true)}
            className={s.hamburgerIcon} src='/images/sidemenu_icon.svg' alt='hamburger'
          />
        }
       
      </div>
    )
  }



  return (
    <>
    <div className={s.mainCont}>
      {
        !showMobileMenu &&  <img className={s.decorationImage} src='/images/Vector 1.svg' alt='decoration'/>
      }
      
      <div className={s.leftData}>
        { displayLogo() }
        <div className={s.middleData}>
          <MainData/>
        </div>
      </div>

      <div className={s.rightData}>

        <NavLink to='/sales'  className={s.navLinkStyle}>
          <div className={s.navMainText}>Contact sales</div>
        </NavLink>

        <div className={s.buttonCont}>
          <LoginSignupButton buttonstyle={s.btnStyle} name='Sign Up'/>
          <LoginSignupButton name='Log in'/>
        </div>

      </div>
      
     <Outlet/>
    </div>

      <div className={s.dropwDownCont}>
      <DropdownSubBox/>
      </div>
      
    </>
  )
}
