import React from 'react'
import styles from './Variety.module.css'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Variety = () => 
(
    <Formik
      initialValues={{ email: "", password: "" ,name :"",surName:"",phoneNamber:"", reEnterPassword: ""}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
      
  
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("This field is required."),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
          name: Yup.string()
          .required("This field is required."),
          surName: Yup.string()
          .required("This field is required."),
          phoneNamber: Yup.string()
          .required("No Phone Number provided.")
          .min(8, "Number is too short - should be 9 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
         
          reEnterPassword: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
         
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
    
   
      
  return (
    <div className={styles.filingsDivContainer}>
    <div className={styles.mainContainerDiv}>
        <div className={styles.divScan}>
        <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/setup'>  <div className={styles.divScan1}><p>Scan QR or enter code</p> </div></NavLink>
        <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/variety'>  <div className={styles.divScan2}><p>Verify</p> </div></NavLink>
          </div>

          <div className={styles.divConfigur}>
            <p className={styles.divConfigurP}>Verify Your Authenticator</p>
           <div className={styles.divConfigur1}><p className={styles.divConfigurP1}>Enter the code from your authentication app to continue.</p></div> 
          
           <div>
          
          <form onSubmit={handleSubmit}  className={styles.input}>
         
             {errors.name && touched.name? <div  className={styles.registerDivInput}  >

<input name="name"
            type="text"
            placeholder="Verify Code "
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}

></input>
</div>:<div className={styles.registerDivInput11}>

<input name="name"
            type="text"
            placeholder="Verify Code "
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}

></input>
</div>
}
<span style={{color:'red',display:'flex',justifyContent:'flex-start'}}>{errors.name && touched.name && (
            <div id="in" className="input-feedback">{errors.name}</div>
          )}</span> 

          

 <div  className={styles.divButton}> <Button text='Cancel' className={styles.button1}/>  <Button text ='Verify'
  className={styles.button}/></div>
</form>
        
           </div>
           
          
            </div>
            </div>
          
        </div>
  )
}}
</Formik>
)

export default Variety