import React from 'react'
import styles from './About.module.css'
import TextField from '@mui/material/TextField';
import Button from '../../components/Button';
import Account from '../Account';
const About = () => {
  
  return (
    <div className={styles.mainContainer}>
   <Account/>  
        <div className={styles.aboutContainer}>  
      
      <form >
      
   <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{border: '1px solid #BFBFBF',
borderRadius: '10px',width:'76%'}}/>
     <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{border: '1px solid #BFBFBF',
borderRadius: '10px',width:'76%'}}/>
   
   <TextField id="outlined-basic" label="Email Address" variant="outlined" sx={{border: '1px solid #BFBFBF',
borderRadius: '10px',width:'76%'}}/>
      <Button text='Save' className={styles.but}/>
  
      </form>


        </div>
    </div>
  )
}

export default About