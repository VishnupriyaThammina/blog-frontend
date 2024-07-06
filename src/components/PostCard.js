import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img1 from '../Assets/images/articles.jpg'
function PostCard() {
    const [owner,setOwner]=useState(false)

  return (
    <>
    <Grid className='p-wrap'>
<Grid className='p-w-1'>
    <Grid container className=' pw1-w'>
          {/* area for img */}
    <Grid item className='pw1-img '>
<Grid className='pw12-1 '>
    <img className='img-post' src={img1} alt='pst ing'/>
</Grid>

</Grid>
{/* area for text */}
<Grid item className='pw1-ta '>
    {/* headding */}
    <Grid container className=' pwta-w'>
    <Grid className=' pwta-1'>
<Typography variant='h5' sx={{fontWeight:700}}>
    lorem ladkf lakdjhf  ldfjh ksdjfh skjdf hkjasdhf skjdf h
</Typography>  </Grid>
<Grid className=' pwta-2'>
<Typography variant='body' >
    lorem ladkf lakdjhf  ldfjh ksdjfh skjdf hkjasdhf    lorem ladkf lakdjhf  ldfjh ksdjfh skjdf hkjasdhf skjdf h skjdf h
</Typography>  </Grid>
<Grid  className=' pwta-3'>
    <Grid container className='pwta-3-1'>
<Grid className='pwta-btn'>
   <button className='btn'>Read more</button>
</Grid> 
{
    owner &&(
        <>
       
<Grid className='pwta-btn'>
   <button className='btn-1'>Edit</button>
</Grid>
<Grid className='pwta-btn'>
   <button className='btn-3'>Delete</button>
</Grid> </>
    )
}

</Grid>

</Grid>
    </Grid>
</Grid>
  

    </Grid>
    
    </Grid>
</Grid>
  
    </>
  )
}

export default PostCard