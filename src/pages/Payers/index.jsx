

import React from 'react'
import Button from '../../components/Button'
import SearchAppBar from './components/SearchAppBar'
import StickyHeadTable from './components/StickyHeadTable'
import styles from './Payers.module.css'
const Payers = () => {

  return (
    
    <div className={styles.filingsDivContainer}>
    <div className={styles.mainContainerDiv}>
         
        <div className={styles.divProgress}> Payers </div>
      
         <div className={styles.divProgress2}>Below are the Payers you will be filing on behalf of. Please review and ensure their records are accurate before you begin filing.
         
         </div>
         <div className={styles.divBut}>
          <div><SearchAppBar/></div>
          <Button text='+ Add New' className={styles.but}/></div>


        <div className={styles.divTable}><StickyHeadTable/></div>  
         </div>
        
         
       </div>
       
       
  )
}

export default Payers;