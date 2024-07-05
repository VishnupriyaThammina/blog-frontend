import '../src/Assets/style/main.scss'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth-pages/Login';
import CheckMail from './pages/auth-pages/CheckMail';
function App() {
  return (
  <>
  {/* after wrapping app in browser router in index.js; proceed with routing  */}
  <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Login/>} />
    <Route path='/checkmail' element={<CheckMail/>}/>
  </Routes>
  </>
  );
}

export default App;
