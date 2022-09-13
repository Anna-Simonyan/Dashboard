import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Billing.module.css'

const Billing = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.mainContainer} >
        <div className={styles.mainContainerDiv}> 
      <div className={styles.divAccount}> Billing & Invoices</div> 

    <div className={styles.divBilling}>Billing Information</div>
    <div className={styles.divBillingContainer}>
    <div className={styles.divBilling1}>You have not added billing information.</div>
    <div  className={styles.divBilling2}>Add your business' billing information now to save time when filing forms.<span>Get Started</span></div>
</div>


<div className={styles.divBilling}>Billing & Invoices</div>
    <div className={styles.divBillingContainer}>
    <div className={styles.divBilling1}>You are not currently subscribed.</div>
    <div  className={styles.divBilling2}>Add new team members and get unlimited TIN matching with a Premium subscription.<span onClick={()=> navigate('/team')}>Learn More</span></div>
</div>


<div className={styles.divBilling}>Invoices</div>
    <div className={styles.divBillingContainer}>
    <div className={styles.divBilling1}>You do not have any invoices at this time</div>
    <div  className={styles.divBilling2}>After filing forms, your invoices will be available to download and print here.</div>
</div>
      
        </div>
    </div>
  )
}

export default Billing