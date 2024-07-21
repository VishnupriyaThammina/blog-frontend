import { Button, Grid, TextField, Typography } from '@mui/material'
import {React,useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {
const [email,setEmail] = useState('')
const [username,setUsername]= useState('')
const [password,setPassword]=useState('')
const [btnOk,setBtnOk] =useState(false);
const [showpassword,setShowPassword]=useState('password');
const navigate = useNavigate();

  //   form validation
  useEffect(() => {
    validateForm(); // keep validating form for any change in email or password
  }, [email, password,username]);

  const validateForm = () => {
    const emailValid = validateEmail(email); // if there exists an email
    const passwordValid = password!== ''; //if password is not null
    setBtnOk(emailValid && passwordValid);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleRegister = async () => {
    try {
        // sending http request to backend
      const response = await axios.post('https://blog-backend-delta-two.vercel.app/auth/register', {
        email,
        password,
        username,
        
      });

  
      navigate('/checkmail');
    } catch (error) {
      console.error('register failed', error);
      navigate('/login')
    }
  };

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
    <Grid container className='inner-wrap' >
    
        <Grid item container  className='form-items'>
        <TextField
                        label="email"
                        variant="filled"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        name="email"
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
        </Grid>
        <Grid item container  className='form-items'>
        <TextField
                        label="username"
                        variant="filled"
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        name="username"
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
                        onChange={(e) => setPassword(e.target.value)}

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
            
            <button className='btn'  disabled={!btnOk} onClick={handleRegister}>
                Register
            </button>
        </Grid>
        <Grid container className='form-items'>
      
      <Typography variant='body'> Already have an account? then
       
       <Link to='/login'  className='link-login'>
       Login
       </Link>
        </Typography> 
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