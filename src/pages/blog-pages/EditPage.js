import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../components/Navbar';
import { Grid, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditPage({setAuth}) {
    const [img, setImg] = useState('')
    const {id} = useParams();
    const [data, setData] = useState({});
    const [thumbnailUrl, setThumbnailUrl] = useState(null);
    const [error, setError] = useState(null);
    const [title,setTitle] = useState();
    const [subtitle,setSubtitle] = useState();
    const [content, setContent] = useState('');
    const navigate= useNavigate();
    const cloudinaryCore = {
        cloud_name: 'du2yn8mun',
      };
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
          } catch (error) {
            console.error('Error fetching recent data:', error);
          }
        };
    
        GetPost();
      }, []);
    
      useEffect(() => {
        console.log('Data updated:', data);
        setThumbnailUrl(data.thumbnail);
        setContent(data.content);
        setTitle(data.title);
        setSubtitle(data.subTitle)
      }, [data]); 
    // for image preview
// api request to cloudinary for converting image to url 
const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'bykocw5t');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinaryCore.cloud_name}/image/upload`,
        formData
      );
      setThumbnailUrl(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image');
    }
  };


  // end point for edit 
  
  const handlePost = async (e) => {
    e.preventDefault();

  if (!title || !subtitle || !content || !thumbnailUrl) {
    console.error('Please fill in all the required fields.');
    return;
  }

   

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        
        console.error('Token not available');
        return;
      }
     
    
    const response = await axios.post('http://localhost:3030/post/edit-post', {
        postid:id,
        title,
        subtitle,
        content,
        thumbnail:thumbnailUrl
      }, {
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    });
    console.log(response)
navigate('/');
      
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

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
                {thumbnailUrl && (
                      <img
                        src={thumbnailUrl}
                        alt='uploaded image'
                        className='img-thumb-create'
                      />
                    )}
                    </Grid></label>
                <input type='file'   onChange={handleUpload} className='inp-img' name='img' id='img'></input>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{width:"100%"}}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                        InputLabelProps={{ style: { fontSize: '10px' } }}

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
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                        InputLabelProps={{ style: { fontSize: '10px' } }}
                      />
</Grid>
        {/* rich text editor */}
    <Grid container className='react-quill'>
        <Grid item container className='react-quill'>
        <ReactQuill
           value={content}
           onChange={(e) => setContent(e.target.value)}
  style={{ width: '100%',height:'100%', fontFamily: "'Arial', sans-serif" }}
/>
        </Grid>


    </Grid>
    <Grid container className='btn-g-c'>
    <button className='btn' onClick={handlePost} >
        Edit
    </button>
</Grid>
    </Grid>
    

    </Grid>
    </Grid>
</>
  )
}

export default EditPage