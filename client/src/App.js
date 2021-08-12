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
