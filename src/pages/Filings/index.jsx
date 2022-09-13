import React from 'react'
import arrow from '../../assets/Images/arrow.png'
import { useNavigate } from 'react-router-dom'
import styles from './Filings.module.css'
const Filings = () => {
    const  navigate =useNavigate()
  return (
    <div className={styles.filingsDivContainer}>
<div className={styles.mainContainerDiv}>
        <div className={styles.divFilings}>
            <img src={arrow} alt=""  onClick={()=>navigate('/dashboard')}/>
            <div>Back to Dashboard</div>
        </div>
        <div className={styles.divProgress}> Forms in Progress</div>
        <div className={styles.divProgress1}>You do not have any forms in progress.</div>
        <div className={styles.divProgress2}>Your saved forms will show on this page. From here, you can choose your service options and add forms to your cart.<span>Get Started</span></div>
        </div>
    </div>
  )
}

export default Filings