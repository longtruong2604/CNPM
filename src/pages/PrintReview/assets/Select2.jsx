import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleIcon from '@mui/icons-material/Article';

export default function PrintSelect1() {
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
          <MenuItem value=""><ArticleIcon/>In một mặt</MenuItem>
          <MenuItem value={1}><ArticleOutlinedIcon/>In hai mặt</MenuItem>
        </Select>   
      </FormControl>
    </div>
  );
}