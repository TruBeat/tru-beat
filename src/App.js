// import logo from './logo.svg';
import './App.css';
import Music from './components/UI/music';
import List from './components/SongList/songList';
import Home from './components/Home/home';
import Main_Screen from './components/Main/main';

function App() {
  return (
    <div>
        <input className="search" type="text" placeholder="  Search for song, artist etc..." />
      <Home />
      <Main_Screen/>
        <div className='ListHold'>
          <List />
          <Music />
        </div>
      </div>
  );
}

export default App;
