import React, {useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {texts} from './texts/texts';

function App() {
  let [appText] = useState(texts)

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={props => <Home texts={appText} {...props} />} />
        <Route path='/about' render={props => <About texts={appText} {...props} />} />
        <Route path='/contact' render={props => <Contact texts={appText} {...props} />} />
      </Switch>
      <footer>
        <h3>Footer incoming</h3>
      </footer>
    </div>
  );
}

export default App;
