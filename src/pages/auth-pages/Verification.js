import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import {React,useEffect,useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Verification() {

 // rather than multiple things we will have only two 
 // if verification successfull 
 // green bg, login text and login link 
 // else black bg, register text
const {id} = useParams();
const navigate = useNavigate()


 const Verify = async () => {
    try {

    
      

      const response= await axios.post('https://blog-backend-delta-two.vercel.app/user/verify-token',{token:id});

      if(response.status===200){
        navigate('/verified')
        window.location.reload();
      }
    


    } catch (error) {
      console.error('Error fetching recent data:', error);
      navigate('/failed-verification');
      window.location.reload();
    }
  };

  Verify();


  return (
   <>
   {/* over all wrap 1 */}
   <Grid  className='wrap '>
        {/* overall wrap 2 */}
    <Grid   className='wrap2  '>
        <Grid container item className='wrap3' >

      
        {/* ui area for login side image */}
        <Grid  item className='wrap-ver checkmail-wrap-b  '>
        <Grid container item className='wrap2-1-text'>
            <Grid container item className='w2-t-h2'>
           
            <Grid container item className='w2-tt'>
           <Grid  item container className='w2-tt-1' sx={{height:'100%'}} >
            
            <Typography variant='h4'>Blogg</Typography>
            </Grid> 
            <Grid  item container className=''>
            <p >Email verification on the way... </p>

            </Grid> 
            <Grid  item container className='w2-tt-2'>
                
           <button className='btn-white' onClick={Verify}>Click to verify </button>
        
          
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

export default Verification