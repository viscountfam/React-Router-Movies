import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
const App = () => {
  const [savedList, setSavedList] = useState( [] );
  
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
 
  return (
    <div>
      <SavedList list={savedList} path="/movies/:id" />
      {/* <NavLink to="/">Home</NavLink> */}
      {/* <NavLink to="/Movie">Movies</NavLink> */}
      <Switch>
        <Route exact path="/">
          <MovieList/>
        </Route>
        <Route path="/movies/:id">
          <Movie addToSavedList={addToSavedList} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
