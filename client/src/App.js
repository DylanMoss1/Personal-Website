import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactme' component={ContactMe} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;


/*

import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [db_data, setDBData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  useEffect(() => {
    fetch("/db")
      .then((res) => res.json())
      .then((db_data) => setDBData(db_data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        I am Dylan!
        <p>{!data ? "Loading..." : data}</p>
        <p>{!db_data ? "Also loading...": db_data}</p>
      </header>
    </div>
  );
}

export default App;
*/