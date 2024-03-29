import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import AllSongs from "./components/SongComponents/AllSongs";
import SongDetails from "./components/SongComponents/SongDetails";
import AllAlbums from "./components/AlbumComponents/AllAlbums";
import AlbumDetails from "./components/AlbumComponents/AlbumDetails";
import Home from "./components/Navigation/Home";



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
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/songs'>
            <AllSongs />
          </Route>
          <Route exact path='/songs/:songId'>
            <SongDetails />
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
