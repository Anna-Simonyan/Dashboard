
import React from 'react'
import scan from '../../assets/Images/scan.png'
import Button from '../../components/Button'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { NavLink } from 'react-router-dom';
import styles from './Setup.module.css'
const Setup = () => {
  return (
    <div className={styles.filingsDivContainer}>
    <div className={styles.mainContainerDiv}>
        <div className={styles.divScan}>
        <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/setup'>  <div className={styles.divScan1}><p>Scan QR or enter code</p> </div></NavLink>
        <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/variety'>  <div className={styles.divScan2}><p>Verify</p> </div></NavLink>
          </div>

          <div className={styles.divConfigur}>
            <p className={styles.divConfigurP}>Configure Authenticator App</p>
           <div className={styles.divConfigur1}><p className={styles.divConfigurP1}>Scan this QR code with an authentication app like Google Authenticator or Microsoft Authenticator. Download one from App Store or Play Store.</p></div> 
           <div className={styles.divImg}><img src={scan} alt="" /> </div>
           <div><p>Or enter the following code in your device:</p></div>
           <div className={styles.divImg1}>< AutoAwesomeMotionIcon/></div>
 
           <div  className={styles.divButton}> <Button text='Cancel' className={styles.button1}/>  <Button text ='Next'  className={styles.button}/></div>
            </div>
            </div>
        </div>
  )
}

export default Setup