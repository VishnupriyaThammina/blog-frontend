import { Grid, Typography } from '@mui/material'
import React from 'react'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import img1 from '../Assets/images/blogg-no-bg.png';
function Navbar() {
  return (
  <>
  <Grid container className='n-wrap'>
<Grid item className='n-w-1 '>
  <Grid container className='nw-b-1'>
<Grid item  className='nw1'>
  
<p className='logo-p'>Blogg</p>
</Grid> 

<Grid item  className='nw1-1'>
<ArticleRoundedIcon  fontSize='small'/>

</Grid> 

<Grid item  className='nw1-1'>
<BorderColorRoundedIcon fontSize='small'/>

</Grid> 
<Grid item  className='nw1-1'>
  <AccountCircleRoundedIcon  fontSize='small'/>
</Grid> 
<Grid item  className='nw1-1'>
  <LogoutRoundedIcon  fontSize='small'/>
</Grid> 
 </Grid>
</Grid>
  </Grid>
  </>
  )
}

export default Navbar