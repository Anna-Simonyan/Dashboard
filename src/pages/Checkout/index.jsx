import React from 'react'
import arrow from '../../assets/Images/arrow.png'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import visa from '../../assets/Images/visa.png'
import v from '../../assets/Images/v.png'
import sel from '../../assets/Images/sel.png'
import './Checkout.scss'
import CountrySelect from './componens';
import Button from '../../components/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Checkout = () => {
    const navigate=useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
  
    <div className='filingsDivContainer1'>
    <div className='mainContainerDiv'>
            <div className='divFilings'>
                <img src={arrow} alt=""  onClick={()=>navigate('/account')}/>
                <div>Back to My Account</div>
            </div>
           
            </div>
            <div className='divCheckoutText'>Checkout</div>
                 <div className='divTextP'><p className='divText'> Save time by importing your forms via Excel or using one of our software integrations below. If using Excel, download the template below, enter your data, and then select the file to import. </p></div>
               
           
                
            <div className='divCheckout'>
           
                <div style={{display:'flex'}}>
                   
                    <div className='divInput'>
                    <p className='divBillingP'>Billing Contact</p>
                    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
        flexWrap: 'wrap',
      }}
    >
      <TextField
        
        id="demo-helper-text-misaligned"
        label="First Name"
        sx={{
            width: '260px',
            height: '44px',
            border: '1px solid #BFBFBF',
            borderRadius: '10px'}}
      />
          <TextField
        
        id="demo-helper-text-misaligned"
        label="Last Name"
        sx={{
            width: '260px',
            height: '44px',
            border: '1px solid #BFBFBF',
            borderRadius: '10px'}}
      />
       <TextField
         sx={{
            width: '260px',
            height: '44px',
            border: '1px solid #BFBFBF',
            borderRadius: '10px'}}
        id="demo-helper-text-misaligned"
        label="Email"
      />
       <TextField
        
        id="demo-helper-text-misaligned"
        label="Phone Number"
        sx={{
            width: '260px',
            height: '44px',
            border: '1px solid #BFBFBF',
            borderRadius: '10px'}}
      />
   
    <p className='divBillingP'>Billing Address</p>
 
      <TextField fullWidth label="Company name" id="fullWidth"
      sx={{
        width: '549px',
        height: '44px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px'}} />
      <TextField fullWidth label="Street Address 1" id="fullWidth" 
       sx={{
        width: '549px',
        height: '44px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px'}}/>
      <TextField fullWidth label="Street Address 2" id="fullWidth" 
       sx={{
        width: '549px',
        height: '46px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px'}}/>

      <div style={{display:'flex'}}>
    <TextField
        sx={{ width: '260px',
        height: '44px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px',marginRight:'1.8em'}}
        id="demo-helper-text-misaligned"
        label="City"
        
      />
      
      <CountrySelect  />
    </div>
    <div style={{display:'flex'}}>

    <CountrySelect  />
    <TextField
       sx={{ width: '260px',
       height: '44px',
       border: '1px solid #BFBFBF',
       borderRadius: '10px',marginLeft:'1.8em'}}
        id="demo-helper-text-misaligned"
        label="Zip/Postal Code"
      />

    </div>
    <p className='divBillingP'>  Payment Method</p>


     <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
       
      >
        <div style={{display:'flex',}}>
        <div className='divRadio'><FormControlLabel  value="female" control={<Radio />} label="Credit Card" /><span><img src={v} alt="" className='imgV'/><img src={visa} alt="" className='imgV1'/></span>
        <span style={{display:'flex'}}><div className='divCircl'></div><div className='divCircl1'><div className='divMasterCard'>mastercard</div></div></span> 
        
        </div>
       <div className='divRadio1'><FormControlLabel  value="male" control={<Radio />} label="Pay Pal" /><i className="fa fa-paypal" aria-hidden="true"></i></div>
        </div>
      </RadioGroup>
  
   
      <TextField fullWidth label="Cardholder name" id="fullWidth"
       sx={{
        width: '549px',
        height: '44px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px'}}/>
   <TextField
        type="date"
        id="demo-helper-text-misaligned"
        sx={{ width: '260px',
        height: '44px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px'}}
      />
   
          <TextField
        
        id="demo-helper-text-misaligned"
        label="CVC"
        sx={{ width: '260px',
        height: '44px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px'}}
      />
   
    </Box>

                    </div> 
                 
                </div>

                <div className='divSummary'>
                <div className='divSummary1'>
                <p>Summary</p>
                <div>
                    <div>Annual Plus Subscription - 10 Users </div>
                    <div>$149.00</div>
                    </div>
                    <div>
                <div>State Filing Fee</div>
                <div>$0.00</div>
                </div>
                <div>
                <div>Other Fees </div>
                <div>$0.00</div>
                </div>
                <div>
                <div>Estimated Tax</div>
                <div>$0.00</div>
                </div>
                <div>
                <div>Subtotal</div>
                <div>$149.00</div>
                </div>
                <div className='divBorder1'>

                </div> 
                <div className='divTotal'>
                    <div style={{color:'#0144F1'}}>Total</div>
                    <div style={{color:'#0144F1'}}>$149.00</div>
                </div>
                <div className='divP'>
                <p>
                Your subscription will automatically renew annually at the new total amount on the anniversary of your original purchase date using the credit card in your billing details.
                </p>
              
                </div>

                <div className='divP1'>
                <p className='pp'> By placing your order, you agree to our <span>Filing Terms.</span></p>  
                </div>
                
              <Button text='Buy Now ' className='but' onClick={handleOpen}/>
               
                </div>
               
                
            </div>

            </div>
           

           
            <Modal
          
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        
      >
        <Box sx={style}>
        <div className='divClose' onClick={handleClose}><i class="fa fa-times" aria-hidden="true"></i></div>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{
            fontSize: '25px',
            lineHeight: '38px', 
            textAlign: 'center',
            color: '#000000',
          }}>
          Your payment successful done
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{
             mt: 2 ,fontSize: '18px',
            lineHeight:' 28px',
            textAlign: 'center',
            color: '#555555',
            
}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </Typography>
          <div className='divCircleBorder'>
       <div className='divCircle'> 
       <img src={sel} alt="" />
       </div>  
       </div>
        </Box>
      </Modal>
         
            </div>
          
            
  )
}

export default Checkout