import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

export default function App() {
  return (
    <Router>
      <Loader />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/todo" component={Todo} exact />
        <Route path="/movies" component={Movies} exact />
        <Route path="/movie/:id" component={MovieDetails} exact />
        <Route path="/favorites" component={Favorites} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}