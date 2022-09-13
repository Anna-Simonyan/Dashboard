import React,{ useState,useRef} from 'react'
import styles from './Header.module.css'
import purple from '../../assets/Images/purple.png'
import rectangle from '../../assets/Images/rectangle.png'
import { useNavigate } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useOnClickOutside from '../useOnClickOutside';


const Header = () => {
  const ref = useRef();
 
const navigate= useNavigate()
 
  const [ isOpen,setOpen]=useState(false)
  useOnClickOutside(ref, () => setOpen(false));
const handleChange =()=>{
  setOpen(!isOpen)
}

  return (
    <div className={styles.header}>
        <div className={styles.divImg}>
<img src={purple } alt="" />
</div>
<div className={styles.divUser}>
<img src={rectangle} alt="" />
<div className={styles.divArrow}> <p>Username</p> <div>{!isOpen?<ArrowDropDownIcon onClick={()=> setOpen(!isOpen)} />:<ArrowDropUpIcon onClick={ handleChange}/>}</div>
<div className={ isOpen ? styles.divDas1 : styles.divDas}  ref={ref}  >


<ul >
<div><li style={{color:' #6F6F6F',}}>username@gmail.com</li></div>
<div onClick={()=> setOpen(!isOpen)}><li onClick={()=>navigate('/account')}>My Account</li></div>
<div onClick={()=> setOpen(!isOpen)}><li onClick={()=>navigate('/billing')}>Billing  Invoices</li></div>
<div onClick={()=> setOpen(!isOpen)}><li onClick={()=>navigate('/concat')}>Concat Us</li></div>
<div onClick={()=> setOpen(!isOpen)}><li>Log Out</li></div>

</ul>

</div>

</div>

</div>

    </div>
  )
}

export default Header