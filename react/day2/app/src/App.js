import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/todo" component={Todo} exact />
        <Route path="/movies" component={Movies} exact />
        <Route path="/movie/:id" component={MovieDetails} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}