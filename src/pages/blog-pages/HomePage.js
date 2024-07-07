import React, { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
import img1 from '../../Assets/images/articles.jpg';

function HomePage({ setAuth }) {
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

        const response = await axios.get('http://localhost:3030/post/get-5-post', {
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

      <Footer />
    </>
  );
}

export default HomePage;
