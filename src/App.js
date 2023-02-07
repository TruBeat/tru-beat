// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
// import { Auth } from 'aws-amplify';
import './App.css';
import DrawerAppBar from './components/NavBar/navBar';
import Music from './components/SideMusicCarousel/MiniWindow';
import List from './components/MusicCollection/songList';
import Home from './components/Home/home';
import MainScreen from './components/Main/main';
import LoginWindow from './components/LoginWindow';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
    setAuthenticated(false);
  }, []);

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     // const user = await Auth.currentAuthenticatedUser();
  //     // setUser(user);
  //     setAuthenticated(true);
  //   })();
  // }, []);

  // useEffect(() => {
  // if (!authenticated) {
  //   return <LoginWindow />;
  //   }
  // }, [authenticated]);

  return (
    <div>
      <DrawerAppBar authenticated={authenticated}  setAuthenticated={setAuthenticated}/>
      {
        authenticated ?  <div className='songStatusBar'>
        <div className="mainScreen">
          <Home/>
          <MainScreen/>
          <div className='ListAndMusicScreen'>
            <List/>
            <Music />
          </div>
        </div>
        <div className='TitleBar'>
        </div>
        </div> :
          <LoginWindow setAuthenticated={setAuthenticated} />
      }
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <LoginWindow />
//     </div>
//   );
// }

// export default App;
