// import logo from './logo.svg';
import './App.css';
import Music from './components/UI/music';
import List from './components/SongList/songList';
import Home from './components/Home/home';
import MainScreen from './components/Main/main';

function App() {
  return (
    <div className="mainScreen">
      <Home />
      <MainScreen/>
      <div className='ListAndMusicScreen'>
        <List/>
        <Music/>
      </div>
    </div>
  );
}

export default App;
