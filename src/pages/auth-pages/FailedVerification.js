import { Button, Grid, TextField, Typography } from '@mui/material'
import {React,useState} from 'react';
import { Link } from 'react-router-dom';

function FailedVerification() {

 
  return (
   <>
   {/* over all wrap 1 */}
   <Grid  className='wrap '>
        {/* overall wrap 2 */}
    <Grid   className='wrap2  '>
        <Grid container item className='wrap3' >

      
        {/* ui area for login side image */}
        <Grid  item className='wrap-ver bg-failed '>
        <Grid container item className='wrap2-1-text'>
            <Grid container item className='w2-t-h2'>
           
            <Grid container item className='w2-tt'>
           <Grid  item container className='w2-tt-1' sx={{height:'100%'}} >
            
            <Typography variant='h4'>Blogg</Typography>
            </Grid> 
            <Grid  item container className=''>
            <p >Email verification has failed, please try registering again </p>

            </Grid> 
            <Grid  item container className='w2-tt-2'>
                <Link to='/register'>
           <button className='btn-white'>Register</button>
           </Link>
           
            </Grid> 
            </Grid>
            </Grid>
        
        </Grid>
        </Grid>
        {/* ui area for login text inputs  */}
    
     

        </Grid> 
    </Grid>
   </Grid>
   </>
   
)
}

export default FailedVerification