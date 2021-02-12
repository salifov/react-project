import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import MovieForm from './components/movieForm';
import Movies from './components/movies';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className = "container" >
        <Switch>
          
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Redirect from="/" exact to="/movies" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
