import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import {React,useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {
    const [showpassword1,setShowPassword1]=useState('password');
    const [showpassword2,setShowPassword2]=useState('password');
    const [np, setNp] = useState('')
    const [cp, setCp] = useState('')

    const showpasswordhandle=()=>{
       if(showpassword1==='password' && showpassword2==='password'){
        setShowPassword1('text');
        setShowPassword2('text');

       } else{
        setShowPassword1('password')
        setShowPassword2('password')

       }
    }

    const {id} = useParams();
const navigate = useNavigate()


 const reset = async () => {
    try {

    
      

      const response= await axios.post('http://localhost:3030/user/reset',{
        token:id,
        np:np,
        cp:cp
      });

      if(response.status===200){
        navigate('/updated-password')
        window.location.reload();
      }
    


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
            <p>Please enter a new password and submit to update your password </p>

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
                        label="new password"
                        variant="filled"
                        id="new-password"
                        type={showpassword1}
                        name="new-password"
                        sx={{width:"100%"}}
                        onChange={(e) => setNp(e.target.value)}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
        </Grid>
        <Grid item container className='form-items'>
        <TextField
                        label="confirm password"
                        variant="filled"
                        id="password"
                        type={showpassword2}
                        name="password"
                        sx={{width:"100%"}}
                        onChange={(e) => setCp(e.target.value)}

                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
                      
        </Grid>
        <Grid container  className='form-items'>
        <input type="checkbox" onClick={showpasswordhandle}/>Show Password
        </Grid>

        <Grid container className='form-items'>
       

         
            <button onClick={reset} className='btn' style={{width:'100%'}}>
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

export default ResetPassword