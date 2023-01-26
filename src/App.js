// import logo from './logo.svg';
import './App.css';
import Music from './components/UI/music';
import List from './components/SongList/songList';
import Home from './components/Home/home';

function App() {
  return (
    <div>
        <input className="search" type="text" placeholder="  Search for song, artist etc..." />
        <Home />
        <div className='ListHold'>
          <List />
          <Music />
        </div>
      </div>
  );
}

export default App;
