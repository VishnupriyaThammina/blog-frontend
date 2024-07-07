import { Grid, Typography } from '@mui/material'
import React from 'react'
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import img1 from '../Assets/images/blogg-no-bg.png';
import { Link , Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
function Navbar({setAuth}) {
  const navigate =useNavigate();
  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
      localStorage.removeItem('token');
      setAuth(false);
      navigate('/login');
    } catch (error) {
      console.error("Error in logging out", error);
    }
  };
  return (
  <>
  <Grid container className='n-wrap'>
<Grid item className='n-w-1 '>

  <Grid container className='nw-b-1'>
  <Grid item  className='nw1'>
    <Link to='/' className='Link'>


<p className='logo-p'>Blogg</p>
  
</Link>
</Grid> 
<Grid item  className='nw1-1'>
<Link to='/feed' className='Link'>

<ArticleRoundedIcon  fontSize='small'/>
</Link>
</Grid> 

<Grid item  className='nw1-1'>
<Link to='/create' className='Link'>

<BorderColorRoundedIcon fontSize='small'/>
</Link>
</Grid> 
<Grid item  className='nw1-1'>
<Link to='/profile' className='Link'>
  
  <AccountCircleRoundedIcon  fontSize='small'/>
  </Link>
</Grid> 
<Grid item  className='nw1-1'>

  
  <LogoutRoundedIcon onClick={handleLogout}  fontSize='small'/>

</Grid> 
 </Grid>
</Grid>
  </Grid>
  </>
  )
}

export default Navbar