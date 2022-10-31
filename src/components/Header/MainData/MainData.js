import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'
import s from './maindata.module.css'
import { NAVIGATION_DATA } from './NavigationData'
export default function MainData() {

   // step 1 Main Data in header
   const mainData = () =>{
    return(
      <div className={s.navMenuCont}>
        {
         NAVIGATION_DATA.map((item,index)=>{
          return(
            
            <NavLink to={item.redirectTo} className={s.navLinkStyle}>
              <div className={s.navDataCont} key={index}> 
                  <div className={s.navMainText}>{item.name}</div>
                  {
                    item.showDropdownIcon &&
                    <div>
                      <img className={s.mobileChevron} src= '/images/mobile_chevron_side.svg' alt='chevron'/>
                      <img className={s.webChevron} src= '/images/web_chevron_down.svg' alt='chevron'/>
                    </div>
                  }    
              </div>
            </NavLink>
          
          )
         }) 
        }
      </div>
     
      
    )
  }

  return (
    <div className={s.mainDataCont}>
       { mainData()}
       <Outlet/>
    </div>
  )
}
