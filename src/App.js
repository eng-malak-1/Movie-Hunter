import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import Movies from './components/movies'
import Cartoons from './components/cartoons'
import News from './components/news'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState , useEffect} from 'react';




function App() {

  
//..................................start api.......................................

  const  [movieList , setMovieList] = useState([])


  const getMovie =() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=c6c18d898735bd02c03d1a3cf212bb9e")
    .then( res => res.json())
    .then(json => setMovieList(json.results))
  }


  useEffect( () => {
    getMovie()
    
  },[])

  console.log(movieList);


//......................end api.............................


  return (
    
    
    
    <div className="App">

      
{/* <BrowserRouter>

  <Routes>

    <Route  path='/' element={<Home/>}/>
    <Route path='/escape' element={<Escape/>}/>
    
  </Routes>

</BrowserRouter> */}





    <Navbar></Navbar>
    <Home></Home>
    
    <Movies></Movies>
    <Cartoons></Cartoons>
    <News></News>



{/*........................ get data from api                      */}

<h1 className="tittle text-light">Coming Soon</h1>
<div className='soon'>

{movieList.map((movie) => (
  <div className='api-content'>
  <img className='api-img' style={{margin:'1rem'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }/>
  
  <h5 className='api-title text-light' > {movie.title} </h5>
  
  
</div>
))}
</div>


{/*......................... end get data from api                     */}

    </div>
    
  );
}

export default App;

