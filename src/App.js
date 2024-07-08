import '../src/Assets/style/main.scss'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth-pages/Login';
import CheckMail from './pages/auth-pages/CheckMail';
import ResetPassword from './pages/auth-pages/ResetPassword';
import UserNotVerified from './pages/auth-pages/UserNotVerfied';
import Verification from './pages/auth-pages/Verification';
import Register from './pages/auth-pages/Register';
import UpdatedPassword from './pages/auth-pages/UpdatedPassword';
import FailedVerification from './pages/auth-pages/FailedVerification';
import HomePage from './pages/blog-pages/HomePage';
import FeedPage from './pages/blog-pages/FeedPage';
import Profile from './pages/blog-pages/Profile';
import EditPage from './pages/blog-pages/EditPage';

import Post from './pages/blog-pages/Post';
import CreatePage from './pages/blog-pages/CreatePage';
import LinkSent from './pages/auth-pages/LinkSent';
import ResetPasswordMail from './pages/auth-pages/ResetPasswordMail';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
function App() {
  const [auth,setAuth]= useState(true)
  
useEffect(() => {
  const token = localStorage.getItem('token')
// we can only get token on successful login
if(token){
    setAuth(true);
}
}, [])
  return (
  <>
  {/* after wrapping app in browser router in index.js; proceed with routing  */}
  <Routes>
 
    <Route path='/' element={<HomePage setAuth={setAuth} />} />
    <Route path='/feed' element={<FeedPage setAuth={setAuth}/>}/>
    <Route path='/profile' element={<Profile setAuth={setAuth}/>}/>
    <Route path='/post/:id' element={<Post setAuth={setAuth}/>}/>
    <Route path='/create' element={<CreatePage setAuth={setAuth}/>}/>
    <Route path='/edit/:id' element={<EditPage setAuth={setAuth}/>}/>
 
    <Route path='/login' element={<Login setAuth={setAuth}/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/checkmail' element={<CheckMail/>}/>
    <Route path='/updated-password' element={<UpdatedPassword/>}/>
    <Route path='/reset-password/:id' element={<ResetPassword/>}/>
    <Route path='/not-verified' element={<UserNotVerified/>}/>
    <Route path='/verification/:id' element={<Verification/>}/>
    <Route path='/failed-verification' element={<FailedVerification/>}/>
    <Route path='/linksent' element={<LinkSent/>}/>
    <Route path='/reset-password' element={<ResetPasswordMail/>}/>
    {/* redirect to login for any other access  */}
<Route path='*' element={<Login/>} />
  


  {/* Depending on http response we can render these page but they are same for time being i designed them seperately */}








  </Routes>
  </>
  );
}

export default App;
