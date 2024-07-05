import { Button, Grid, TextField, Typography } from '@mui/material'
import {React,useState} from 'react';

function Register() {

  
    const [showpassword,setShowPassword]=useState('password');
    const showpasswordhandle=()=>{
       if(showpassword==='password'){
        setShowPassword('text')
       } else{
        setShowPassword('password')
       }
    }
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
            <p>Register with your Email </p>

            </Grid> 
            </Grid>
            </Grid>
        
        </Grid>
        </Grid>
        {/* ui area for login text inputs  */}
        <Grid item className='wrap2-2 '>

    <Grid item  className='wrap-form'>
    <Grid container >
    
        <Grid item container  className='form-items'>
        <TextField
                        label="email"
                        variant="filled"
                        id="email"
                        type="email"
                        name="email"
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
        </Grid>
        <Grid item container className='form-items'>
        <TextField
                        label="password"
                        variant="filled"
                        id="password"
                        type={showpassword}
                        name="password"
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
                      
        </Grid>
        <Grid container  className='form-items'>
        <input type="checkbox" onClick={showpasswordhandle}/>Show Password
        </Grid>
        <Grid container className='form-items'>
            <button className='btn' >
                Register
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

export default Register