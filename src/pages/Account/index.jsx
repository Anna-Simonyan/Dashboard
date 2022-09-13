import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Account.module.css'
const Account = () => {
  return (
    <div className={styles.mainContainer} >
        <div className={styles.mainContainerDiv}> 
      <div className={styles.divAccount}> My Account</div> 

        <div className={styles.divLink}> 
         <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/about'><div className={styles.divAbout}>About My</div> </NavLink> 
         <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/password'>  <div className={styles.divAbout}>Password</div></NavLink> 
         <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/security'>  <div className={styles.divAbout}>Security</div></NavLink> 
        </div>
       
        </div>
    
    </div>
  )
}

export default Account