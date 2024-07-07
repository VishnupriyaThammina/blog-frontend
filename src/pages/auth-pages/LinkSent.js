import { Button, Grid, TextField, Typography } from '@mui/material'
import {React,useState} from 'react';
import { Link } from 'react-router-dom';

function LinkSent() {
  return (
    
   <>
   {/* over all wrap 1 */}
   <Grid  className='wrap '>
        {/* overall wrap 2 */}
    <Grid   className='wrap2  '>
        <Grid container item className='wrap3' >

      
        {/* ui area for login side image */}
        <Grid  item className='checkmail-wrap-b '>
        <Grid container item className='wrap2-1-text'>
            <Grid container item className='w2-t-h2'>
           
            <Grid container item className='w2-tt'>
           <Grid  item container className='w2-tt-1' sx={{height:'100%'}} >
            
            <Typography variant='h4'>Blogg</Typography>
            </Grid> 
            <Grid  item container className='w2-tt-2'>
            <p>Check your mailbox Reset you password </p>

            </Grid> 
            <Grid  item container className='w2-tt-2'>
                <Link to='/login'>
           <button className='btn-white'>Login</button>
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

export default LinkSent