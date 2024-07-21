import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import {React,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ResetPasswordMail() {
 const navigate = useNavigate()
 const [email,setEmail] =useState()
    const Reset = async () => {
        try {
    
        
          
    
          const response= await axios.post('https://blog-backend-delta-two.vercel.app/auth/reset-mail',{
            email
          });
          if(response.status===200){
          navigate('/checkmail');
          window.location.reload();
          }
          console.log(response)
    
        } catch (error) {
          console.error('Error fetching recent data:', error);
          navigate('/reset-password');
          window.location.reload();
        }
      };
    
  return (
   <>
   {/* over all wrap 1 */}
   <Grid  className='wrap '>
        {/* overall wrap 2 */}
    <Grid   className='wrap2  '>
        <Grid container item className='wrap3' >

      
        {/* ui area for login side image */}
        <Grid  item className='wrap2-1 '>
        <Grid container item className='wrap2-1-text'>
            <Grid container item className='w2-t-h2'>
           
            <Grid container item className='w2-tt'>
           <Grid  item container className='w2-tt-1' sx={{height:'100%'}} >
            
            <Typography variant='h4'>Blogg</Typography>
            </Grid> 
            <Grid  item container className='w2-tt-2'>
            <p>Please enter your associated mail id </p>

            </Grid> 
            </Grid>
            </Grid>
        
        </Grid>
        </Grid>
        {/* ui area for login text inputs  */}
        <Grid item className='wrap2-2 '>

    <Grid item  className='wrap-form'>
    <Grid container className='inner-wrap'>
    
        <Grid item container  className='form-items'>
        <TextField
                        label="Enter your email"
                        variant="filled"
                        id="email"
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
        </Grid>
       
       

        <Grid container className='form-items'>
        
         
            <button className='btn' onClick={Reset} style={{width:'100%'}}>
                Reset password
            </button>
         
            
      

        </Grid>

        </Grid>    
    </Grid>

        </Grid>  </Grid>
    </Grid>
   </Grid>
   </>
  )
}

export default ResetPasswordMail