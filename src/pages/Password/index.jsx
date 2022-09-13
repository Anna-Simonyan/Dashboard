import React from 'react'
import styles from './Password.module.css'
import TextField from '@mui/material/TextField';
import Button from '../../components/Button';
import Account from '../Account';
import InputAdornments from './components/InputAdornments';

const Password = () => {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
    
        <div className={styles.mainContainer}>
   <Account/>  
        <div className={styles.aboutContainer}>  
      
      <form >
      
   <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{border: '1px solid #BFBFBF',
borderRadius: '10px',width:'76%'}}/>
     
<InputAdornments/>
   
   
      <Button text='Save' className={styles.but}/>
  
      </form>


        </div>
    </div>
    
  )
}

export default Password