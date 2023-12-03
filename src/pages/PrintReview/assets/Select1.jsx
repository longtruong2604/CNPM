import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

export default function Print_page_select() {
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
          <MenuItem value=""><FileCopyIcon/>In tất cả trang</MenuItem>
          <MenuItem value={1}><DescriptionIcon/>In trang hiện tại</MenuItem>
          <MenuItem value={2}><ArticleOutlinedIcon/>In trang chẵn</MenuItem>
          <MenuItem value={3}><ArticleRoundedIcon/>In trang lẻ</MenuItem>
          <MenuItem value={4}><FileCopyOutlinedIcon/>In tùy chọn</MenuItem>
        </Select>   
      </FormControl>
    </div>
  );
}