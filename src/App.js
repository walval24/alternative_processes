import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Exhibitions from './components/pages/Exhibitions';
import Academy from './components/pages/Academy';
import Products from './components/pages/Exhibitions';
import Contacts from './components/pages/Contacts';
import CheatSheets from './components/pages/CheatSheets';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/alternative-processes-online-course' component={Academy} />
          <Route path='/ap-cheat-sheets' component={CheatSheets} />
          <Route path='/blog' component={Blog} />
          <Route path='/online-exhibitions' component={Exhibitions} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
