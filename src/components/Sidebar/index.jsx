import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import FolderIcon from '@mui/icons-material/Folder';
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Sidebar = ({text}) => {
  const [age, setAge] = useState('');
  const [ isOpen,setOpen]=useState(false)
  const [ isOpen1,setOpen1]=useState(false)

  return (
    <div className={styles.sidebarContainer}>
    <div className={styles.divDashboardContainer}>
<div className={styles.divDashboard}>
  <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/dashboard'>  <div className={styles.divDashboard1}><div className={styles.divIcon}><DashboardIcon/></div> Dashboard</div></NavLink>
 <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/payers'>  <div className={styles.divDashboard1}><div className={styles.divIcon}><GroupsIcon/></div> Payers</div></NavLink> 
 <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/filings'> 
  
  
  <div className={ styles.divDashboard2}><div className={styles.divIcon}><FolderIcon /></div >
  <div>
    Filings 

    </div> 
       </div>
     
       <div className={styles.arrowDiv} >< ArrowDropDownIcon onClick={()=> setOpen(!isOpen)}/></div>
        </NavLink> 
       
       <div className={ isOpen ? styles.divDas1 : styles.divDas} >
<ul  >
  <NavLink exact='true' className={({ isActive }) => (isActive ? styles.a: styles.aa )} to ='/field'> <li>Field Forms</li></NavLink>
  <NavLink exact='true' className={({ isActive }) => (isActive ? styles.a: styles.aa )} to ='/startField'>   <li>Start Filing</li></NavLink>
  <NavLink exact='true' className={({ isActive }) => (isActive ? styles.a: styles.aa )} to ='/filings'>  <li>Progress</li></NavLink>
  <NavLink exact='true' className={({ isActive }) => (isActive ? styles.a: styles.aa )} to ='/myCart'>  <li>My Cart</li></NavLink>
  </ul>
  
  </div> 
   
  <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/reports'>  <div className={styles.divDashboard2}><div className={styles.divIcon}><i class="fa fa-bar-chart" aria-hidden="true"></i></div> 
  Reports 
 
    
</div>
<div className={styles.arrowDiv} >< ArrowDropDownIcon onClick={()=> setOpen1(!isOpen1)}/></div>
</NavLink>


   <div className={ isOpen1 ? styles.divDas1 : styles.divDas}>
<ul>
<NavLink exact='true' className={({ isActive }) => (isActive ? styles.a: styles.aa )} to ='/summary'> <li>Summary Report</li></NavLink>
<NavLink exact='true' className={({ isActive }) => (isActive ? styles.a: styles.aa )} to ='/totals'><li>Totals Report</li></NavLink>

</ul>

</div> 


</div>

    </div>
    <Outlet/>
    </div>
  )
}

export default Sidebar