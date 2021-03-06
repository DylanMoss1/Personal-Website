import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactme' component={() => <ContactMe success={false} />} />
          <Route path='/contactme-submit' component={() => <ContactMe success={true}/>} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;