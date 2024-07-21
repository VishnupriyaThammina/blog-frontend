import { Button, Grid, TextField, Typography } from '@mui/material'
import {React,useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios'
function Login({setAuth}) {
    const navigate = useNavigate();
    const [showpassword,setShowPassword]=useState('password');
    // use state hook for validating form elements 
  // hook for button check
  const [btnOk,setBtnOk] =useState(false);
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

//   form validation
  useEffect(() => {
    validateForm(); // keep validating form for any change in email or password
  }, [email, password]);

  const validateForm = () => {
    const emailValid = validateEmail(email); // if there exists an email
    const passwordValid = password!== ''; //if password is not null
    setBtnOk(emailValid && passwordValid);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleLogin = async () => {
    try {
        // sending http request to backend
      const response = await axios.post('https://blog-backend-delta-two.vercel.app/auth/login', {
        email,
        password,
      });
      console.log('response: ',response.data.token)
      const  token  = response.data.token;
      localStorage.setItem('token', token); // set the token got as response in local storage
      setAuth(true); // if auth set to true we can access the application 
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
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
            <p>Login with your Email </p>

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
                        id="email"
                        type="email"
                        name="email"
                        sx={{width:"100%"}}
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
                      
        </Grid>
        <Grid container  className='form-items'>
        <input type="checkbox" onClick={showpasswordhandle}/>Show Password
        </Grid>
        <Grid container className='form-items'>
            <Link to='/'  style={{width:'100%'}}>
            {/* if button is not disabled we can send request to server */}
            <button className='btn' disabled={!btnOk} onClick={handleLogin}  >
                Login
            </button>

            </Link>

        </Grid>
        <Grid container className='form-items'>
        <Link to='/reset-password' className='link-login'>
        Forgot password?
        </Link>   or
        <Link to='/register'  className='link-login'>
        Create new account
        
        </Link>
        </Grid>
        </Grid>    
    </Grid>

        </Grid>  </Grid>
    </Grid>
   </Grid>
   </>
  )
}

export default Login