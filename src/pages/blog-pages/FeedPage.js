import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Grid, Typography, CircularProgress } from '@mui/material';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FeedPage({ setAuth }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Component mounted');
    const fetchRecentData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token not available');
          return;
        }

        const response = await axios.get('https://blog-backend-delta-two.vercel.app/post/get-all-post', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('API Response:', response.data.posts);
        setLoading(false);

      setData(response.data.posts)
      } catch (error) {
        console.error('Error fetching recent data:', error);
        setLoading(false);
      }
    };

    fetchRecentData();
  }, []);

  useEffect(() => {
    console.log('Data updated:', data);
  }, [data]); // Run whenever data changes

  console.log('Rendering FeedPage');
  
  return (
    <>
      <Navbar setAuth={setAuth} />

      {/* Top 5 posts */}
      <Grid container className='wrap-1-h'>
        <Grid item className='wrap-hp'>
          <Grid container className='wrap-2-h'>
            <Grid container className='text-1-h4'>
              <Typography variant='h5' sx={{ fontWeight: 700 }}>
                All blog posts
              </Typography>
            </Grid>
            {loading && data.length === 0 ? (
              <CircularProgress style={{ color: '#000' }} />
            ) : (
              <>
                {data.map((post) => (
                  <PostCard
                    key={post._id}
                    title={post.title}
                    subtitle={post.subtitle} // Adjust to match your API response structure
                    thumbnail={post.thumbnail}
                    owner={post.isOwner} // Adjust to match your API response structure
                    post={post}
                  />
                ))}
              </>
            )}
          </Grid>
        </Grid>
        <Grid item className='wrap-hp '>
  <Link to='/create' style={{width:"100%", marginBlock:"5vh"}}>
<button className='btn-2'>Create post</button>
  </Link>
   
   </Grid> 
      </Grid>

    </>
  );
}

export default FeedPage;
