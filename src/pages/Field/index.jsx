import React from 'react'
import styles from './Field.module.css'
const Field = () => {
  return (
    <div className={styles.filingsDivContainer}>
    <div className={styles.mainContainerDiv}>
          
            <div className={styles.divProgress}>Filed Forms</div>
            <div className={styles.divProgress1}>You do not have any filed forms.</div>
            <div className={styles.divProgress2}>Once you check out your forms, you can access them on this page.<span>Get Started</span></div>
            </div>
        </div>
  )
}

export default Field