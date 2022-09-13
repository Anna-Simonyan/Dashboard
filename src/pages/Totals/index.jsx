import React from 'react'
import styles from './Totals.module.css'
const Totals = () => {
  return (
    <div className={styles.filingsDivContainer}>
    <div className={styles.mainContainerDiv}>
          
            <div className={styles.divProgress}>Totals Report</div>
            <div className={styles.divProgress2}>The Totals Report provides totals by form type and payer. It may be used in place of a 1096, W-3 or 1094-C/B.</div>
            <div className={styles.divProgress1}>You do not have any forms for reporting.</div>
            <div className={styles.divProgress2}>Once you have forms in progress, in cart, or filed forms, you can download a report.<span>Start Filing Now</span></div>
            </div>
        </div>
  )
}

export default Totals