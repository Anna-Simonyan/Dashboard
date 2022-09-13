import React from 'react'

import styles from './StartField.module.css'

import Progress from '../../components/Progress'

const StartField = () => {
   
  return (
    <div className={styles.filingsDivContainer}>
    <div className={styles.mainContainerDiv}>
          
            <div className={styles.divProgress}>Start Filing</div>
            <div className={styles.divProgress1}>Filing your forms is quick, easy and secure. Start by selecting how you want to enter your form data. After, your form will be moved to In Progress where you can make edits before filing.</div>
    <div className={styles.divReadyContainer}><Progress/></div>

            
            </div>
        </div>
  )
}

export default StartField