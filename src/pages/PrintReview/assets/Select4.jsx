import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DescriptionIcon from '@mui/icons-material/Description';

export default function PageSizeSelect() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 320 }}>
        <Select
          value={type}
          onChange={handleChange}
          displayEmpty
          variant='outlined'
          sx={{
            paddingLeft: 0, 
            borderWidth: 1, 
            borderRadius: 2, 
            outlineStyle: 'solid', 
            outlineColor: 'black',
            textAlign: 'left',  
        }}
        >
          <MenuItem value={1}><DescriptionIcon/>A3</MenuItem>
          <MenuItem value=""><DescriptionIcon/>A4</MenuItem>
          <MenuItem value={2}><DescriptionIcon/>A5</MenuItem>
          <MenuItem value={3}><DescriptionIcon/>Letter</MenuItem>
          <MenuItem value={4}><DescriptionIcon/>Letter small</MenuItem>
        </Select>   
      </FormControl>
    </div>
  );
}