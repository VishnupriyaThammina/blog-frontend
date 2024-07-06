import React from 'react'
import Navbar from '../../components/Navbar'
import { Grid, Typography } from '@mui/material'
import img1 from '../../Assets/images/articles.jpg';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
function FeedPage() {
  return (
   
    <>

        <Navbar/>
 
{/* top 5 posts  */}
    
    <Grid container className='wrap-1-h'>
      <Grid item className='wrap-hp'>
     <Grid container className='wrap-2-h'>
<Grid container className='text-1-h4'>
  <Typography variant='h5' sx={{fontWeight:700}}>
    All blog posts
  </Typography>
</Grid>
        <Grid container >
        <PostCard/>

        </Grid>
        <Grid container>
        <PostCard/>
      
        </Grid>
        <Grid container>
        <PostCard/>
      
        </Grid>
        <Grid container>
        <PostCard/>
      
        </Grid>

        </Grid>
      </Grid>
    </Grid>
    <Grid container className='wrap-1-h wrap-btn-load '>
    <Grid item className='wrap-hp '>
   <button className='btn-2'>Read more</button>
        
        </Grid></Grid>

    <Footer/>
    </>
  )
}

export default FeedPage