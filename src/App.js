// import logo from './logo.svg';
import './App.css';
import Music from './components/SideMusicCarousel/MiniWindow';
import List from './components/MusicCollection/songList';
import Home from './components/Home/home';
import MainScreen from './components/Main/main';
import DrawerAppBar from './components/NavBar/navBar';

function App() {
  return (
    <div>
      <DrawerAppBar/>
      <div className="mainScreen">
        <Home />
        <MainScreen/>
        <div className='ListAndMusicScreen'>
          <List/>
          <Music/>
        </div>
      </div>
    </div>
  );
}

export default App;
