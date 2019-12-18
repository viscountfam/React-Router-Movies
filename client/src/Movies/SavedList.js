import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie"><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></span>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
