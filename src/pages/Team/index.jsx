import React from 'react'
import arrow from '../../assets/Images/arrow.png'
import { useNavigate } from 'react-router-dom'
import chechk from '../../assets/Images/check.png'
import  './Team.scss'
import SelectLabels from './components'
import Button from '../../components/Button'

const Team = () => {
    const navigate = useNavigate()
  return (
    <div className='filingsDivContainer'>
<div className='mainContainerDiv'>
        <div className='divFilings'>
            <img src={arrow} alt=""  onClick={()=>navigate('/account')}/>
            <div>Back to My Account</div>
        </div>
        <div className='divBassic'>
            <div>
                Bassic
<p className='divBassicP'>The core efiling experience, included for all</p>

<div className='divUser'>1 user included </div>
<div className='divFree'>Free</div>
<div className='divCarrent'>
Carrent Plan
</div>
<div className='divCarrent1'></div>
<div>
<div className='divPayContainer'>
    <div style={{width:'34px'}}><img src={chechk } alt="" /></div>
<div>
<p className='divPay'>Pay‑as‑you‑go TIN Matching
<p className='divPay1'> $1.00 per TIN Match Request</p>
</p>

</div>

</div>
<div className='divPayContainer'>
    <div style={{width:'34px'}}><img src={chechk } alt="" /></div>
<div>
<p className='divPay'>Pay‑as‑you‑go TIN Matching
<p className='divPay1'> $1.00 per TIN Match Request</p>
</p>

</div>

</div>
</div>
            </div>
          
            <div>
                <div className='divPlus'>Plus<span className='span'> Most popular</span></div>
                
                <p className='divBassicP'>Save time and money with additional features </p>

<SelectLabels/>
<div className='divFree1'>$149  <span>/year</span></div>
<Button text='Buy Now' className='buttonTeams' onClick={()=> navigate('/checkout')}/>

<div className='divCarrent11'></div>



<div className='divPayContainer'>
<div style={{padding:'10px'}}><img src={chechk } alt="" style={{ marginBottom:' 28px'}} /> </div> 
<div>
 <p className='divFreeTinP'>FREE TIN Matching</p> 
<p className='divFreeTinP1'>All Payers and Recipients receive TIN matching up until 48 hrs before the e‑filing deadline</p> 
</div>
   
   </div>

   <div className='divPayContainer'>
    <div style={{width:'34px'}}><img src={chechk } alt="" /></div>
<div>
<p className='divPay'>10 Users Included
<p className='divPay1'> Ideal for teams, includes shared billing</p>
</p>

</div>

</div>

<div className='divPayContainer'>
    <div style={{width:'34px'}}><img src={chechk } alt="" /></div>
<div>
<p className='divPay'>Plus, all Basic features and benefits

</p>

</div>

</div>
<div className='divPayContainer'>
    <div style={{width:'34px'}}><img src={chechk } alt="" /></div>
<div>
<p className='divPay'>
You are included in the total number of the team members

</p>

</div>

</div>

                </div>
               
        </div>
        </div>
       
        <div className='divBorder'></div>
        <div className='divAlwaysTitle'>Always included:</div>
        <div className='divAlways'>
        <div className='divAlways1'>Available Forms</div>
        <div className='divAlways2'>2021 Form 1099-MISC , 2021 Form 1099-NEC , 2021 Form W-2 , 2021 Form 1099-B , 2021 Form 1099-C, 2021 Form 1099-INT , 2021 Form 1099-R , 2021 Form 1099-DIV , 2021 Form 1099-S , 2021 Form W-2C, 2021 Form 1099-MISC Correction , 2021 Form 1099-NEC Correction , 2021 Form 1098 Correction</div>
        </div>

        <div className='divAlways'>
        <div className='divAlways1'>Filing Methods</div>
        <div className='divAlways2'>All‑Inclusive E‑File, Print & Mail; Print & Mail Only; E‑File Only (see pricing)</div>
        </div>

        <div className='divAlways'>
        <div className='divAlways1'>TIN Matching</div>
        <div className='divAlways2'>Pay‑as‑you‑go (see pricing)</div>
        </div>

        <div className='divAlways'>
        <div className='divAlways1'>Data Management</div>
        <div className='divAlways2'>Guided form experiences and bulk editing</div>
        </div>

        <div className='divAlways'>
        <div className='divAlways1'>Import Options & Integrations</div>
        <div className='divAlways2'>QuickBooks Online, QuickBooks Desktop, Xero, Excel Templates</div>
        </div>

        <div className='divAlways'>
        <div className='divAlways1'>Recordkeeping & Storage</div>
        <div className='divAlways2'>At least 4 years</div>
        </div>

        <div className='divAlways'>
        <div className='divAlways1'>Security</div>
        <div className='divAlways2'>SOC‑2 certified facility</div>
        </div>
    </div>

  
  )
}

export default Team