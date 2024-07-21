import { Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Popup(props) {
const navigate = useNavigate();


        const DeletePost = async () => {
          try {
            const token = localStorage.getItem('token');
    
            if (!token) {
              console.error('Token not available');
              return;
            }
            
    
            await axios.post('https://blog-backend-delta-two.vercel.app/post/delete-post',{postid:props.post._id}, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            navigate('/');
            window.location.reload();
      
          } catch (error) {
            console.error('Error fetching recent data:', error);
          }
        };
    
       
    function handleAPI(){
        if(props.popText=='Delete'){
            DeletePost() 
        }else{
            navigate(`/edit/${props.post._id}`)
            window.location.reload()
        }
    }
    
  return (
    <>


   
       <Grid container className="popup-box">
      <Grid  className="box">
 <Grid container  className='pop-center'>
    <Grid container item className='textarea-pop'>
        <Typography variant='body'>
            Do you want to {props.popText} this blogg?
        </Typography>
    </Grid>
    <Grid item container className='pop-center btn-pops'>
        <Grid  className='btn-wr-p'>

      
        <Grid item className='p-w-b' >
            <Grid item>
            <button className='btn-3' onClick={props.handleClose}>Close</button>

            </Grid>
        </Grid>
        <Grid item className=' p-w-b'>
            <Grid item>
                <Link to={props.link}>
                
            <button className='btn' onClick={handleAPI}>{props.popText}</button>
            </Link>

            </Grid>
        </Grid>  </Grid>
    </Grid>
 </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default Popup