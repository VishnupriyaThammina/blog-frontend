import React, { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
import img1 from '../../Assets/images/articles.jpg';

function HomePage({ setAuth }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
const [res,setRes] = useState('')
  useEffect(() => {
    console.log('Component mounted');
    const fetchRecentData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token not available');
          return;
        }

        const response = await axios.get('https://blog-backend-delta-two.vercel.app/post/get-5-post', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('API Response:', response.data.posts);
        setData(response.data.posts)
      setLoading(false);

      } catch (error) {
        console.error('Error fetching recent data:', error);
        setLoading(false);
      }
    };

    fetchRecentData();
  }, []);

  useEffect(() => {
    console.log('Data updated:', data);
    console.log('res:',res)
  }, [data,res]); 
 console.log(res)
  return (
    <>
      <Navbar setAuth={setAuth} />

      {/* Banner image and text */}
      <Grid container className='wrap-1-h'>
        <Grid item className='wrap-hp'>
          <Grid container item className='banner-img-wrap'>
            <Grid item className='bn-t'>
              <Grid container className='bn-t-1'>
                <Grid item container className='display-text-1'>
                  <h3>Share your knowledge, Memories, Experiences, Just Blog it </h3>
                </Grid>

                <Grid item container className='display-btn-1'>
                  <Link to='/create'>
                    <button className='btn-white'>
                      Create Blog
                    </button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Top 5 posts */}
      <Grid container className='wrap-1-h'>
        <Grid item className='wrap-hp'>
          <Grid container className='wrap-2-h'>
            <Grid container className='text-1-h4'>
              <Typography variant='h5' sx={{ fontWeight: 700 }}>
                Recent blog posts
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
                    subtitle={post.subTitle} // Adjust to match your API response structure
                    thumbnail={post.thumbnail}
                    owner={post.isOwner} // Adjust to match your API response structure
                    post={post}
                  />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default HomePage;
