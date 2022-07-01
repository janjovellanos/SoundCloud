import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import AllSongs from "./components/AllSongs";
import SongDetails from "./components/SongDetails";
import MusicPlayer from "./components/Navigation/MusicPlayer";


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
            <MusicPlayer />
          </Route>
          <Route path='/songs/:songId'>
            <SongDetails />
            <MusicPlayer />
            <AllSongs />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
