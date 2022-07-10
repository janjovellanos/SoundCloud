import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import AllSongs from "./components/SongComponents/AllSongs";
import SongDetails from "./components/SongComponents/SongDetails";
import AllAlbums from "./components/AlbumComponents/AllAlbums";
import AlbumDetails from "./components/AlbumComponents/AlbumDetails";
// import MusicPlayer from "./components/Navigation/MusicPlayer";
// import CreateSong from "./components/CreateSong";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/songs'>
            <AllSongs />
          </Route>
          <Route path='/songs/:songId'>
            <SongDetails />
            {/* <AllSongs /> */}
          </Route>
          <Route exact path="/albums">
            <AllAlbums />
          </Route>
          <Route path='/albums/:albumId'>
            <AlbumDetails />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
