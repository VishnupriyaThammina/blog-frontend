import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import img1 from '../Assets/images/articles.jpg';
import Popup from './Popup';
import { Link } from 'react-router-dom';

function PostCard({ title, subtitle, thumbnail, owner,post  }) {
  const [isOpen, setOpen] = useState(false);
  const [pop, setPop] = useState('');
  const [link, setLink] = useState('');
const [ func, setFunc] =useState('');
  function toggleOpen() {
    setOpen(!isOpen); // Toggles the state of isOpen
  }

  function deletePop() {
    setPop('Delete');
    setFunc('DeletePost')
    toggleOpen(); // Opens the popup
  }

  function editPop() {
    setPop('Edit');
    setFunc('EditPost')
    toggleOpen(); // Opens the popup
  }
  return (
    <Grid className='p-wrap'>
      <Grid className='p-w-1'>
        <Grid container className='pw1-w'>
          {/* area for img */}
          <Grid item className='pw1-img'>
            <Grid className='pw12-1'>
              <img className='img-post' src={thumbnail || img1} alt='post img' />
            </Grid>
          </Grid>
          {/* area for text */}
          <Grid item className='pw1-ta'>
            {/* heading */}
            <Grid container className='pwta-w'>
              <Grid className='pwta-1'>
                <Typography variant='h5' sx={{ fontWeight: 700 }}>
                  {title || 'Default Title'}
                </Typography>
              </Grid>
              <Grid className='pwta-2'>
                <Typography variant='body'>
                  {subtitle || 'Default Sub Title'}
                </Typography>
              </Grid>
              <Grid className='pwta-3'>
                <Grid container className='pwta-3-1'>
                  <Grid className='pwta-btn'>
                    <Link to={`/post/${post._id}`}  style={{ width: '100%' }}>
                      <button className='btn'>Read more</button>
                    </Link>
                  </Grid>
                  {owner === true && (
                    <>
                      <Grid className='pwta-btn'>
                        <button onClick={editPop} className='btn-1'>Edit</button>
                      </Grid>
                      <Grid className='pwta-btn'>
                        <button className='btn-3'  onClick={deletePop}>Delete</button>
                      </Grid>
                    </>
                  )}
                  {isOpen && (
                    <Popup handleClose={toggleOpen} handleFunction={func} popText={pop} post={post} link={link} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PostCard;
