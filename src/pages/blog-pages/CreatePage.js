import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../components/Navbar';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function CreatePage({setAuth}) {
    const [img, setImg] = useState('')
    // for image preview
    function handleImage(e){
setImg(URL.createObjectURL(e.target.files[0]))
    }
  return (
<>
<Navbar setAuth={setAuth}/>

        {/*Rich text editor */}
<Grid conatiner className='wrap-1-h'>
<Grid item className='wrap-hp'>
    <Grid container>
        {/* add thumbnail image  */}
        <Grid container className='img-w-c'>
            <Grid item className='add-img'>
                <label for='img'><Grid container className='label-img'> 
                    <img src={img} alt='add image' className='img-thumb-create'/>
                    </Grid></label>
                <input type='file' onChange={handleImage} className='inp-img' name='img' id='img'></input>
            </Grid>
        </Grid>
{/* text title and sub ntitle  */}
<Grid container>
    
<TextField
                        label="title"
                        variant="filled"
                        id="title"
                        type="text"
                        name="title"
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
</Grid>
<Grid container>
    
<TextField
                        label="sub title"
                        variant="filled"
                        id="sub-title"
                        type="text"
                        name="sub-title"
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
</Grid>
        {/* rich text editor */}
    <Grid container className='react-quill'>
        <Grid item container className='react-quill'>
        <ReactQuill
  style={{ width: '100%',height:'100%', fontFamily: "'Arial', sans-serif" }}
/>
        </Grid>


    </Grid>
    <Grid container className='btn-g-c'>
        <Link to='/profile' style={{width:'100%'}}>
    <button className='btn'>
        Post
    </button>
    </Link>

</Grid>
    </Grid>
    

    </Grid>
    </Grid>
</>
  )
}

export default CreatePage