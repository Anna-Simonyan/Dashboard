import React from 'react'
import vector1 from '../../assets/Images/vctor1.png'
import basket from '../../assets/Images/basket.png'
import select from '../../assets/Images/select.png'
import './Dashboard.scss'
import Progress from '../../components/Progress'

const Dashboard = () => {
    
  return (


    <div  className='mainContainerDash'>
          
         <div className='mainContainerDivDash'>
<p className='pDasboardDash' >Dashboard</p>
<div className='divMainDash' >
    <div className='divMain1Dash' >
        <div className='divVectorDash' ><span ><img src={vector1} alt="" /></span> <div className='divProgressDash'>Forms in Progress</div></div>
        <div className='divMainPDash'>12345</div>
    </div>
    <div  className='divMain1Dash'> <div className='divVectorDash'><span style={{ background:'#F4B42A'}} ><img src={basket} alt="" /></span> <div className='divProgressDash' >Forms in Cart</div></div>
        <div className='divMainPDash'>12345</div></div>
    <div  className='divMain1Dash'> <div className='divVectorDash'><span style={{ background:'#13BF44'}}><img src={select} alt="" /></span> <div className='divProgressDash'>Filed Forms </div></div>
        <div className='divMainPDash'>12345</div></div>
</div>
<div className='divReadyDash'>Ready to file a new form?</div>
 <div ><Progress/></div>

</div>
    </div>
  )
}

export default Dashboard