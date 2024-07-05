import '../src/Assets/style/main.scss'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth-pages/Login';
function App() {
  return (
  <>
  {/* after wrapping app in browser router in index.js; proceed with routing  */}
  <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Login/>} />

  </Routes>
  </>
  );
}

export default App;
