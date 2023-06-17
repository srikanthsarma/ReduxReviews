import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/PageNotfound/PageNotFound';
import SignUp from './Components/Auth/SignUp';
import ProtectedRoute from './Components/Auth/ProtectedRoute';


function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ProtectedRoute></ProtectedRoute>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/Home' element={<ProtectedRoute></ProtectedRoute>}></Route>
            <Route path='/movie/:imdbID' element={<MovieDetails></MovieDetails>}></Route>
            <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
