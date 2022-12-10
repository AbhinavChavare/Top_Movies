
import './App.css';
import Headerlogo from './HeaderNavbar/Headerlogo';
import {Routes,Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Login from './Pages/Loginout/Login';
import Logout from './Pages/Loginout/Logout';
import Home from './Pages/Home/Home';
import MovieList from './Pages/MovieList/MovieList';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import Protected from './Components/Protected/Protected';

function App() {
  return (
    <div className='appCont' >
 
<Headerlogo/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/movie/:type' element={<Protected dataprops={<MovieList/>}/>  }></Route>
<Route path='/movies/:id' element={ <Protected dataprops={ <MovieDetails/>}/>}></Route>
<Route path='/login' element={<Login/>} />
<Route path='/logout' element={<Logout/>} />
</Routes>
<Footer/>

    </div>
  );
}

export default App;
