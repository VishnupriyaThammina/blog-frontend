import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Popup(props) {
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
                
            <button className='btn'>{props.popText}</button>
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