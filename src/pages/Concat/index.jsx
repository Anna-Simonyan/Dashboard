import React from 'react'
import arrow from '../../assets/Images/arrow.png'
import { useNavigate } from 'react-router-dom'
import styles from './Concat.module.css'

const Concat = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.filingsDivContainer}>
<div className={styles.mainContainerDiv}>
        <div className={styles.divFilings}>
            <img src={arrow} alt=""  onClick={()=>navigate('/dashboard')}/>
            <div>Back to Dashboard</div>
        </div>
        <div className={styles.divProgress}> Contact Us</div>
        
        <div className={styles.divProgress2}>For fast answers to common questions, check out our knowledgebase first.<span> knowledgebase first.</span></div>
        <div className={styles.divProgress3}>If you don't find the answer you're looking for, you can contact us.<span> contact us.</span></div>


        <div className={styles.divCostomer}>
<h1>Customer Service Hours</h1>

<div>
<p className={styles.customerP}>Pre Tax Season Until January 16, 2022</p>
<p className={styles.customerP1}>Monday – Friday, 8:30 am – 6:00 pm ET</p>
<p className={styles.customerP1}>Saturday & Sunday, Closed</p>

</div>
<div className={styles.divP}>
<p className={styles.customerP}>Tax Season January 11, 2022 – February 1, 2022</p>
<p className={styles.customerP1}>Tax Season January 11, 2022 – February 1, 2022</p>
<p className={styles.customerP1}>Saturday January 22, 11:00 am – 3:00 pm ET</p>
<p className={styles.customerP1}>Saturday January 29, 11:00 am – 4:00 pm ET</p>
   
</div>
<div className={styles.divP}>
<p className={styles.customerP}>Post Tax Season February 2, 2022 – January 15, 2023</p>
<p className={styles.customerP1}>Monday – Friday, 8:30 am – 6:00 pm ET</p>

<p className={styles.customerP1}>Monday – Friday, 8:30 am – 6:00 pm ET</p>
<div className={styles.divP}>
<p className={styles.customerP1}>Looking for a form that we don't offer or just have a question or comment about our service?</p>
<p className={styles.customerP1}>Please <span> Email us</span> </p>
</div>
    
</div>
        </div>

        </div>
    </div>
  )
}

export default Concat