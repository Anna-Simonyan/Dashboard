
import React from 'react'
import Account from '../Account'
import spiner from '../../assets/Images/spiner.png'
import { useNavigate } from 'react-router-dom'
import styles from './Security.module.css'
const Security = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.mainContainer}>
        <Account/>
<div className={styles.aboutContainer}>

<p>Prevent unathorized access to your account by requiring authentication codes when signing in.</p>

<div className={styles.divAut}>
    <div>
        <p className={styles.divAutP}>Authenticator App</p>
        <p className={styles.divAutP1}>Set up your account to receive authentication via a mobile application․</p>
    </div>
    <div>
       <button className={styles.but} onClick={()=>navigate('/setup')}><img src={spiner} alt=""  /> Set Up</button>
    </div>
</div>
</div>

    </div>
  )
}

export default Security