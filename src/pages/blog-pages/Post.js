import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../components/Navbar';
import { Grid, Skeleton, TextField, Typography } from '@mui/material';
import img1 from '../../Assets/images/articles.jpg'
import Popup from '../../components/Popup'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post({setAuth}) {
    const [owner,setOwner]=useState(true)
    const [isOpen,setOpen] = useState(false)
    const [pop,setPop] = useState('')
    const [link,setLink] = useState('')
    const {id} = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log('Component mounted');
        const GetPost = async () => {
          try {
            const token = localStorage.getItem('token');
    
            if (!token) {
              console.error('Token not available');
              return;
            }
    
            const response = await axios.post('http://localhost:3030/post/get-full-post',{postid:id}, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
    
          setData(response.data.post)
          setOwner(response.data.owner)
          } catch (error) {
            console.error('Error fetching recent data:', error);
            setLoading(false);
          }
        };
    
        GetPost();
      }, []);
    
      useEffect(() => {
        console.log('Data updated:', data);
      }, [data]); // Run whenever data changes
    
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

useEffect(()=>{

},[owner])
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
<Grid container className='label-img'> 
                    <img src={data.thumbnail} alt='add image' className='img-thumb-create'/>
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
   {data.title ||  <Skeleton variant='body' /> }
</Typography>
</Grid>
<Grid container>
    {/* blog sub title */}
<Typography variant='body'>
   {data.subTitle || <Skeleton variant='body' />  }
</Typography>
</Grid>
        {/* blog contents */}
    <Grid container className='react-quill'>
        <Grid item container className='react-quill'>
      {data.content ||  <Skeleton variant='body' /> }
        </Grid>


    </Grid>
  
    </Grid>
    

    </Grid>
    </Grid>

</>
  )
}

export default Post