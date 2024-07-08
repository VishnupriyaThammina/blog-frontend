import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../components/Navbar';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const cloudinaryCore = {
  cloud_name: 'du2yn8mun',
};

function CreatePage({ setAuth }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [error, setError] = useState(null);
  const [title,setTitle] = useState();
  const [subtitle,setSubtitle] = useState();
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleTitle=(e)=>{
    setTitle(e.target.value);
  }
  const handleSubTitle=(e)=>{

    setSubtitle(e.target.value);
  }
  const handleContent = (value) => {
    setContent(value);
  };
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

  // api request to backend to create post 


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
     
    
    const response = await axios.post('http://localhost:3030/post/create-post', {
        title,
        subtitle,
        content,
        thumbnailUrl
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
      <Navbar setAuth={setAuth} />
      <form>
        {/*Rich text editor */}
        <Grid container className='wrap-1-h'>
          <Grid item className='wrap-hp'>
            <Grid container>
              {/* add thumbnail image */}
              <Grid container className='img-w-c'>
                <Grid item className='add-img'>
                  <label htmlFor='img' className='label-img'>
                    {thumbnailUrl && (
                      <img
                        src={thumbnailUrl}
                        alt='uploaded image'
                        className='img-thumb-create'
                      />
                    )}
                  </label>
                  <input
                    type='file'
                    onChange={handleUpload}
                    className='inp-img'
                    name='img'
                    id='img'
                  />
                </Grid>
              </Grid>
              {/* text title and sub title */}
              <Grid container>
                <TextField
                  label='Title'
                  variant='filled'
                  id='title'
                  type='text'
                  onChange={handleTitle}
                  name='title'
                  sx={{ width: '100%' }}
                  style={{ marginTop: 11 }}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid container>
                <TextField
                  label='Sub Title'
                  variant='filled'
                  id='sub-title'
                  onChange={handleSubTitle}
                  type='text'
                  name='sub-title'
                  sx={{ width: '100%' }}
                  style={{ marginTop: 11 }}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              {/* rich text editor */}
              <Grid container className='react-quill'>
                <Grid item container className='react-quill'>
                  <ReactQuill
                        onChange={handleContent}

                    style={{
                      width: '100%',
                      height: '100%',
                      fontFamily: "'Arial', sans-serif",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container className='btn-g-c'>
                <Link to='/profile' style={{ width: '100%' }}>
                  <button className='btn' onClick={handlePost}>Post</button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default CreatePage;
