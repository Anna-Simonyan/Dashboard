import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../../../data';

export default function CountrySelect() {
  return (
    <Autocomplete
      id="country-select-demo"
   
    sx={{ width: '260px',
        height: '44px',
        border: '1px solid #BFBFBF',
        borderRadius: '10px'}}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label=" country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', 
            
          }}
        />
      )}
    />
  );
}


