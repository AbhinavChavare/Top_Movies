
import './App.css';
import Headerlogo from './HeaderNavbar/Headerlogo';
import {Routes,Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Login from './Pages/Loginout/Login';
import Logout from './Pages/Loginout/Logout';

function App() {
  return (
    <div className='appCont' >
 
<Headerlogo/>
<Routes>
<Route path='/login' element={<Login/>} />
<Route path='/logout' element={<Logout/>} />

</Routes>


<Footer/>

    </div>
  );
}

export default App;
