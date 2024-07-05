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
function App() {
  return (
  <>
  {/* after wrapping app in browser router in index.js; proceed with routing  */}
  <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<HomePage/>} />

    <Route path='/register' element={<Register/>} />
    <Route path='/checkmail' element={<CheckMail/>}/>
    <Route path='/updated-password' element={<UpdatedPassword/>}/>
    <Route path='/reset-password' element={<ResetPassword/>}/>
    <Route path='/not-verified' element={<UserNotVerified/>}/>
  {/* Depending on http response we can render these page but they are same for time being i designed them seperately */}
    <Route path='/verification' element={<Verification/>}/>
    <Route path='/failed-verification' element={<FailedVerification/>}/>

  </Routes>
  </>
  );
}

export default App;
