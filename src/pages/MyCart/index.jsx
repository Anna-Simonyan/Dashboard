import React from 'react'
import styles  from './MyCart.module.css'

const MyCart = () => {
  return (
    <div className={styles.filingsDivContainer}>
    <div className={styles.mainContainerDiv}>
          
            <div className={styles.divProgress}>My Cart</div>
            <div className={styles.divProgress1}>You do not have any items in your cart.</div>
            <div className={styles.divProgress2}>Add forms from Forms In Progress or TIN Matching for your Payers and Recipients.<span>Get Started</span></div>
            </div>
        </div>
  )
}

export default MyCart