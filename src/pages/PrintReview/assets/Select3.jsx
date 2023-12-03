import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteIcon from '@mui/icons-material/Note';

export default function PageOriSelect() {
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
          <MenuItem value=""><DescriptionIcon/>Giấy hướng dọc</MenuItem>
          <MenuItem value={1}><NoteIcon/>Giấy hướng ngang</MenuItem>
        </Select>   
      </FormControl>
    </div>
  );
}