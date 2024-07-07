import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import { Grid, Typography, CircularProgress } from '@mui/material'
import img1 from '../../Assets/images/articles.jpg';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
import axios from 'axios';

function FeedPage({setAuth}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token not available');
          return;
        }

        const response = await axios.get('http://localhost:3030/post/get-all-post', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data.posts);
        console.log(response.data.posts)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recent data', error);
        setLoading(false);
      }
    };

    fetchRecentData();
  }, []);
  return (
   
    <>

        <Navbar setAuth={setAuth}/>
 
{/* top 5 posts  */}
    
    <Grid container className='wrap-1-h'>
      <Grid item className='wrap-hp'>
     <Grid container className='wrap-2-h'>
<Grid container className='text-1-h4'>
  <Typography variant='h5' sx={{fontWeight:700}}>
    All blog posts
  </Typography>
</Grid>
{loading ? (
              <CircularProgress style={{ color: '#000' }} />
            ) : (
              <>
                {data.map((posts) => (
                  <PostCard key={posts._id} thumbnail={posts.thumbnail} id={posts._id} title={posts.title} subtitle={posts.subTitle} />
                ))}
              </>
            )}
       

        </Grid>
      </Grid>
    </Grid>


    <Footer/>
    </>
  )
}

export default FeedPage