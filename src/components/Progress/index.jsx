import React from 'react'
import Button from '../../components/Button'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { names } from '../../data'
import './Progress.scss'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Progress = () => {
    const theme = useTheme();
      const [personName, setPersonName] = React.useState([]);
    
      const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          typeof value === 'string' ? value.split(',') : value,
        );
      };
  return (

<div>
<div className='divProgressContainer'>
<div className='divReady1Progress'>
<p className='divReadyP1Progress'>Forms in Progress</p>
<p className='divReadyPProgress'>Get started with a single form in our guided experience.</p>
<FormControl sx={{ m: 1, width: '94%', mt: 3,border: '1px solid #E5E5E5' }}>
<Select
  multiple
  displayEmpty
  value={personName}
  onChange={handleChange}
  input={<OutlinedInput />}
  renderValue={(selected) => {
    if (selected.length === 0) {
      return <em>Select Form</em>;
    }

    return selected.join(', ');
  }}
  MenuProps={MenuProps}
  inputProps={{ 'aria-label': 'Without label' }}
>
  <MenuItem disabled value="">

  </MenuItem>
  {names.map((name) => (
    <MenuItem
      key={name}
      value={name}
      style={getStyles(name, personName, theme)}
    >
      {name}
    </MenuItem>
  ))}
</Select>
</FormControl>

<div className='divShowSelectProgress'><div>Show Select</div></div>

</div>
<div className='divReady1Progress'>
<p className='divReadyP1Progress' >Import My Forms</p>
<p className='divReadyPProgress'>Use our Excel template to import your form data.</p>
<Button text='View Import Options' className= 'divReadyButtonProgres'/>
</div>
<div className='divReady1Progress'>
<p className='divReadyP1Progress'>Connect To Software</p>
<p className='divReadyPProgress'>Using your accounting software.

</p> 

<Button text='Select Your Software'  className= 'divReadyButtonProgres'/>
</div>
</div>
</div>
  )
}

export default Progress