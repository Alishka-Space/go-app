import React from 'react'
import DubaiLogo from "../../images/logo-3.png"

const Logo = () => {
  return (
    <div className="logo">
    <img src={DubaiLogo} alt='dubai-icon' className='logo-img' />
        <div className="logo-text">
           <b>Dubaí</b> 
           <b></b>
        </div>
   </div>
  
  )
}

export default Logo
