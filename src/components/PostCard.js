import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img1 from '../Assets/images/articles.jpg'
import Popup from './Popup'
import { Link } from 'react-router-dom'
function PostCard() {
    const [owner,setOwner]=useState(true)
    const [isOpen,setOpen] = useState(false)
    const [pop,setPop] = useState('')
    const [link,setLink] = useState('')

function toggleOpen(){
setOpen(true)
}
function toggleClose(){
    setOpen(false)
    }

function deletePop(){
    setPop('Delete')
    setLink('/profile')
    toggleOpen()

}
function EditPop(){
    setPop('Edit')
    setLink('/edit')
    toggleOpen()
}
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
 How to create a simple  pop up in React and Material ui?  </Typography></Grid>
<Grid className=' pwta-2'>
<Typography variant='body' >
   this is a detailed blog 
</Typography>  </Grid>
<Grid  className=' pwta-3'>
    <Grid container className='pwta-3-1'>
<Grid className='pwta-btn'>
    <Link to='/post' style={{width:'100%'}}>
   <button className='btn'>Read more</button>
   </Link>

</Grid> 
{
    owner &&(
        <>
       
<Grid className='pwta-btn'>
   <button onClick={EditPop} className='btn-1'>Edit</button>
</Grid>
<Grid className='pwta-btn'>
   <button className='btn-3' onClick={deletePop}>Delete</button>
</Grid> </>
    )
}

{
    isOpen && (
        <>
        <Popup handleClose={toggleClose} popText={pop} link={link}/>
        </>
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