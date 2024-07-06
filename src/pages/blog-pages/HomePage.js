import React from 'react'
import Navbar from '../../components/Navbar'
import { Grid, Typography } from '@mui/material'
import img1 from '../../Assets/images/articles.jpg';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
function HomePage() {
  return (
    <>

        <Navbar/>
        {/* banner image in home page ui */}
<Grid conatiner className='wrap-1-h'>
<Grid item className='wrap-hp'>
<Grid container item className='banner-img-wrap'>
<Grid  item className='bn-t'>
  <Grid container className='bn-t-1'>

  <Grid item container className='display-text-1' >
    <h3>Share your knowledge, Memories, Experiences, Just Blog it </h3>
  </Grid>
 
  <Grid item container className='display-btn-1' >
   <button className='btn-white'>Create Blog</button> </Grid>
  </Grid>
  </Grid>

</Grid>

</Grid>
</Grid>

{/* top 5 posts  */}
    
    <Grid container className='wrap-1-h'>
      <Grid item className='wrap-hp'>
     <Grid container className='wrap-2-h'>
<Grid container className='text-1-h4'>
  <Typography variant='h5' sx={{fontWeight:700}}>
    Recent blog posts
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

    <Footer/>
    </>
  )
}

export default HomePage