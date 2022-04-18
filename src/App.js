import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Service from './Components/Service/Service';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <NavBar />
      <div className='body-section'>
        <Routes>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/service' element={<Service />}> </Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/about' element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;