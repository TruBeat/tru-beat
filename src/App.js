// import logo from './logo.svg';
import './App.css';
import Music from './components/UI/music';
import List from './components/SongList/songList';
import Home from './components/Home/home';

function App() {
  return (
      <div>
        <Home />
        <List />
        <div className='App'>
        <Music />
        </div>
      </div>
  );
}

export default App;
