import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../components/Navbar';
import { Grid, TextField, Typography } from '@mui/material';
import img1 from '../../Assets/images/articles.jpg'
import Popup from '../../components/Popup'

function Post() {
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
<Navbar/>

        {/*Rich text editor */}
<Grid conatiner className='wrap-1-h'>
<Grid item className='wrap-hp'>
    <Grid container>
        {/* add thumbnail image  */}
        <Grid container className='img-w-c'>
            <Grid item className='add-img'>
<Grid container className='label-img'> 
                    <img src={img1} alt='add image' className='img-thumb-create'/>
                    </Grid>
            </Grid>
        </Grid>
        <Grid container className='btns-wrap-post' >
        {
    owner &&(
        <>
       <Grid  className='btns-post-page'>

<Grid className='post-btn-1'>
   <button onClick={EditPop} className='btn-1'>Edit</button>
</Grid>
<Grid className='post-btn-1'>
   <button className='btn-3' onClick={deletePop}>Delete</button>
</Grid> 
</Grid>

</>
    )
}
</Grid>

{
    isOpen && (
        <>
        <Popup handleClose={toggleClose} popText={pop} link={link}/>
        </>
    )
}
{/* text title and sub ntitle  */}
<Grid container className='heading'>
    {/* blog title   */}
<Typography variant='h4' sx={{fontWeight:'600'}}>
    Hi welcome to my application 
</Typography>
</Grid>
<Grid container>
    {/* blog sub title */}
<Typography variant='body'>
    Hi welcome to my application 
</Typography>
</Grid>
        {/* blog contents */}
    <Grid container className='react-quill'>
        <Grid item container className='react-quill'>
      sdfgdsfmgsdk
        </Grid>


    </Grid>
  
    </Grid>
    

    </Grid>
    </Grid>

</>
  )
}

export default Post