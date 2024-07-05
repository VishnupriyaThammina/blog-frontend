import { Grid, Typography } from '@mui/material'
import React from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
function Navbar() {
  return (
  <>
  <Grid container className='n-wrap'>
<Grid item className='n-w-1 '>
  <Grid container>
<Grid item  className='nw1'>
<Typography variant='h6'>Blogg</Typography>
</Grid> 

<Grid item  className='nw1-1'>
<Typography variant='h6'>Feed</Typography>
</Grid> 

<Grid item  className='nw1-1'>
<AddBoxOutlinedIcon/>

</Grid> 
<Grid item  className='nw1-1'>
  <AccountCircleRoundedIcon/>
</Grid> 
 </Grid>
</Grid>
  </Grid>
  </>
  )
}

export default Navbar