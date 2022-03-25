import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import MoviePage from './components/MoviePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie/:imdbID' element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
